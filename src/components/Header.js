import React from "react";
import "../styles/header.css";
const Header = () => {
  return <div className="max-width">Header</div>;
  return (
    <div>
      <header class="header">
        <nav class="navbar">
          <a href="#" class="nav-logo">
            WIE
          </a>
          <ul class="nav-menu">
            <li class="nav-item">
              <a href="#" class="nav-link">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                About
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Product
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Let's Us Chat
              </a>
            </li>
          </ul>
          {/* <div class="social">
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
        </div> */}
          <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </nav>
      </header>
      {/* <script>
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");

      hamburger.addEventListener("click", mobileMenu);

      function mobileMenu() {
        hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
  }
    </script> */}
    </div>
  );
};

export default Header;
