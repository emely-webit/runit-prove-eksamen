import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ImageUploader from "react-images-upload";

const EventOpret = () => {
  const [opEvent, setOpEvent] = useState();
  const [opBillede, setOpBillede] = useState();
  const history = useHistory();
  const [regNavn, setRegNavn] = useState({});

  useEffect(() => {
    let url = "http://localhost:5021/region";
    fetch(url, {
      method: "GET",
    })
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
          setRegNavn(jsonData);
          setOpEvent({ regionID: jsonData[0]._id });
      })
      .catch((err) => {
        alert("Der gik noget galt med regioner " + err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("event", JSON.stringify(opEvent));
    formdata.append("billede", opBillede);

    let url = "http://localhost:5021/event/admin";
    fetch(url, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formdata,
    })
      .then((data) => {
        console.log(data);
        alert("Dit event er nu oprettet");
        history.push("/admin");
      })
      .catch((err) => {
        alert("Der skete en fejl da du prøvede at oprette et event " + err);
      });
  };

  let regList = "";
  if (regNavn.length > 0) {
    regList = regNavn.map((reg) => {
      return (
        <option key={reg._id} value={reg._id}>
          {reg.regionnavn}
        </option>
      );
    });
  } else {
    return <option>Der er sket en fejl</option>;
  }

  return (
    <section className="ml-lg-3 mx-0 mt-4 p-3 bg-white w-85">
      <h1>Opret et nyt event</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="d-block" htmlFor="titel">
            Event titel
          </label>
          <input
            className="form-control"
            type="text"
            name="titel"
            id="titel"
            required
            onChange={(e) => setOpEvent({ ...opEvent, titel: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dato" className="d-block">
            Dato for event
          </label>
          <input
            className="form-control"
            type="datetime-local"
            name="dato"
            id="dato"
            required
            onChange={(e) => setOpEvent({ ...opEvent, dato: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="beskrivelse">Beskrivelse af eventet</label>
          <textarea
            className="form-control"
            name="beskrivelse"
            id="beskrivelse"
            cols="30"
            rows="10"
            required
            onChange={(e) =>
              setOpEvent({ ...opEvent, beskrivelse: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="distance">Distance skal oplyses i meter</label>
          <input
            className="form-control"
            type="number"
            name="distance"
            id="distance"
            required
            onChange={(e) => {
              setOpEvent({ ...opEvent, distance: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pris">Pris</label>
          <input
            className="form-control"
            type="number"
            name="pris"
            id="pris"
            required
            onChange={(e) => setOpEvent({ ...opEvent, pris: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="antalpladser">Antal pladser til eventet</label>
          <input
            className="form-control"
            type="number"
            name="antalpladser"
            id="antalpladser"
            required
            onChange={(e) =>
              setOpEvent({ ...opEvent, antalpladser: e.target.value })
            }
          />
        </div>
        {/* <div className="form-group">
          <select
            value={opEvent.regionID}
            className="form-control"
            onChange={(e) =>
              setOpEvent({ ...opEvent, regionID: e.target.value })
            }
          >
            {regList}
          </select>
        </div> */}
        <ImageUploader
          withIcon={true}
          buttonText="Vælg et billede til eventet"
          onChange={(billede) => {
            setOpBillede(billede[0]);
          }}
          imgExtension={[".jpg", ".gif", ".png"]}
          maxFileSize={5242880}
          withPreview={true}
        />

        <button
          type="button"
          className="btn"
          onClick={() => {
            history.push("/admin");
          }}
        >
          Fortryd
        </button>
        <button type="submit" className="btn btn-success">
          Opret
        </button>
      </form>
    </section>
  );
  // {"titel":"Nu puttet 2","dato":"2020-08-28","beskrivelse":"Nytestfrarest","distance":30,"pris":200,"antalpladser":40,"region":"5f3fc6a432880d01a828b7ce"}
};

export default EventOpret;
