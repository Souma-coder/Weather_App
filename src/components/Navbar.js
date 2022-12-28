import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  const navBarTheme = {
    background: theme ? "grey" : "white",
    color: theme ? "white" : "grey",
  };

  const navBarButtonTheme = {
    background: theme ? "grey" : "white",
    color: theme ? "#282c34" : "grey",
  };

  const navBarBody = {
    background: theme ? "#282c34" : "white",
    color: theme ? "white" : "black",
  };

  const themeButtons = {
    background: theme ? "white" : "#282c34",
    color: theme ? "black" : "white",
  };

  return (
    <>
      <nav className="navbar fixed-top" style={navBarTheme}>
        <div className="container-fluid" style={navBarTheme}>
          <Link className="navbar-brand" style={navBarTheme}>
            Weather App
            <img
              className="navbar-image"
              src={`icons/Weatherios.webp`}
              alt="weatherLogo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            style={navBarButtonTheme}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={navBarBody}
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Weather App
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    className="nav-link active link-style"
                    aria-current="page"
                    to="/"
                    style={navBarBody}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link link-style"
                    to="about"
                    style={navBarBody}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={navBarBody}
                  >
                    Themes
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    style={themeButtons}
                  >
                    <li onClick={() => setTheme(false)}>
                      <Link className="dropdown-item" style={themeButtons}>
                        Light
                      </Link>
                    </li>
                    <li onClick={() => setTheme(true)}>
                      <Link className="dropdown-item" style={themeButtons}>
                        Dark
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
