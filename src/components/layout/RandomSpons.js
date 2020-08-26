import React, { useEffect, useState } from "react";

const RandomSpons = () => {
  const [random, setRandom] = useState();
  useEffect(() => {
    let url = "http://localhost:5021/sponsor";
    fetch(url, {
      method: "GET",
    })
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        let randomNumber = Math.floor(Math.random(0)*jsonData.length);
        setRandom(jsonData[randomNumber]);
      })
      .catch((err) => {
        alert("der er sket en fejl da du hentede sponsor " + err);
      });
  }, []);

  let randomSponsSection = "";

  if (random !== undefined) {
    if (random.sponsorkategori.kategori === "Guld") {
      randomSponsSection = (
        <article className="bg-info text-center">
          <p className="h3 font-weight-bold">Sponsorer</p>
          <img
            className="img-fluid w-50"
            src={`http://localhost:5021/images/sponsorer/${random.logo}`}
            alt="her skal titel være"
          />
        </article>
      );
    } else if (random.sponsorkategori.kategori === "Sølv") {
      randomSponsSection = (
        <article className="bg-secondary text-center">
          <p className="h3 font-weight-bold">Sponsorer</p>
          <img
            className="img-fluid w-50"
            src={`http://localhost:5021/images/sponsorer/${random.logo}`}
            alt="her skal titel være"
          />
        </article>
      );
    } else {
      randomSponsSection = (
        <article className="bg-white text-center">
          <p className="h3 font-weight-bold">Sponsorer</p>
          <img
            className="img-fluid w-50"
            src={`http://localhost:5021/images/sponsorer/${random.logo}`}
            alt="her skal titel være"
          />
        </article>
      );
    }
  }

  return (
    <>
      {randomSponsSection}
    </>
  );
};

export default RandomSpons;
