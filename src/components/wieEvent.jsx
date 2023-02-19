import React from "react";
import Wie from "../pages/Wie";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function WieProject() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="Current-events">
      {/* <h1 className="Event-heading">Events</h1> */}
      {/* <div data-aos="slide-up" className="event-flex image-sec1">
        <div className="event-card">
          <img className="small-event-img" src="./images/event-img1.jpeg" />
          <div className="about-event">
            <div className="wie-event-content">
              <h3>Hello</h3>
            </div>
          </div>
        </div>
        <div className="event-card big-card">
          <img className="small-event-img" src="./images/event-img2.jpeg" />
          <div className="about-event">
            <div className="wie-event-content">
              <h3>Hello</h3>
            </div>
          </div>
        </div>
      </div> */}
      <h1 className="Event-heading">Past Events</h1>
      <div data-aos="fade-up" className="event-flex">
        <div className="event-card">
          <img className="small-event-img" src="./images/wie-event2.jpeg" />
          <div className="about-event">
            <div className="wie-event-content">
              <h3>
                {" "}
                WIE orientation hosted by Aadya Bubber (WIE Chair),guiding Btech
                students about WIE and benifits of joining WIE.
              </h3>
            </div>
          </div>
        </div>
        {/* big-card class name */}
        <div className="event-card ">
          <img className="small-event-img" src="./images/wie-event1.jpeg" />
          <div className="about-event">
            <div className="wie-event-content">
              <h3>
                SDE at one of the biggest tech company Adobe,introducing Web
                development and organsie a quize related to web development
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* <div data-aos="fade-up" className="event-flex">
        <div className="event-card">
          <img className="small-event-img" src="./images/event-img1.jpeg" />
          <div className="about-event">
            <div className="wie-event-content">
              <h3>Hello</h3>
            </div>
          </div>
        </div>
        <div className="event-card big-card">
          <img className="small-event-img" src="./images/event-img2.jpeg" />
          <div className="about-event">
            <div className="wie-event-content">
              <h3>Hello</h3>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="past-event-page">
        <Link className="past-event-link" to="/">
          Past Events &#8594;
        </Link>
      </div> */}
    </div>
  );
}

export default WieProject;
