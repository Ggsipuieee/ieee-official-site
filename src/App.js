import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Events from "./pages/Events";
import Pastevents from "./pages/Pastevent.jsx";
import Wie from "./pages/Wie.jsx";
import { UpcomingEventpage } from "./components/UpcomingEventpage.jsx";
// import About from "./pages/About.jsx";




function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events/>} />
          <Route path="/pastevents" element={<Pastevents />} />
          <Route path="/upcomingevents" element={<UpcomingEventpage/>}/>
        </Routes>
        {/* <Footer /> */}
        <Routes>
          <Route path="/ieee-wie" element={<Wie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
