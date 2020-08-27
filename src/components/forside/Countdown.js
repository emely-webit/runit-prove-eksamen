import React, { useEffect, useState } from "react";

const Countdown = () => {
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
        setNextRun(jsonData.reverse());
      })
      .catch((err) => {
        alert("Der gik noget galt " + err);
      });
  }, [year, date, month]);

  // const sorted = [...nextRun].sort((a,b) => {return a.date - b.date})
  // console.log(sorted)
  let nextRunDate = [];
  let nextRunTitel;

  if (nextRun && nextRun.length) {
    nextRun
      .filter((run) => run.antalpladser > 0)
      .map((filteredRun) => {
        nextRunDate = filteredRun.dato;
        nextRunTitel = filteredRun.titel;
        return null;
      });
  }

  const calculateTimeLeft = () => {
    console.log(nextRunDate);
    const difference = +new Date(`${nextRunDate}`) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    //  Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      // <h1 className="h3 d-inline-block bg-primary py-1 px-3 text-white font-weight-bold my-lg-0 my-5"> 10dage 5timer 35minutter til titel på event </h1>

      <span key={interval}>
        {timeLeft[interval]}
        {interval}{" "}
      </span>
    );
  });
  return (
    <h1 className="h3 d-inline-block bg-primary py-1 px-3 text-white font-weight-bold my-lg-0 my-5">
      {/* {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="h3 d-inline-block bg-primary py-1 px-3 text-white font-weight-bold my-lg-0 my-5">
          Time's up!
        </span>
      )} */}
      {timerComponents}
      Til {nextRunTitel}
    </h1>
  );
};

export default Countdown;
