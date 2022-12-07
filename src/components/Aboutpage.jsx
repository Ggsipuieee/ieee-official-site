import React from "react";

function Aboutpage() {
  return (
    <div>
      <div class="about-us-intro">
        <h1 class="heading-main">
          <strong>a</strong>bout us
        </h1>
      </div>

      <section class="hero-section">
        <h1 class="hero-section-heading">Advancing technology for humanity.</h1>
        <img src="./images/globe.jpg" alt="" class="hero_section-image" />
      </section>

      <section class="our-mission">
        <div class="our-mission_content">
          <h1 class="content-heading">our mission</h1>
          <p class="content-text">
            IEEE GGSIPU aims to organise events, connect with more and more
            students and be a portal for learning, looking at new ways and
            understanding ever-growing technology even better.
          </p>
        </div>
        <div class="our-mission-images">
          <img src="./images/lightbulb.jpg" alt="" class="ieee-lead" />
        </div>
      </section>

      <section class="ieee-information">
        <div class="main-card">
          <h1 class="main-card_heading card-heading">Why Join IEEE?</h1>
          <p class="main-card_text card-text">
            IEEE membership offers access to technical innovation, cutting-edge
            information, networking opportunities, and exclusive member
            benefits. Members support IEEE's mission to advance technology for
            humanity and the profession, while memberships build a platform to
            introduce careers in technology to students around the world.
          </p>
          <a
            href="https://www.ieee.org/membership/benefits/index.html"
            class="card-link"
          >
            Read more
          </a>
        </div>

        <div class="information-card">
          <div class="information-card_header">
            <i class="fa-solid fa-users-viewfinder fa-3x"></i>
            <h1 class="card-heading">Networking</h1>
          </div>
          <p class="card-text">
            Professional networking is a necessary skill for a lifetime of
            career success. Network with an unparalleled, global community of
            professionals.
          </p>
        </div>

        <div class="information-card">
          <div class="information-card_header">
            <i class="fa-solid fa-microchip fa-3x"></i>
            <h1 class="card-heading">Stay Updated with Technology</h1>
          </div>
          <p class="card-text">
            Technology professionals and engineers will always be continually
            challenged to keep abreast of new and changing technology. In
            addition to your studies, IEEE has the means for you to remain
            technically current through competitions and award-winning
            publications.
          </p>
        </div>

        <div class="information-card">
          <div class="information-card_header">
            <i class="fa-solid fa-book-bookmark fa-3x"></i>
            <h1 class="card-heading">Career Resources</h1>
          </div>
          <p class="card-text">
            Being a student is the first job of your professional career. Let
            IEEE help with valuable scholarship, and award program
            opportunities.
          </p>
        </div>

        <div class="information-card">
          <div class="information-card_header">
            <i class="fa-sharp fa-solid fa-building-columns fa-3x"></i>
            <h1 class="card-heading">Continuing Education</h1>
          </div>
          <p class="card-text">
            IEEE student members have access to numerous continuing education
            opportunities at discounted rates. Keep growing with educational
            opportunities available for IEEE members.
          </p>
        </div>

        <div class="information-card">
          <div class="information-card_header">
            <i class="fa-solid fa-tag fa-3x"></i>
            <h1 class="card-heading">Discounts</h1>
          </div>
          <p class="card-text">
            Students reap the same benefits as professional members, such as
            discounts on many technical resources, and reduced registration fees
            for conferences, plus student discounts on Society memberships,
            publications and more. In addition, student members have access to a
            variety of affinity programs that offer savings.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Aboutpage;
