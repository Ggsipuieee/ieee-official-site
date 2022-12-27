import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Events from "./pages/Events";
import Pevents from "./pages/Pastevent.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/pastevents" element={<Pevents />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
