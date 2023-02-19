import React from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function WieFollow() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  return (
    <div className="WieFollow">
      <div className="div1">
        <h1 data-aos="slide-up" className="div1-head">
          Follow
        </h1>
        <div className="div1-content">
          <h2 data-aos="slide-up">
            We always have <strong>great coffee</strong>
          </h2>

          <div data-aos="slide-up" className="div1-border-line"></div>

          <div data-aos="slide-up" className="social-link">
            <a
              //   id="social-image"
              href="https://instagram.com/ieeeggsipu?igshid=YmMyMTA2M2Y="
            >
              {/* <img
                className="social-image"
                src="./images/instagram-logo-bold.png"
              /> */}
              <svg
                id="social-image"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <circle
                  //   id="social-image"
                  cx="128"
                  cy="128"
                  r="34"
                  fill="none"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></circle>
                <rect
                  x="32"
                  y="32"
                  width="192"
                  height="192"
                  rx="48"
                  fill="none"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                  id="social-image"
                ></rect>
                <circle cx="180" cy="76" r="16"></circle>
              </svg>
            </a>
            <a href="https://instagram.com/ieeeggsipu?igshid=YmMyMTA2M2Y=">
              {/* <img
                className="social-image"
                src="./images/linkedin-logo-bold.png"
              /> */}
              <svg
                id="social-image"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <rect
                  x="36"
                  y="36"
                  width="184"
                  height="184"
                  rx="8"
                  fill="none"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></rect>
                <line
                  x1="124"
                  y1="120"
                  x2="124"
                  y2="176"
                  fill="none"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="84"
                  y1="120"
                  x2="84"
                  y2="176"
                  fill="none"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <path
                  d="M124,148a28,28,0,0,1,56,0v28"
                  fill="none"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></path>
                <circle cx="84" cy="80" r="16"></circle>
              </svg>
            </a>
            <a href="https://instagram.com/ieeeggsipu?igshid=YmMyMTA2M2Y=">
              {/* <img
                className="social-image"
                src="./images/facebook-logo-bold.png"
              /> */}
              <svg
                id="social-image"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <circle
                  cx="128"
                  cy="128"
                  r="96"
                  fill="none"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></circle>
                <path
                  d="M168,88H152a23.9,23.9,0,0,0-24,24V224"
                  fill="none"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></path>
                <line
                  x1="96"
                  y1="144"
                  x2="160"
                  y2="144"
                  fill="none"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
              </svg>
            </a>
            <a href="https://instagram.com/ieeeggsipu?igshid=YmMyMTA2M2Y=">
              {/* <img
                className="social-image"
                src="./images/envelope-simple-bold.png"
              /> */}
              <svg
                id="social-image"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <path
                  d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
                  fill="none"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></path>
                <polyline
                  points="224 56 128 144 32 56"
                  fill="none"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                  //   id="img"
                ></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="div2">
        <h1 data-aos="slide-up" className="div2-head">
          Contact
        </h1>
        <div className="div2-primary">
          <div className="div2-content">
            <h2 data-aos="slide-up" className="div2-h2">
              Stop by our Website and share your thoughts <br />
              On WIE.
            </h2>
          </div>

          <div data-aos="slide-up" className="div3">
            <div className="locality">
              <div className="locality-border"></div>
              <a className="locality-link" href="#">
                Dwarka Sector-14 <br />
                Delhi <br />
                110078
              </a>
            </div>
            <div className="locality">
              <div className="locality-border"></div>
              <a className="locality-link" href="#">
                +91 9818828810 <br />
                aryavirmalik20@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WieFollow;
