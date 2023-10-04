import React from "react";

import { useNavigate } from "react-router-dom";

function Events() {
  const navigate = useNavigate();
  const pastEventClickHandler = () => {
    navigate("/pastevents");
  };
  const upcomingEventClickHandler = () => {
    navigate("/upcomingevents");
  };

  return (
    <div>
      <div class="about-us-intro">
        <h1 class="heading-main">
          <strong>o</strong>ur Events
        </h1>
      </div>

      <div class="our-events-intro">
        <div class="our-events-container">
          <div class="our-event-card">
            <div class="our-event-content">
              <p class="heading">Past Events</p>
              <p class="para">
                IEEE GGSIPU has a history of hosting diverse and impactful past
                events, ranging from technical workshops and seminars to
                innovative competitions. These events have played a crucial role
                in fostering collaboration, knowledge-sharing, and skill
                development among our members and the wider community.
              </p>

              <button class="btn" onClick={pastEventClickHandler}>
                View Here
              </button>
            </div>
          </div>
          <div class="our-event-card">
            <div class="our-event-content">
              <p class="heading">Upcoming Events</p>
              <p class="para">
                We are thrilled to announce an exciting lineup of upcoming
                events that promise to ignite curiosity, foster innovation, and
                promote collaboration within our community. From cutting-edge
                technology seminars and workshops to hackathons and networking
                sessions, our events aim to provide a platform for students and
                professionals alike to explore the ever-evolving world of
                technology.
              </p>
              <button class="btn" onClick={upcomingEventClickHandler}>
                View Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
