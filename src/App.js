import { useEffect } from 'react';
import Header from './components/Navbar';
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// main pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

// services Section page
import Services1 from "./pages/Services1"
import Services2 from "./pages/Services2";
import Services3 from "./pages/Services3";
import Services4 from "./pages/Services4";
import Services5 from "./pages/Services5";
import Services6 from "./pages/Services6";


function App() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/services1" element={<Services1 />} />
        <Route path="/services2" element={<Services2 />} />
        <Route path="/services3" element={<Services3 />} />
        <Route path="/services4" element={<Services4 />} />
        <Route path="/services5" element={<Services5 />} />
        <Route path="/services6" element={<Services6 />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
