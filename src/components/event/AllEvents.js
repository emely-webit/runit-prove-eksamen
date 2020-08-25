import React from "react";
import { Link } from "react-router-dom";

const AllEvents = () => {
  return (
    <section className="ml-3 mt-4 p-3 bg-white w-85 row">
      <form className="col-2">
        <h2 className="font-weight-bold h3">Indkreds</h2>
        <label className="d-block font-weight-bold" htmlFor="distance">
          Distance
        </label>
        <input type="radio" name="km" id="over-10-km" />
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
      <div className="col-10">
        <h1 className="font-weight-bold">Alle Events</h1>
        <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {/* Skal gøres dynamisk */}
          <article className="col mb-4">
            <div className="card bg-light border-0 rounded-0">
              <img
                className="card-img-top rounded-0"
                src="/img/foresttothebay.jpg"
                alt="sgseg"
              />
              <div className="card-body">
                <h3 className="card-title h5 font-weight-bold">Eventnavn</h3>
                <small className="font-italic">Dato</small>
                <p className="card-text">
                  Beskrivelse Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Laboriosam
                </p>
                <p className="font-weight-bold">Pris</p>
                <Link className="btn" to="/event">
                  Læs mere
                </Link>
              </div>
            </div>
          </article>
          
        </section>
      </div>
    </section>
  );
};

export default AllEvents;
