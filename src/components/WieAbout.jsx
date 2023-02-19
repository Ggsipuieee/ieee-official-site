import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function WieAbout() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  return (
    <div className="wie-about">
      <h1 data-aos="slide-up" className="about_wie-head">
        About WIE
      </h1>
      <h1 data-aos="slide-up" className="Wie-about-heading">
        <strong>IEEE Women in Engineering (WIE)</strong> is one of the largest
        international professional organizations dedicated to promoting women
        engineers so we would love to have all our girls to come and join our
        women in engineering execom.
      </h1>
      <h1 data-aos="slide-up" className="Wie-about-heading">
        IEEE WIE has established itself by active participation since past 25
        years and by opening <strong>WIE chapters</strong> in various
        universities and is now recognised worldwide
      </h1>
      <div className="divider"></div>
      <p data-aos="slide-up" className="wie-about-content">
        Girls will be able to have a safe and comfortable place to interact and
        participate and will be updated regarding all opportunities which are
        specifically for women.
      </p>
      <p data-aos="slide-up" className="wie-about-content">
        As WIE chapter exists in all govt colleges in india and even worldwide,
        we will be conducting many collaborative events and all our girls will
        get more exposure
      </p>
    </div>
  );
}

export default WieAbout;
