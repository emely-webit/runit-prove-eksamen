import React from "react";
import { Link } from "react-router-dom";

const AdvanceSearch = () => {
  return (
    <section className="ml-3 mt-4 p-3 bg-white w-85 row">
      <h1 className="font-weight-bold col-12">Advanceret søg</h1>
      <form className="col-2">
        <div className="form-group">
          <label htmlFor="loeb-navn" className="font-weight-bold mb-0">
            Løbs Navn
          </label>
          <input
            type="text"
            name="loeb-navn"
            id="loeb-navn"
            className="form-control rounded-0"
          />
        </div>
        <div className="form-group">
          <p className="font-weight-bold mb-1">Til og fra pris</p>
          <label htmlFor="pris-fra" className="mb-0">Pris fra</label>
          <input
            className="form-control rounded-0"
            type="number"
            name="pris-fra"
            id="pris-fra"
          />
          <label className="mb-0 mt-2" htmlFor="pris-til">Pris til</label>
          <input
            className="form-control rounded-0"
            type="number"
            name="pris-til"
            id="pris-til"
          />
        </div>
        <div className="form-group mb-1">
          <label className="d-block font-weight-bold" htmlFor="distance">
            Distance
          </label>
          <input type="radio" name="km" id="over-10-km" value="over-10-km" />
          <label htmlFor="over-10-km" className="ml-2">
            Over 10KM
          </label>
          <br />
          <input type="radio" name="km" id="under-10-km" value="under-10-km" />
          <label htmlFor="under-10-km" className="ml-2">
            Under 10KM
          </label>
          <br />
        </div>
        <label className="font-weight-bold" htmlFor="hvor-i-landet">
          Hvor i landet
        </label>
        <br />
        {/* Dette skal være dynamisk fra api */}
        <select
          className="form-control rounded-0"
          name="hvor-i-landet"
          id="hvor-i-landet"
        >
          <option value="Nordjylland">Nordjylland</option>
          <option value="Midtjylland">Midtjylland</option>
          <option value="Sydjylland">Sydjylland</option>
        </select>
        <input type="submit" value="Søg" className="btn mt-2"/>
      </form>
      <div className="col-10">
        <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {/* Skal gøres dynamisk - enten ingen søgeresultater eller de events som matcher */}
              <p>Der er desværre ingen søgeresultater</p>
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

export default AdvanceSearch;
