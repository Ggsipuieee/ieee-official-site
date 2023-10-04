import React from "react";
import { Link } from "react-router-dom";

function PastEvent() {
  return (
    <div>
      <div class="page-event">
      <div class="about-us-intro">
        <h1 class="heading-main past-events-heading">
          <strong>P</strong>ast Events
        </h1>
      </div>

        <div class="container">
          <div class="upcoming-sec">
            <div class="heading ">Past Events</div>
          </div>

          <div class="upcoming-event-list">
            <div class="event-block">
              <div class="row">
                <div class="col-lg-2 sec-1">
                  <table>
                    <tr>
                      <td>
                        <div class="month">2023 Sep</div>
                        <div class="month-date-devider"></div>
                        <div class="date">24</div>
                      </td>
                      <td class="title">Unlocking the Powe of Redis</td>
                    </tr>
                  </table>
                </div>
                <div class="col-lg-5 sec-2">
                  <img src="./images/Redis_Event.jpg" />
                </div>
                <div class="col-lg-5 sec-3">
                  <div class="title">Unlocking the Power of Redis</div>
                  <div class="venue">
                    <table>
                      <tr>
                        <td>
                          <i class="fa fa-map-marker"></i>
                        </td>
                        <td>
                          <div>USICT, GGSIPU</div>
                          <div class="dim-color">
                            <a href="https://www.google.co.in" target="blank">
                              Get Directions
                            </a>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="time">
                    <table>
                      <tr>
                        <td>
                          <i class="fa fa-clock-o"></i>
                        </td>
                        <td>
                          <div>September 2023</div>
                          <div
                            data-livestamp="1517054400"
                            class="dim-color"
                          ></div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="sort-story">
                    "Journey into Data Speed and Efficiency"
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="upcoming-event-list">
            <div class="event-block">
              <div class="row">
                <div class="col-lg-2 sec-1">
                  <table>
                    <tr>
                      <td>
                        <div class="month">2022 Oct</div>
                        <div class="month-date-devider"></div>
                        <div class="date"></div>
                      </td>
                      <td class="title">IEEE Week- Where Tech meets Fun</td>
                    </tr>
                  </table>
                </div>
                <div class="col-lg-5 sec-2">
                  <img src="./images/iee-week.jpg" />
                </div>
                <div class="col-lg-5 sec-3">
                  <div class="title">IEEE Week- Where Tech meets Fun</div>
                  <div class="venue">
                    <table>
                      <tr>
                        <td>
                          <i class="fa fa-map-marker"></i>
                        </td>
                        <td>
                          <div>USICT, GGSIPU</div>
                          <div class="dim-color">
                            <a href="https://www.google.co.in" target="blank">
                              Get Directions
                            </a>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="time">
                    <table>
                      <tr>
                        <td>
                          <i class="fa fa-clock-o"></i>
                        </td>
                        <td>
                          <div>October 2022</div>
                          <div
                            data-livestamp="1517054400"
                            class="dim-color"
                          ></div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="sort-story">
                    "No play and all work makes Jack a dull boy"
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="upcoming-event-list">
            <div class="event-block">
              <div class="row">
                <div class="col-lg-2 sec-1">
                  <table>
                    <tr>
                      <td>
                        <div class="month">2022 Sept</div>
                        <div class="month-date-devider"></div>
                        <div class="date">22</div>
                      </td>
                      <td class="title">AARAMBH- ROBOTICS WORKSHOP</td>
                    </tr>
                  </table>
                </div>
                <div class="col-lg-5 sec-2" id="arambh-img">
                  <img src="./images/arambhimg.png" />
                </div>
                <div class="col-lg-5 sec-3">
                  <div class="title">AARAMBH- ROBOTICS WORKSHOP</div>
                  <div class="venue">
                    <table>
                      <tr>
                        <td>
                          <i class="fa fa-map-marker"></i>
                        </td>
                        <td>
                          <div>Room E-109 USICT, GGSIPU</div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="time">
                    <table>
                      <tr>
                        <td>
                          <i class="fa fa-clock-o"></i>
                        </td>
                        <td>
                          <div>Thursday, Sept 22 2022</div>
                          <div
                            data-livestamp="1517054400"
                            class="dim-color"
                          ></div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="sort-story">"For learning is Growth "</div>
                  <div class="group-of-btn">
                    <a
                      href="https://forms.gle/wgFrUQruqPmYfk6K7"
                      target="blank"
                      class="btn book-ticket"
                    >
                      Registeration closed
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="upcoming-sec">
            <div class="heading">Past Events</div>
          </div> */}

          <div class="upcoming-event-list">
            <div class="event-block">
              <div class="row">
                <div class="col-lg-2 sec-1">
                  <table>
                    <tr>
                      <td>
                        <div class="month">2022 Oct</div>
                        <div class="month-date-devider"></div>
                        <div class="date"></div>
                      </td>
                      <td class="title">IEEE Week- Where Tech meets Fun</td>
                    </tr>
                  </table>
                </div>
                <div class="col-lg-5 sec-2">
                  <img src="./images/umang.jpeg" />
                </div>
                <div class="col-lg-5 sec-3">
                  <div class="title">Umang fest</div>
                  <div class="venue">
                    <table>
                      <tr>
                        <td>
                          <i class="fa fa-map-marker"></i>
                        </td>
                        <td>
                          <div>USICT, GGSIPU</div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="time">
                    <table>
                      <tr>
                        <td>
                          <i class="fa fa-clock-o"></i>
                        </td>
                        <td>
                          <div>April 2021</div>
                          <div
                            data-livestamp="1517054400"
                            class="dim-color"
                          ></div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="sort-story">"For a techy world ahead"</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastEvent;
