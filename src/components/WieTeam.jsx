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
                          href="mailto:aadyabubberr@gmail.com"
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
                            ></polyline>
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
                          href="mailto:oliabhisha@gmail.com "
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
                            ></polyline>
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
                          href="mailto:chaurasiamuskan658@gmail.com "
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
                            ></polyline>
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
                          href="mailto:nehaxr512@gmail.com "
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
                            ></polyline>
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
                          href="mailto:nidhibhati242@gmail.com "
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
                            ></polyline>
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
                          href="mailto:revatikaushal985@gmail.com"
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
                            ></polyline>
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
                          href="mailto:shriyasingh1712@gmail.com"
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
                            ></polyline>
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
                          href="mailto:tanyaaggrwl1312@gmail.com"
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
                            ></polyline>
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
                          href="mailto:Supriyaathakur123@gmail.com "
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
                            ></polyline>
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
                          href="mailto:tanyatanwer1@gmail.com"
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
                            ></polyline>
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
