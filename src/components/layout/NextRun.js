import React, { useEffect, useState } from "react";
// import moment from "moment";
import { Link } from "react-router-dom";

const NextRun = () => {
  const [nextRun, setNextRun] = useState();

  useEffect(() => {
    let url = "http://localhost:5021/event";
    fetch(url, {
      method: "GET",
    })
    .then((data) => {
      return data.json();
    })
    .then((jsonData) => {
      console.log(jsonData)
      const sorted = jsonData.sort((a,b) => { return a.date - b.date})
      console.log(sorted)
      setNextRun(sorted[0]);
    })
    .catch((err) => {
      alert('Der gik noget galt ' + err);
    })
  },[]);

  // const sorted = [...nextRun].sort((a,b) => {return a.date - b.date})
  // console.log(sorted)

  let nextRunSection = "";


    if (nextRun !== undefined) {
      nextRunSection = (
        <>
          <div className="bg-dark p-2">
            <p className="text-uppercase text-white font-weight-bold">
              næste løb - 55/70 pladser optaget
            </p>
          </div>
          <div className="bg-white p-2">
            <p className="bg-primary p-1 text-uppercase text-white font-weight-bold">
              {nextRun.antalpladser}
            </p>
            <h2 className="font-weight-bold text-uppercase">{nextRun.titel}</h2>
            <small className="font-italic">{nextRun.dato}</small>
            <p>{nextRun.beskrivelse}</p>
            <p className="font-weight-bold">Pris{nextRun.pris}kr</p>
            <Link className="btn" to={`/event/${nextRun._id}`}>
              Læs mere
            </Link>
          </div>
        </>
      );
    }
  


  return (
    <article>
      {nextRunSection}
    </article>
  );
};

export default NextRun;
