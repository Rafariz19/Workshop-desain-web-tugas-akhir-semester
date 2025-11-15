import React from 'react';
import Header from './components/Navbar';
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";


function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <p>Ini konten utama website.</p>
    </div>
  );
}

export default App;
