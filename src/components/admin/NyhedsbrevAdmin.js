import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

const NyhedsbrevAdmin = () => {
  const [nyhed, setNyhed] = useState({});

  useEffect(() => {
    let url = "http://localhost:5021/nyhedsbrevtilmelding";
    fetch(url, {
      method: "GET",
    })
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        setNyhed(jsonData);
      });
  }, []);

  let nyhedListe = "";

  if (nyhed.length > 0) {
    nyhedListe = nyhed.map((n) => {
      return (
        <div key={n._id} className="row border border-dark p-2">
          <p className="col">{n._id}</p>
          <p className="col">{n.email}</p>
          <Link className="col" to={`/admin/nyhed-slet/${n._id}`}>Slet</Link>
        </div>
      );
    });
  }

  return (
    <section className="ml-lg-3 mt-4 p-3 bg-white w-85">
      <h1 className="my-5">Administrator siden</h1>
      <div className="row border border-dark p-2">
        <p className="col">Id</p>
        <p className="col">Email</p>
        <p className="col">Slet</p>
      </div>
      {nyhedListe}
    </section>
  );
};


export default NyhedsbrevAdmin
