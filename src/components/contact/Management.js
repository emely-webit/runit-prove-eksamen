import React from 'react'

const Management = () => {
    return (
      <article className="col-lg-7 col-12">
        <h2 className="font-weight-bold">
          Her finde ud information om vores bestyrelse
        </h2>
        {/* Skal vise bestyrelses medlemmer */}
        <select className="form-control w-50 rounded-0" id="bestyrelse">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <div className="row mt-3">
            <div className="col-lg-4 col-12">
            <img src="/img/christian.png" alt="billede af christian" className="img-fluid border border-dark"/>

            </div>
            <article className="col-lg-8 col-12">
                <h3 className="font-weight-bold h4 m-0">Navn</h3>
                <small className="font-italic">Formand</small>
                <p className="mt-3">Beskrivelse Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste!</p>
                <a className="text-dark font-weight-bold" href="mailto:jens@runit.dk">Email: jens@runit.dk</a>
            </article>
        </div>
      </article>
    );
}

export default Management
