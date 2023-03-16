import React from "react";
import "../styles/contact.css";
const Contact = () => {
  return (
    <div>
      <div>
        <div class="center heading">
          <h1 class="contact_heading">Contact Us</h1>
          <p class="contact_heading_info">
            Any question or remaks? We are just a text away!
          </p>
        </div>

        <div class="contact_container">
          <div class="contact_details center">
            <h2>Contact Information</h2>
            <p class="contact_detail_sub">
              Our Team will get back to you within 24 hours.
            </p>

            <div class="contact_info">
              <i class="fa-solid fa-phone icons"></i>
              <p class="contact_phone">+91 XXXXX XXXXX</p>

              <i class="fa-solid fa-envelope icons"></i>
              <p class="contact_phone">emailhere@email.com</p>

              <i class="fa-solid fa-location-dot icons"></i>
              <p class="contact_phone">USICT, GGSIPU, Dwarka</p>
            </div>

            <div class="social_links">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/ieeeggsipu/"
              >
                <i class="fa-brands fa-linkedin-in social_icons"></i>
              </a>

              <a
                target="_blank"
                href="https://www.instagram.com/ieeeggsipu/?hl=en"
              >
                <i class="fa-brands fa-instagram social_icons"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
