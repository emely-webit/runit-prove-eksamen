import React from 'react'
import {NavLink} from 'react-router-dom' 

const Header = () => {
    return (
      <header className="bg-primary">
        <nav className="navbar navbar-expand-lg navbar-dark">
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
              <NavLink className="font-weight-bold text-white nav-link text-uppercase" to="/events">
                events |
              </NavLink>
              <NavLink className="font-weight-bold text-white nav-link text-uppercase" to="/sponsore">
                sponsore |
              </NavLink>
              <NavLink className="font-weight-bold text-white nav-link text-uppercase" to="/om-os">
                om runit |
              </NavLink>
              <NavLink className="font-weight-bold text-white nav-link text-uppercase" to="/contact">
                kontakt os |
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    );
}

export default Header
