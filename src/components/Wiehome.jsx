import React from "react";
import { Link } from "react-router-dom";
// import "./App.css";
function WieNav() {
  return (
    <div className="WieHome">
      <div className="wie-navbar">
        <div className="nav-left">
          <img src="./images/ieeeggsipulogo.png" className="smalll ieee-logo" />
          <div className="nav-left-primary wie-list">
            <ul class="wie-list ">
              <li class="nav-item">
                <Link
                  class="nav-link active wie-link wie-home-link"
                  aria-current="page"
                  to="/wie-home"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link wie-link" to="/wie-about">
                  About
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link wie-link" to="/benefits">
                  Benefits
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-right">
          <img src="./images/WIE.png" className="wie-logo" />
        </div>
      </div>
      {/* hero section images */}
      <div className="wie-Hero-image"></div>
      <div className="circular-section-div">
        <div className="circular-primary">
          <img className="icon-image" src="./images/users-three-thin.png" />
          <Link to="/" className="circle-img-link">
            Our Team
          </Link>
        </div>
        <div className="circular-primary">
          <img className="icon-image" src="./images/calendar-check-bold.png" />
          <Link to="/" className="circle-img-link">
            Events
          </Link>
        </div>
        <div className="circular-primary">
          <img className="icon-image" src="./images/crosshair-bold.png" />
          <Link to="/" className="circle-img-link">
            Mission
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WieNav;
