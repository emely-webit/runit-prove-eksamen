import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ChosenEvent = () => {
  const [event, setEvent] = useState();
  const { event_id } = useParams();
  const [tilmeldEvent, setTilmeldEvent] = useState({});

  useEffect(() => {
    let url = `http://localhost:5021/event/${event_id}`;
    fetch(url, {
      method: "GET",
    })
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        setEvent(jsonData);
      })
      .catch((err) => {
        alert("Der gik noget galt med at hente den udvalgte event " + err);
      });
  }, [event_id]);

  const tilmeld = (e) => {
    e.preventDefault();
    
    let url = "http://localhost:5021/eventtilmelding/";
    fetch(url, {
      credentials: "include",
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tilmeldEvent),
    })
    .then(data => {
      console.log(data);
      alert('Du er nu tilmeldt eventet');
      window.location.reload(true);
    })
    .catch(err => {
      alert("Noget gik galt da du prøvede at tilmeld dig " + err);
    })
  }

  let eventet = "";

  if (event !== undefined) {
    let region;

    if (event.region === "5f3f613bb269265be85496dd") {
      region = <p className="font-weight-bold my-0">Region: Midtjylland</p>;
    } else if (event.region === "5f3fc6a432880d01a828b7ce") {
      region = <p className="font-weight-bold my-0">Region: Nordjylland</p>;
    } else if (event.region === "5f42e4e4810e2232e03cf66d") {
      region = <p className="font-weight-bold my-0">Region: Sydjylland</p>;
    } else if (event.region === "5f42e4ed810e2232e03cf66e") {
      region = <p className="font-weight-bold my-0">Region: Fyn</p>;
    } else if (event.region === "5f42e4f5810e2232e03cf66f") {
      region = <p className="font-weight-bold my-0">Region: Sjælland</p>;
    } else if (event.region === "5f42e4fe810e2232e03cf670") {
      region = <p className="font-weight-bold my-0">Region: Bornholm</p>;
    }
    eventet = (
      <>
        <img
          className="img-fluid col-lg-5 col-12"
          src={`http://localhost:5021/images/events/${event.billede}`}
          alt="relmkg"
        />
        <article className="col-lg-7 col-12">
          <p className="bg-primary p-2 text-uppercase text-white font-weight-bold m-0">
            Ledige pladser {event.antalpladser}
          </p>
          <h1 className="font-weight-bold my-lg-0 h2 mt-3">{event.titel}</h1>
          <small className="font-italic">{event.dato}</small>
          <p className="mt-3">{event.beskrivelse}</p>
          {region}
          <p className="font-weight-bold my-0">
            Distance: {event.distance} meter
          </p>
          <p className="font-weight-bold h4 my-0">Pris: {event.pris}kr</p>
          <form onSubmit={tilmeld}>
            <input
              className="form-control w-50 rounded-0 d-inline"
              type="email"
              name="tilmeldEvent"
              id="tilmeldEvent"
              placeholder="tilmeldelse email"
              onChange={(e) => setTilmeldEvent({...tilmeldEvent, email: e.target.value, event: event._id})}
            />
            <input
              className="py-2 bg-primary border-0 rounded-0 text-white px-5"
              type="submit"
              value="Tilmeld"
            />
          </form>
        </article>
      </>
    );
  }

  return (
    <section className="ml-lg-3 mt-4 p-3 bg-white w-85 row">{eventet}</section>
  );
};

export default ChosenEvent;
