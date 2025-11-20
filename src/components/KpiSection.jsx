import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../pages/style/KPISection.css"; // pastikan file ini dibuat

function KPISection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const stats = [
    { number: "300+", label: "Clients Served" },
    { number: "12+", label: "Years of Experience" },
    { number: "24/7", label: "Security Monitoring" },
    { number: "50+", label: "Cybersecurity Experts" },
  ];

  return (
    <section className="kpi-section text-white text-center py-5">
      <div className="container">
        <div className="row">
          {stats.map((s, i) => (
            <div className="col-md-3 mb-4" key={i} data-aos="fade-up" data-aos-delay={i * 150}>
              <h2 className="fw-bold">{s.number}</h2>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KPISection;