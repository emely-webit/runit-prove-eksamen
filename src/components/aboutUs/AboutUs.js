import React from 'react'

const AboutUs = () => {
    return (
      <section className="ml-lg-3 mt-4 p-3 bg-white w-85 row">
        <img
          className="img-fluid col-lg-5 col-12"
          src="/img/foresttothebay.jpg"
          alt="relmkg"
        />
        <article className="col-lg-7 col-12">
          <p className="bg-primary p-2 text-uppercase text-white font-weight-bold m-0">
            Om RUN'IT
          </p>
          <h1 className="font-weight-bold my-lg-0 mt-3 h2">Overskrift</h1>
          <p className="mt-3">
            beskrivelse: Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Laborum, officiis! Consequuntur, eligendi aspernatur
            necessitatibus minima architecto ullam voluptas, quod corporis
            dignissimos possimus sapiente incidunt officiis. Iste, consequatur!
            Incidunt, optio tempora!
          </p>
        </article>
      </section>
    );
}

export default AboutUs
