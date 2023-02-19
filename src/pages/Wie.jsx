import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import Wiehome from "../components/Wiehome";
// import WieUpcomingEvent from "../components/Wieupcoming";
// import WieContact from "../components/WieContact";
import WieHome from "../components/wieHomePageNew";
import WieProject from "../components/wieEvent";
import WieAbout from "../components/WieAbout";
import WieTeam from "../components/WieTeam";
import WieFollow from "../components/WieFollow";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Wie() {
  return (
    <div className="Wie-background">
      <WieHome />
      <WieProject />
      <WieAbout />
      <WieTeam />
      <WieFollow />
    </div>
  );
}

export default Wie;
