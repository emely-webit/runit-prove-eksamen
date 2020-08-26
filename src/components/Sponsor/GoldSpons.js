import React, { useEffect, useState } from "react";

const GoldSpons = () => {
  const [guld, setGuld] = useState({});

  useEffect(() => {
    let url = "http://localhost:5021/sponsor";

    fetch(url, {
      method: "GET",
    })
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        setGuld(jsonData);
      })
      .catch((err) => {
        alert("Der er sket en fejl " + err);
      });
  }, []);

  let guldListe = "";

  if (guld.length > 0) {
    guldListe = guld.map((g) => {
     if (g.sponsorkategori.kategori === "Guld"){

       return (
         <div className="col" key={g._id}>
           <img
             className="img-fluid border border-dark"
             src={`http://localhost:5021/images/sponsorer/${g.logo}`}
             alt="logo"
           />
         </div>
       );
     }
    });
  }
  return (
    <section className="row row-cols-1 row-cols-md-2 row-cols-lg-4 p-2">
      {guldListe}
    </section>
  );
};

export default GoldSpons;
