import React, { useEffect, useState } from "react";
// import moment from "moment";
import { Link } from "react-router-dom";

const NextRun = () => {
  const [nextRun, setNextRun] = useState();

  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  let date = new Date().getUTCDay();

  useEffect(() => {
    let url = `http://localhost:5021/event/soegdato?dato_fra=${year}-0${month}-${date}`;
    fetch(url, {
      method: "GET",
    })
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        setNextRun(jsonData);
      })
      .catch((err) => {
        alert("Der gik noget galt " + err);
      });
  }, [year, date, month]);

  // const sorted = [...nextRun].sort((a,b) => {return a.date - b.date})
  // console.log(sorted)

  let nextRunSection = "";
  if (nextRun && nextRun.length) {
    nextRun
      .filter((run) => run.antalpladser > 0)
      .map((filteredRun) => {
        return (
          <>
            <div className="bg-dark p-2">
              <p className="text-uppercase text-white font-weight-bold">
                næste løb - {filteredRun.pladsertilbage}/
                {filteredRun.antalpladser} pladser tilbage
              </p>
            </div>
            <div className="bg-white p-2">
              <p className="bg-primary p-1 text-uppercase text-white font-weight-bold">
                {filteredRun.antalpladser}
              </p>
              <h2 className="font-weight-bold text-uppercase">
                {filteredRun.titel}
              </h2>
              <small className="font-italic">{filteredRun.dato}</small>
              <p>{filteredRun.beskrivelse}</p>
              <p className="font-weight-bold">Pris{filteredRun.pris}kr</p>
              <Link className="btn" to={`/event/${filteredRun._id}`}>
                Læs mere
              </Link>
            </div>
          </>
        );
      });
  }

  if (nextRun !== undefined) {
    let pladserBeregning =
      (nextRun[0].antalpladser - nextRun[0].pladsertilbage) /
      nextRun[0].pladsertilbage;

    let antal;
    console.log(pladserBeregning);
    if (pladserBeregning >= 25) {
      antal = (
        <p className="bg-primary p-1 text-uppercase text-white font-weight-bold">
          Mange pladser tilbage
        </p>
      );
    } else if (pladserBeregning < 25) {
      antal = (
        <p className="bg-primary p-1 text-uppercase text-white font-weight-bold">
          Få pladser tilbage
        </p>
      );
    }
    nextRunSection = (
      <>
        <div className="bg-dark p-2">
          <p className="text-uppercase text-white font-weight-bold">
            næste løb - {nextRun[0].pladsertilbage}/{nextRun[0].antalpladser}{" "}
            pladser optaget
          </p>
        </div>
        <div className="bg-white p-2">
          {antal}
          <h2 className="font-weight-bold text-uppercase">
            {nextRun[0].titel}
          </h2>
          <small className="font-italic">{nextRun[0].dato}</small>
          <p>{nextRun[0].beskrivelse}</p>
          <p className="font-weight-bold">Pris{nextRun[0].pris}kr</p>
          <Link className="btn" to={`/event/${nextRun[0]._id}`}>
            Læs mere
          </Link>
        </div>
      </>
    );
  }

  return <article>{nextRunSection}</article>;
};

export default NextRun;
