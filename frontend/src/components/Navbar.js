import React from "react";
import "./navbar.css";

const navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            Hotel - Dev
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Accomodation
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/rooms">
                      Rooms
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/suites">
                      Suites
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/dining">
                  Dining
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/wedding-events">
                  Wedding & Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/offers">
                  Offers
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/gallery">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/our-story">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Experiences
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <button className="btn btn-warning ms-2" type="submit">
              Book Now
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
