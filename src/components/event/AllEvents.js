import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllEvents = () => {
  const [events, setEvents] = useState({});

  useEffect(() => {
    let url = "http://localhost:5021/event";
    fetch(url, {
      method: "GET",
    })
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        setEvents(jsonData);
      });
  }, []);

  let eventListe = "";

  // function over10() {
  //   console.log("over10 funktion her");
  //   eventListe = events.map((ev) => {
  //     if (ev.distance > 10000) {
  //       let eventMap = [ev += ev];
        
  //       console.log(eventMap);
  //       eventMap.map((eve) => {
  //         return (
  //           <article className="col mb-4" key={eve._id}>
  //             <div className="card bg-light border-0 rounded-0">
  //               <div className="eventHeight">
  //                 <img
  //                   className="card-img-top rounded-0"
  //                   src={`http://localhost:5021/images/events/${eve.billede}`}
  //                   alt="sgseg"
  //                 />
  //               </div>
  //               <div className="card-body">
  //                 <h3 className="card-title h6 font-weight-bold">
  //                   {eve.titel}
  //                 </h3>
  //                 <small className="font-italic">{eve.dato}</small>
  //                 <p className="card-text text_snippet">{eve.beskrivelse}</p>
  //                 <p className="font-weight-bold">Pris: {eve.pris}kr</p>
  //                 <Link className="btn" to={`/event/${eve._id}`}>
  //                   Læs mere
  //                 </Link>
  //               </div>
  //             </div>
  //           </article>
  //         );
  //       });
  //     }
  //   });
  // }

  if (events.length > 0) {
    eventListe = events.map((ev) => {
      return (
        <article className="col mb-4" key={ev._id}>
          <div className="card bg-light border-0 rounded-0">
            <div className="eventHeight">
              <img
                className="card-img-top rounded-0"
                src={`http://localhost:5021/images/events/${ev.billede}`}
                alt="sgseg"
              />
            </div>
            <div className="card-body">
              <h3 className="card-title h6 font-weight-bold">{ev.titel}</h3>
              <small className="font-italic">{ev.dato}</small>
              <p className="card-text text_snippet">{ev.beskrivelse}</p>
              <p className="font-weight-bold">Pris: {ev.pris}kr</p>
              <Link className="btn" to={`/event/${ev._id}`}>
                Læs mere
              </Link>
            </div>
          </div>
        </article>
      );
    });
  }

  return (
    <section
      className="ml-lg-3 mx-0 mt-4 p-3 bg-white w-85 width-100 row"
    >
      <form className="col-lg-2 col-12">
        <h2 className="font-weight-bold h3">Indkreds</h2>
        <label className="d-block font-weight-bold" htmlFor="distance">
          Distance
        </label>
        <input type="radio" name="km" id="over-10-km" />
        {/* <input onChange={over10} type="radio" name="km" id="over-10-km" /> */}
        <label htmlFor="over-10-km" className="ml-2">
          Over 10KM
        </label>
        <br />
        <input type="radio" name="km" id="under-10-km" />
        <label htmlFor="under-10-km" className="ml-2">
          Under 10KM
        </label>
        <br />
        <label htmlFor="hvor-i-landet">Hvor i landet</label> <br />
        {/* Dette skal være dynamisk fra api */}
        <select name="hvor-i-landet" id="hvor-i-landet">
          <option value="Nordjylland">Nordjylland</option>
          <option value="Midtjylland">Midtjylland</option>
          <option value="Sydjylland">Sydjylland</option>
        </select>
      </form>
      <div className="col-lg-10  col-12">
        <h1 className="font-weight-bold">Alle Events</h1>
        <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {/* Skal gøres dynamisk */}
          {eventListe}
        </section>
      </div>
    </section>
  );
};

export default AllEvents;
