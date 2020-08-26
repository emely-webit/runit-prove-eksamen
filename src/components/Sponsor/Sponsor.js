import React, {useState, useEffect} from 'react'
import GoldSpons from './GoldSpons'
import SilverSpons from './SilverSpons'
import NormalSpons from './NormalSpons'

const Sponsor = () => {
    const [kategori, setKategori] = useState({})

    useEffect(() => {
      let url = "http://localhost:5021/sponsorkategori";
      fetch(url, {
        method: "GET",
      })
      .then(data => {
        return data.json();
      })
      .then(jsonData => {
        setKategori(jsonData);
      })
      .catch(err => {
        alert("der er sket en fejl med kategorier " + err);
      })
    },[])

    let kategoriListe = "";

    if(kategori.length > 0){
      kategoriListe = kategori.map(k => {
        if(k.kategori === "Guld"){

          return (
            <>
            <p
              key={k._id}
              className="bg-primary p-1 text-uppercase text-white font-weight-bold w-50 mb-2"
            >
              {k.kategori}
            </p>
              <GoldSpons />
            </>
          );
        }
        else if(k.kategori === "Sølv"){

          return (
            <>
            <p
              key={k._id}
              className="bg-primary p-1 text-uppercase text-white font-weight-bold w-50 mb-2"
            >
              {k.kategori}
            </p>
              <SilverSpons/>
            </>
          );
        }
        else if (k.kategori === "Almindelig samarbejdspartner") {
               return (
                 <>
                   <p
                     key={k._id}
                     className="bg-primary p-1 text-uppercase text-white font-weight-bold w-50 mb-2"
                   >
                     {k.kategori}
                   </p>
                   <NormalSpons/>
                 </>
               );
             }
      })
    }

    return (
      <section className="ml-lg-3 mt-4 py-4 bg-white w-85 sponsor_section">
        {kategoriListe}
       
      </section>
    );
}

export default Sponsor
