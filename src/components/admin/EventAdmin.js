import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EventAdmin = () => {
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

  if (events.length > 0) {
    eventListe = events.map((ev) => {
      return (
        <div key={ev._id} className="row border border-dark p-2">
          <p className="col-lg col-12">{ev._id}</p>
          <p className="col-lg col-12">{ev.titel}</p>
          <p className="col-lg col-12">{ev.region.regionnavn}</p>
          <p className="col-lg col-12">{ev.dato}</p>
          <Link className="col-lg col-12" to={`/admin/ret/${ev._id}`}>
            Ret
          </Link>
          <Link className="col-lg col-12" to={`/admin/slet/${ev._id}`}>
            Slet
          </Link>
        </div>
      );
    });
  }

  return (
    <section className="ml-lg-3 mt-4 p-3 bg-white w-85">
      <div>
        <Link className="d-lg-inline d-block" to="/admin/event-tilmelding">
          Event tilmelding
        </Link>
        <Link className="d-lg-inline d-block" to="/admin/nyhed">
          Nyhedsbrev tilmelding
        </Link>
      </div>
      <h1 className="my-3 h3">Administrator side - alle events</h1>
      <div className="row border border-dark p-2 d-lg-flex d-none">
        <p className="col">Id</p>
        <p className="col">Titel</p>
        <p className="col">Region</p>
        <p className="col">Dato</p>
        <p className="col">Ret</p>
        <p className="col">Slet</p>
      </div>
      <Link className="d-inline-block my-lg-3" to="/admin/opret">
        Opret event
      </Link>
      {eventListe}
    </section>
  );
};

export default EventAdmin;
