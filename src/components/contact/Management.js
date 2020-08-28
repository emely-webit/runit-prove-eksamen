import React, { useState, useEffect } from "react";

const Management = () => {
  // const [bestyrelsespost, SetBestyrelsespost] = useState({});
  const [bestyrelse, setBestyrelse] = useState({});
  const [position, setPosition] = useState("");

  // useEffect(() => {
  //   let url = "http://localhost:5021/bestyrelsespost";
  //   fetch(url, {
  //     method: "GET",
  //   })
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((jsonData) => {
  //       SetBestyrelsespost(jsonData);
  //     })
  //     .catch((err) => {
  //       alert("Der er sket en fejl " + err);
  //     });
  // }, []);

  // let bestyrelsesListe = "";
  // if (bestyrelsespost.length > 0) {
  //   bestyrelsesListe = bestyrelsespost.map((b) => {
  //     return (
  //       <option key={b._id} value={b.post}>
  //         {b.post}
  //       </option>
  //     );
  //   });
  // }
  // let alleBestyrelse = "";

  useEffect(() => {
    let url = "http://localhost:5021/bestyrelse";
    fetch(url, {
      method: "GET",
    })
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        setBestyrelse(jsonData);
      })
      .catch((err) => {
        alert("Der skete en fejl ved bestyre " + err);
      });
  },[]);

  const valgBestyrelse = (e) => {
    setPosition(e.target.value);
  };

  let alleBestyrelse = "";

  if(bestyrelse.length > 0){
    alleBestyrelse = bestyrelse.map((ab) => {
      console.log(ab.bestyrelsespost.post + position);
      if (ab.bestyrelsespost.post !== position) {
        return <div key={ab._id}></div>;
      } else {
        return (
          <div key={ab._id} className="row mt-3">
            <div className="col-lg-4 col-12">
              <img
                src={`http://localhost:5021/images/bestyrelse/${ab.billede}`}
                alt={ab.fornavn + ab.efternavn + ab.bestyrelsespost.post}
                className="img-fluid border border-dark"
              />
            </div>
            <article className="col-lg-8 col-12">
              <h3 className="font-weight-bold h4 m-0">
                {ab.fornavn} {ab.efternavn}
              </h3>
              <small className="font-italic">{ab.bestyrelsespost.post}</small>
              <p className="mt-3">{ab.beskrivelse}</p>
              <a
                className="text-dark font-weight-bold"
                href={`mailto:${ab.email}`}
              >
                Email: {ab.email}
              </a>
            </article>
          </div>
        );
      }
    })
  }

  
  return (
    <article className="col-lg-7 col-12 mt-lg-0 mt-3">
      <label htmlFor="bestyrelse" className="font-weight-bold h2">
        Her finde ud information om vores bestyrelse
      </label>
      {/* Skal vise bestyrelses medlemmer */}
      <select
        onChange={valgBestyrelse}
        className="form-control w-50 rounded-0"
        id="bestyrelse"
      >
        {/* {bestyrelsesListe} */}
        <option value="Formand">Formand</option>
        <option value="Kasserer">Kasserer</option>
        <option value="Bestyrelsesmedlem">Bestyrelsesmedlem</option>
        <option value="Næstformand">Næstformand</option>
        <option value="Sekretær">Sekretær</option>
      </select>
      {alleBestyrelse}
    </article>
  );
};

export default Management;
