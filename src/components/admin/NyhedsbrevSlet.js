import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const NyhedsbrevSlet = () => {
  const [slet, setSlet] = useState();
  const history = useHistory();
  const { nyhed_id } = useParams();

  useEffect(() => {
    let url = `http://localhost:5021/nyhedsbrevtilmelding/${nyhed_id}`;
    fetch(url, {
      method: "GET",
    })
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        setSlet(jsonData);
      })
      .catch((err) => {
        alert(
          "Der er noget der gik galt da du prøvede at slette denne tilmelding " +
            err
        );
      });
  });

  const sletNyhed = (e) => {
    e.preventDefault();
    let url = `http://localhost:5021/nyhedsbrevtilmelding/admin/${nyhed_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => {
        res.json();
        alert("Den valgte email er nu blevet slettet");
        history.push("/admin/nyhed");
      })
      .catch((err) => {
        alert("Der gik noget galt " + err);
      });
  };

  let nyhedsTilmelding = "";
  if (slet !== undefined) {
    nyhedsTilmelding = (
      <div className="card col-12 mx-auto my-5 p-4">
        <h2 className="card-title">{slet.email}</h2>
        <small className="mt-4">idr = {slet._id}</small>
      </div>
    );
  }

  return (
    <section className="ml-lg-3 mt-4 p-3 bg-white w-85 row">
      <h1>Er du sikker på du vil slette denne mail?</h1>
      {nyhedsTilmelding}
      <button
        className="btn"
        onClick={() => {
          history.push("/kat_admin");
        }}
      >
        Fortryd
      </button>

      <button className="btn" onClick={sletNyhed}>
        Slet
      </button>
    </section>
  );
};

export default NyhedsbrevSlet;
