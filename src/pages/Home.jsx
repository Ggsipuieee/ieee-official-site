import React, { useState, useEffect } from "react";
import Sectionhome from "../components/Sectionhome";
import Sectionabout from "../components/Sectionabout";
import Sectionourteam from "../components/Sectionourteam";
import Sectionwie from "../components/Sectionwie";
import { useNavigate } from "react-router-dom";
// import Sectionevent from "../components/Sectionevent";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Sectionhome />
      <Sectionabout />
      <Sectionourteam />
      <Sectionwie />
      {/* <Sectionevent /> */}

      <button
        class="ieee-week-btn "
        onClick={() => {
          navigate("/upcomingevents");
        }}
      >
        IEEE WEEK '23
      </button>
    </div>
  );
}

export default Home;
