import React, {useState, useEffect} from 'react'

const SilverSpons = () => {
    const [silver, setSilver] = useState({});

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
          setSilver(jsonData);
        })
        .catch((err) => {
          alert("Der er sket en fejl " + err);
        });
    }, []);

    let silverListe = "";

    if (silver.length > 0) {
      silverListe = silver.map((s) => {
        if (s.sponsorkategori.kategori === "Sølv") {
          return (
            <div className="col" key={s._id}>
              <img
                className="img-fluid border border-dark"
                src={`http://localhost:5021/images/sponsorer/${s.logo}`}
                alt="logo"
              />
            </div>
          );
        }
      });
    }
    return (
      <section className="row row-cols-2 row-cols-md-4 row-cols-lg-6 p-2">
        {silverListe}
      </section>
    );
}

export default SilverSpons
