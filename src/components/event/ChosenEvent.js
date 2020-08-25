import React from "react";

const ChosenEvent = () => {
  return (
    <section className="ml-lg-3 mt-4 p-3 bg-white w-85 row">
      <img
        className="img-fluid col-lg-5 col-12"
        src="/img/foresttothebay.jpg"
        alt="relmkg"
      />
      <article className="col-lg-7 col-12">
        <p className="bg-primary p-2 text-uppercase text-white font-weight-bold m-0">
          antal pladser tilbage
        </p>
        <h1 className="font-weight-bold my-lg-0 h2 mt-3">Titel på event</h1>
        <small className="font-italic">Dato</small>
        <p className="mt-3">
          beskrivelse: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Laborum, officiis! Consequuntur, eligendi aspernatur necessitatibus
          minima architecto ullam voluptas, quod corporis dignissimos possimus
          sapiente incidunt officiis. Iste, consequatur! Incidunt, optio
          tempora!
        </p>
        <p className="font-weight-bold my-0">Region:</p>
        <p className="font-weight-bold my-0">Distance:</p>
        <p className="font-weight-bold h4 my-0">Pris</p>
        <form>
          <input className="form-control w-50 rounded-0 d-inline" type="email" name="tilmeldEvent" id="tilmeldEvent" placeholder="tilmeldelse email" />
          <input className="py-2 bg-primary border-0 rounded-0 text-white px-5" type="submit" value="Tilmeld"/>
        </form>
      </article>
    </section>
  );
};

export default ChosenEvent;
