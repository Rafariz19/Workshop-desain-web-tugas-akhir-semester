import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="container text-center py-5">
      <h1 className="fw-bold" data-aos="fade-up">
        Memberdayakan Masa Depan Digital Anda
      </h1>

      <p className="mt-3" data-aos="fade-up" data-aos-delay="200">
        Transforming organizations with secure, modern, and scalable IT solutions — 
        from cybersecurity to cloud, development, and digital strategy
      </p>

<Link
  to="/contact"
  className="btn btn-primary mt-4 px-4 py-2 fw-bold"
  data-aos="fade-up"
  data-aos-delay="400"
>
  Konsultasi Sekarang →
</Link>
    </div>
  );
}

export default HeroSection;
