import React, { useEffect } from "react";
import AOS from "aos";

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
    <div className="container py-5">
      <div className="row text-center">
        {stats.map((s, i) => (
          <div className="col-md-3 mb-4" key={i} data-aos="fade-up" data-aos-delay={i * 150}>
            <h2 className="fw-bold">{s.number}</h2>
            <p className="text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KPISection;
