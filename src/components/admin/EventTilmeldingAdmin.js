import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const EventTilmeldingAdmin = () => {
   const [tilmelding, setTilmelding] = useState({});

   useEffect(() => {
     let url = "http://localhost:5021/eventtilmelding";
     fetch(url, {
       method: "GET",
     })
       .then((data) => {
         return data.json();
       })
       .then((jsonData) => {
         setTilmelding(jsonData);
       });
   }, []);

   let tilmeldingListe = "";

   if (tilmelding.length > 0) {
     tilmeldingListe = tilmelding.map((t) => {
       return (
         <div key={t._id} className="row border border-dark p-2">
           <p className="col-lg col-12">{t._id}</p>
           <p className="col-lg col-12">{t.email}</p>
           <p className="col-lg col-12">{t.event.titel}</p>
           <Link
             className="col-lg col-12"
             to={`/admin/event-tilmelding-slet/${t._id}`}
           >
             Slet
           </Link>
         </div>
       );
     });
   }

   return (
     <section className="ml-lg-3 mt-4 p-3 bg-white w-85">
       <Link className="d-lg-inline d-block" to="/admin/nyhed">
         Nyhedsbrev tilmelding
       </Link>
       <Link className="d-lg-inline d-block" to="/admin">
         Event Admin
       </Link>
       <h1 className="my-5 h3">Administrator side - eventtilmelding</h1>
       <div className="row border border-dark p-2 d-lg-flex d-none">
         <p className="col">Id</p>
         <p className="col">Email</p>
         <p className="col">Slet</p>
       </div>
       {tilmeldingListe}
     </section>
   );
}

export default EventTilmeldingAdmin
