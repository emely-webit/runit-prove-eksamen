import React from "react";
import { Link } from "react-router-dom";

const NextRun = () => {
  return (
    <article>
      <div className="bg-dark p-2">
        <p className="text-uppercase text-white font-weight-bold">
          næste løb - 55/70 pladser optaget
        </p>
      </div>
      <div className="p-2">
          <p className="bg-primary p-1 text-uppercase text-white font-weight-bold">antal pladser tilbage</p>
          <h2 className="font-weight-bold text-uppercase">Titel</h2>
          <small className="font-italic">dato</small>
          <p>Beskrivelse: Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quos consequuntur exercitationem architecto officiis dolorum itaque ipsum expedita ipsa hic!</p>
          <p className="font-weight-bold">Pris</p>
          <Link className="btn" to="/event">Læs mere</Link>
      </div>
    </article>
  );
};

export default NextRun;
