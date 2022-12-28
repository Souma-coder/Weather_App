import React, { useContext } from "react";
import { ThemeContext } from "../App";

const About = () => {
  const theme = useContext(ThemeContext);

  const aboutBoxTheme = {
    backgroundColor: theme ? "grey" : "#282c34",
    color: theme ? "#333" : "#fff",
    borderBottom: theme ? "1px solid white" : "1px solid black",
    boxShadow: theme ? "0 10px 10px grey" : "0 10px 13px #282c34",
  };

  return (
    <div className="mt-5">
      <div className="container rounded-3 about-box" style={aboutBoxTheme}>
        <div className="row p-3">
          <div className="offset-md-1 col-md-4 col-sm-12 d-flex">
            <img
              src="icons/Weatherios.webp"
              className="w-50 align-self-center"
              alt="weatherLogo"
            />
          </div>
          <div className="col-md-6 col-sm-12 my-5">
            <h2 className="fw-bold">About Us</h2>
            <h5 className="mt-2 text-justify">
              Our main motive is to give you an idea of current weather of your
              city or if you want to search any other else cities. We are
              implementing new ideas for this app. Keep supporting us by
              reaching our given links.{" "}
            </h5>
          </div>
        </div>
        <div className="row d-flex justify-content-center mb-4">
          <div className="col-2">
            <img
              src="icons/Facebook.png"
              className="contact-icons3"
              alt="Facebook"
            />
          </div>
          <div className="col-2">
            <img
              src="icons/Instagram.png"
              className="contact-icons2"
              alt="Instagram"
            />
          </div>
          <div className="col-2">
            <img src="icons/Gmail.png" className="contact-icons3" alt="Gmail" />
          </div>
          <div className="col-2">
            <img
              src="icons/Youtube.png"
              className="contact-icons"
              alt="Youtube"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
