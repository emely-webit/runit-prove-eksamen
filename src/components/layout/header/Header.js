import React from "react";
import { NavLink, Link } from "react-router-dom";
import Search from "./Search";
import Pil from "../../../image/Arrow.png";

const Header = () => {
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
            <NavLink
              className="font-weight-bold text-white nav-link text-uppercase"
              to="/events"
            >
              events |
            </NavLink>
            <NavLink
              className="font-weight-bold text-white nav-link text-uppercase"
              to="/sponsore"
            >
              sponsore |
            </NavLink>
            <NavLink
              className="font-weight-bold text-white nav-link text-uppercase"
              to="/om-os"
            >
              om runit |
            </NavLink>
            <NavLink
              className="font-weight-bold text-white nav-link text-uppercase"
              to="/contact"
            >
              kontakt os |
            </NavLink>
          </div>
        </div>
      </nav>
      <Search />
      <Link className="text-white font-weight-bold col-3 my-auto" to="/avanceret-soegning"><img className="mr-1" src={Pil} alt="hvis pil der pejer mod højre, ved at trykke går man til advanceret søgning"/>Advanceret søgning</Link>
    </header>
  );
};

export default Header;
