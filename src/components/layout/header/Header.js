import React, { useContext, useState } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import Search from "./Search";
import Pil from "../../../image/Arrow.png";
import { AuthDataContext } from "../../context/AuthDataContext";

const Header = () => {
  const { loggedIn, onLogout } = useContext(AuthDataContext);
  const [error, setError] = useState(null);
  const history = useHistory();

  // Log ud funktion
  const handleLogout = () => {
    let url = "http://localhost:5021/login/logout";
    fetch(url, {
      method: "GET",
    })
      .then((data) => {
        onLogout();
        history.push("/");
      })
      .catch((err) => {
        console.log(err.message);
        setError(
          "Der er sket en fejl da du prøvede at logge ud: " + err.message
        );
      });
  };
  let loginlogout;

  if (loggedIn) {
    loginlogout = (
      <>
        <li className="nav-item">
          <button
            className="font-weight-bold text-white bg-transparent border-0 text-uppercase"
            onClick={handleLogout}
          >
            Logud
          </button>
        </li>
      </>
    );
  } else {
    loginlogout = (
      <li className="nav-item">
        <NavLink
          className="font-weight-bold text-white nav-link text-uppercase"
          to="/login"
        >
          Login
        </NavLink>
      </li>
    );
  }

  return (
    <header className="bg-primary row m-0">
      <nav className="col-6 navbar navbar-expand-lg navbar-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                {" "}
                <NavLink
                  className="font-weight-bold text-white nav-link text-uppercase"
                  to="/events"
                >
                  events |
                </NavLink>
              </li>
              <li className="nav-item">
                {" "}
                <NavLink
                  className="font-weight-bold text-white nav-link text-uppercase"
                  to="/sponsore"
                >
                  sponsore |
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="font-weight-bold text-white nav-link text-uppercase"
                  to="/om-os"
                >
                  om runit |
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="font-weight-bold text-white nav-link text-uppercase"
                  to="/contact"
                >
                  kontakt os |
                </NavLink>
              </li>
              {loginlogout}
            </ul>
          </div>
        </div>
      </nav>
      <Search />
      <Link
        className="text-white font-weight-bold col-lg-3 col-6 my-auto"
        to="/avanceret-soegning"
      >
        <img
          className="mr-1"
          src={Pil}
          alt="hvis pil der pejer mod højre, ved at trykke går man til advanceret søgning"
        />
        Advanceret søgning
      </Link>
    </header>
  );
};

export default Header;
