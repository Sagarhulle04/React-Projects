import { ArrowDownToDot } from "lucide-react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainHero } from "./components/MainHero";
import Explore from "./components/Explore";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<MainHero />} />
          <Route path="explore" element={<Explore />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
