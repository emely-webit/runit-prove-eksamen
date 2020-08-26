import React, { useState, useEffect } from "react";

const AboutUs = () => {
  const [omOs, setOmOs] = useState({});

  useEffect(() => {
    let url = "http://localhost:5021/omos";

    fetch(url, {
      method: "GET",
    })
    .then(data => {
      return data.json();
    })
    .then(jsonData => {
      setOmOs(jsonData[0]);
    })
    .catch(err => {
      alert('Der er sket en fejl ' + err);
    })
  }, []);

  return (
    <section className="ml-lg-3 mt-4 p-3 bg-white w-85 row">
      <img
        className="img-fluid col-lg-5 col-12"
        src={`http://localhost:5021/images/omos/${omOs.billede}`}
        alt="relmkg"
      />
      <article className="col-lg-7 col-12">
        <p className="bg-primary p-2 text-uppercase text-white font-weight-bold m-0">
          Om RUN'IT
        </p>
        <h1 className="font-weight-bold my-lg-0 mt-3 h2">{omOs.overskrift}</h1>
        <p className="mt-3">{omOs.beskrivelse}</p>
      </article>
    </section>
  );
};

export default AboutUs;
