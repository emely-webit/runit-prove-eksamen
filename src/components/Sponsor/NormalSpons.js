import React, {useEffect, useState} from 'react'

const NormalSpons = () => {
    const [normal, setNormal] = useState({});

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
          setNormal(jsonData);
        })
        .catch((err) => {
          alert("Der er sket en fejl " + err);
        });
    }, []);

    let normalListe = "";

    if (normal.length > 0) {
      normalListe = normal.map((n) => {
        if (n.sponsorkategori.kategori === "Almindelig samarbejdspartner") {
          return (
            <div className="col" key={n._id}>
              <img
                className="img-fluid border border-dark"
                src={`http://localhost:5021/images/sponsorer/${n.logo}`}
                alt="logo"
              />
            </div>
          );
        }
      });
    }
    return (
      <section className="row row-cols-2 row-cols-md-4 row-cols-lg-6 p-2">
        {normalListe}
      </section>
    );
}

export default NormalSpons
