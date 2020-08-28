import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'

const EventTilmeldingSlet = () => {
    const [sletE, setSletE] = useState();
    const history = useHistory();
    const {slet_id} = useParams();

useEffect(() => {
    let url = `http://localhost:5021/eventtilmelding/${slet_id}`;
    fetch(url, {
        method: "GET",
    })
    .then(data => {
        return data.json();
    })
    .then(jsonData => {
        setSletE(jsonData);
    })
    .catch(err => {
        alert("Der er sket en fejl med hentning af den valgte mail " + err);
    })
}, [slet_id])

const sletTilmeld = e => {
    e.preventDefault();
    let url = `http://localhost:5021/eventtilmelding/admin/${slet_id}`;
    fetch(url, {
        method: "DELETE",
    })
    .then(res => {
        res.json();
        alert("Den valgte tilmelding er nu slettet");
        history.push("/admin/event-tilmelding");
    })
    .catch(err => {
        alert("Der gik noget galt da du trykkede slet " + err);
    });
};
  
let eventTilmelding = "";
if(sletE !== undefined){
    eventTilmelding = (
      <div className="card col-12 mx-auto my-5 p-4">
        <h2 className="card-title">{sletE.email}</h2>
        <h3 className="card-text">{sletE.event.titel}</h3>
        <small className="mt-4">idr = {sletE._id}</small>
      </div>
    );
}
  
  return (
    <section className="ml-lg-3 mt-4 p-3 bg-white w-85 row">
      <h1>Er du sikker på du vil slette denne tilmelding?</h1>
      {eventTilmelding}
      <button
        className="btn"
        onClick={() => {
          history.push("//admin/event-tilmelding");
        }}
      >
        Fortryd
      </button>

      <button className="btn" onClick={sletTilmeld}>
        Slet
      </button>
    </section>
  );
}

export default EventTilmeldingSlet
