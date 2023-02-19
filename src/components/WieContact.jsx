import React from "react";
import { Link } from "react-router-dom";

function WieContact() {
  return (
    <section>
      <div class="contact-us">
        <div class="contact-details">
          <div class="cd-item">
            <img src="./images/location-icon.png" alt="maps icon" />
            <a>google map</a>
          </div>
          <div class="cd-item">
            <img src="./images/phone-icon.png" alt="maps icon" />
            <a>9818828810</a>
          </div>
          <div class="cd-item">
            <img src="./images/mail-icon.png" alt="maps icon" />
            <a href="mailto:aryavirmalik20@gmail.com">Email us</a>
          </div>
        </div>

        <div class="contact-row">
          <div class="quick-links">
            <h1 class="wie-links-heading">Quick Links</h1>
            <div class="website-logos">
              <Link to="/">
                <img
                  src="./images/ieeeggsipulogo.png"
                  alt="ieee official site logo"
                  width="200px"
                  height="100px"
                />
              </Link>
              <Link to="/ieee-wie">
                <img
                  src="./images/WIE.png"
                  alt="Women in ieee official site logo"
                  width="100px"
                />
              </Link>
            </div>
          </div>
          <div class="social-links-wie">
            <h1 class="wie-links-heading">Social Links</h1>
            <div class="social-logos">
              <Link to="#">
                <img
                  class="logo-img"
                  src="./images/insta-icon.png"
                  alt="Women in ieee official site logo"
                />
              </Link>
              <Link to="#">
                <img
                  class="logo-img"
                  src="./images/linked-in-icon.png"
                  alt="Women in ieee official site logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WieContact;
