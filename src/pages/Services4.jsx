import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Services4() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="services4-page">
      {/* Hero Section */}
      <section className="hero-section text-white text-center py-5" data-aos="fade-up">
        <div className="container">
          <h1 className="display-5 fw-bold">IT Infrastructure Setup & Modernization</h1>
          <p className="lead mt-3">Bangun pondasi teknologi yang kuat dan scalable</p>
        </div>
      </section>

      {/* Apa Itu */}
      <section className="section-content py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-3">Apa Tujuan Layanan Ini?</h3>
          <p className="mx-auto" style={{ maxWidth: "800px" }}>
            Kami membantu membangun infrastruktur IT mulai dari jaringan, server fisik, cloud, hingga keamanan jaringan, sesuai standar enterprise.
          </p>
        </div>
      </section>

      {/* Manfaat */}
      <section className="section-content bg-light py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-4">Manfaat</h3>
          <div className="row justify-content-center">
            {[
              "Sistem stabil & cepat",
              "Minim downtime",
              "Mudah di-scale up"
            ].map((item, i) => (
              <div className="col-md-4 mb-3" key={i}>
                <div className="benefit-box p-3 rounded shadow-sm">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Komponen */}
      <section className="section-content py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-4">Komponen</h3>
          <ul className="custom-list mx-auto" style={{ maxWidth: "700px" }}>
            {[
              "Setup server",
              "Jaringan LAN/WAN",
              "Virtualisasi",
              "Backup & Disaster Recovery"
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Workflow */}
      <section className="section-content bg-light py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-4">Workflow</h3>
          <div className="diagram-flow">
            {[
              "Assessment",
              "Desain solusi",
              "Implementasi",
              "Dokumentasi",
              "Monitoring"
            ].map((step, i) => (
              <div className="diagram-step" key={i}>
                <span>{step}</span>
                {i < 4 && <div className="arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paket Infrastruktur */}
      <section className="section-content py-5 text-center bg-white" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-4">Paket Infrastruktur IT</h3>
          <div className="row justify-content-center">
            {[
              {
                title: "Starter",
                color: "success",
                features: [
                  "Setup server dasar",
                  "Jaringan LAN sederhana",
                  "Dokumentasi konfigurasi",
                  "1 bulan monitoring"
                ]
              },
              {
                title: "Growth",
                color: "primary",
                features: [
                  "Setup server & virtualisasi",
                  "Jaringan LAN/WAN",
                  "Backup & recovery",
                  "3 bulan monitoring + dokumentasi"
                ]
              },
              {
                title: "Enterprise",
                color: "purple",
                features: [
                  "Infrastruktur hybrid (fisik + cloud)",
                  "Keamanan jaringan & disaster recovery",
                  "Workflow lintas departemen",
                  "6 bulan monitoring & evaluasi"
                ]
              }
            ].map((pkg, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <div className={`card border-${pkg.color} shadow-sm h-100`}>
                  <div className={`card-header bg-${pkg.color} text-white fw-bold`}>
                    Paket {pkg.title}
                  </div>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <ul className="list-unstyled text-start mb-4">
                      {pkg.features.map((f, j) => (
                        <li key={j} className="mb-2">
                          <i className="bi bi-check-circle-fill text-primary me-2"></i>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a href="/contact" className="btn btn-outline-primary w-100">
                      Pilih Paket
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services4;