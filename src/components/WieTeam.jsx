import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function WieTeam() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  return (
    <div className="wieTeam">
      <section id="team" className="bgColorTeam pt-5">
        <div className="container container-team">
          {/* Main Title */}
          <div className="neoh_fn_title">
            <h3
              data-aos="fade-up"
              className="fn_title atmosphere team-head theme"
            >
              Our Team Members
            </h3>
            <div className="line">
              <span />
            </div>
          </div>
          {/* !Main Title */}
          <div className="mw_650 fn_description">
            <p className="fn_desc fn_animated_text">
              The idea was born in London and rapidly became a borderless vision
              - A team of Neoh with a background in computer graphics, crypto,
              technology, and art.
            </p>
          </div>
          {/* Team List Shortcode */}
          <div className="neoh_fn_team team-div">
            <ul className="team_list justify-content-center">
              <li data-aos="fade-up" className="team_item">
                <div className="t_item">
                  <div className="person_info">
                    <div className="img_holder">
                      <img src="./images/aadya-did-new.JPG" alt="" />
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title member-name theme">
                        Aadya Bubber
                      </h3>
                      <p className="fn_desc">WIE Chair</p>
                    </div>
                  </div>
                  <div className="person_social">
                    <ul>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/dhruv-gupta-55034a228/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* <i className="fa-brands fa-linkedin" /> */}
                          <svg
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
                      </li>

                      <li>
                        <a
                          href="https://github.com/MR-DHRUV "
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* <i className="fa-brands fa-github" /> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="#ffffff"
                            viewBox="0 0 256 256"
                          >
                            <rect width="256" height="256" fill="none"></rect>
                            <path
                              d="M84,240a23.9,23.9,0,0,0,24-24V168"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M172,240a23.9,23.9,0,0,1-24-24V168"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li data-aos="fade-up" className="team_item">
                <div className="t_item">
                  <div className="person_info">
                    <div className="img_holder">
                      <img src="./images/abhisha-oli.jpg" alt="" />{" "}
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title member-name theme">
                        Abhisha Oli
                      </h3>
                      <p className="fn_desc">WIE Member</p>
                    </div>
                  </div>
                  <div className="person_social">
                    <ul>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/abhisha-oli-579a07256"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* <i className="fa-brands fa-linkedin" /> */}
                          <svg
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
                      </li>

                      <li>
                        <a
                          href="https://github.com/abhisha2334 "
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* <i className="fa-brands fa-github" /> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="#ffffff"
                            viewBox="0 0 256 256"
                          >
                            <rect width="256" height="256" fill="none"></rect>
                            <path
                              d="M84,240a23.9,23.9,0,0,0,24-24V168"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M172,240a23.9,23.9,0,0,1-24-24V168"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li data-aos="fade-up" className="team_item">
                <div className="t_item">
                  <div className="person_info">
                    <div className="img_holder">
                      <img src="./images/muskan-kumari.jpg" alt="" />
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title member-name theme">
                        Muskan Kumari
                      </h3>
                      <p className="fn_desc">WIE Member</p>
                    </div>
                  </div>
                  <div className="person_social">
                    <ul>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/dhruv-gupta-55034a228/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* <i className="fa-brands fa-linkedin" /> */}
                          <svg
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
                      </li>

                      <li>
                        <a
                          href="https://github.com/MR-DHRUV "
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* <i className="fa-brands fa-github" /> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="#ffffff"
                            viewBox="0 0 256 256"
                          >
                            <rect width="256" height="256" fill="none"></rect>
                            <path
                              d="M84,240a23.9,23.9,0,0,0,24-24V168"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M172,240a23.9,23.9,0,0,1-24-24V168"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li data-aos="fade-up" className="team_item">
                <div className="t_item">
                  <div className="person_info">
                    <div className="img_holder">
                      <img
                        className="neha-img"
                        src="./images/neha.jpg"
                        alt=""
                      />
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title member-name theme">Neha</h3>
                      <p className="fn_desc">WIE Member</p>
                    </div>
                  </div>
                  <div className="person_social">
                    <ul>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/neha-rajput-530060262"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* <i className="fa-brands fa-linkedin" /> */}
                          <svg
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
                      </li>

                      <li>
                        <a
                          href="https://github.com/MR-DHRUV "
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* <i className="fa-brands fa-github" /> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="#ffffff"
                            viewBox="0 0 256 256"
                          >
                            <rect width="256" height="256" fill="none"></rect>
                            <path
                              d="M84,240a23.9,23.9,0,0,0,24-24V168"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M172,240a23.9,23.9,0,0,1-24-24V168"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li data-aos="fade-up" className="team_item">
                <div className="t_item">
                  <div className="person_info">
                    <div className="img_holder">
                      <img src="./images/nidhi-bhati.jpg" alt="" />
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title member-name theme">
                        Nidhi Bhati
                      </h3>
                      <p className="fn_desc">WIE Member</p>
                    </div>
                  </div>
                  <div className="person_social">
                    <ul>
                      <li>
                        <a
                          href="https://in.linkedin.com/in/nidhi-bhati-1a542624b"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* <i className="fa-brands fa-linkedin" /> */}
                          <svg
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
                      </li>

                      <li>
                        <a
                          href="https://github.com/MR-DHRUV "
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* <i className="fa-brands fa-github" /> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="#ffffff"
                            viewBox="0 0 256 256"
                          >
                            <rect width="256" height="256" fill="none"></rect>
                            <path
                              d="M84,240a23.9,23.9,0,0,0,24-24V168"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M172,240a23.9,23.9,0,0,1-24-24V168"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li data-aos="fade-up" className="team_item">
                <div className="t_item">
                  <div className="person_info">
                    <div className="img_holder">
                      <img src="./images/pic-2.jpeg" alt="" />
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title member-name theme">Revati</h3>
                      <p className="fn_desc">WIE Member</p>
                    </div>
                  </div>
                  <div className="person_social">
                    <ul>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/dhruv-gupta-55034a228/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* <i className="fa-brands fa-linkedin" /> */}
                          <svg
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
                      </li>

                      <li>
                        <a
                          href="https://github.com/MR-DHRUV "
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* <i className="fa-brands fa-github" /> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="#ffffff"
                            viewBox="0 0 256 256"
                          >
                            <rect width="256" height="256" fill="none"></rect>
                            <path
                              d="M84,240a23.9,23.9,0,0,0,24-24V168"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M172,240a23.9,23.9,0,0,1-24-24V168"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li data-aos="fade-up" className="team_item">
                <div className="t_item">
                  <div className="person_info">
                    <div className="img_holder">
                      <img src="./images/shriya-singh.jpg" alt="" />
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title member-name theme">
                        Shriya Singh
                      </h3>
                      <p className="fn_desc">WIE Member</p>
                    </div>
                  </div>
                  <div className="person_social">
                    <ul>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/dhruv-gupta-55034a228/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* <i className="fa-brands fa-linkedin" /> */}
                          <svg
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
                      </li>

                      <li>
                        <a
                          href="https://github.com/MR-DHRUV "
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* <i className="fa-brands fa-github" /> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="#ffffff"
                            viewBox="0 0 256 256"
                          >
                            <rect width="256" height="256" fill="none"></rect>
                            <path
                              d="M84,240a23.9,23.9,0,0,0,24-24V168"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M172,240a23.9,23.9,0,0,1-24-24V168"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li data-aos="fade-up" className="team_item">
                <div className="t_item">
                  <div className="person_info">
                    <div className="img_holder">
                      <img src="./images/tanya-aggarwal.jpg" alt="" />
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title member-name theme">
                        Tanya Aggarwal
                      </h3>
                      <p className="fn_desc">WIE Member</p>
                    </div>
                  </div>
                  <div className="person_social">
                    <ul>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/dhruv-gupta-55034a228/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* <i className="fa-brands fa-linkedin" /> */}
                          <svg
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
                      </li>

                      <li>
                        <a
                          href="https://github.com/MR-DHRUV "
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* <i className="fa-brands fa-github" /> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="#ffffff"
                            viewBox="0 0 256 256"
                          >
                            <rect width="256" height="256" fill="none"></rect>
                            <path
                              d="M84,240a23.9,23.9,0,0,0,24-24V168"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M172,240a23.9,23.9,0,0,1-24-24V168"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li data-aos="fade-up" className="team_item">
                <div className="t_item">
                  <div className="person_info">
                    <div className="img_holder">
                      <img src="./images/supriya-thakur.jpg" alt="" />
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title member-name theme">
                        Supriya Thakur
                      </h3>
                      <p className="fn_desc">WIE Member</p>
                    </div>
                  </div>
                  <div className="person_social">
                    <ul>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/supriya-thakur-b979b125b"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* <i className="fa-brands fa-linkedin" /> */}
                          <svg
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
                      </li>

                      <li>
                        <a
                          href="https://github.com/supriya406 "
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* <i className="fa-brands fa-github" /> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="#ffffff"
                            viewBox="0 0 256 256"
                          >
                            <rect width="256" height="256" fill="none"></rect>
                            <path
                              d="M84,240a23.9,23.9,0,0,0,24-24V168"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M172,240a23.9,23.9,0,0,1-24-24V168"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li data-aos="fade-up" className="team_item">
                <div className="t_item">
                  <div className="person_info">
                    <div className="img_holder">
                      <img src="./images/tanya-tanwer.jpg" alt="" />
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title member-name  theme">
                        Tanya Tanwer
                      </h3>
                      <p className="fn_desc">WIE Member</p>
                    </div>
                  </div>
                  <div className="person_social">
                    <ul>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/tanya-tanwer-88a04325a"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* <i className="fa-brands fa-linkedin" /> */}
                          <svg
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
                      </li>

                      <li>
                        <a
                          href="https://github.com/MR-DHRUV "
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* <i className="fa-brands fa-github" /> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="#ffffff"
                            viewBox="0 0 256 256"
                          >
                            <rect width="256" height="256" fill="none"></rect>
                            <path
                              d="M84,240a23.9,23.9,0,0,0,24-24V168"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M172,240a23.9,23.9,0,0,1-24-24V168"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* !Team List Shortcode */}
        </div>
      </section>
    </div>
  );
}

export default WieTeam;
