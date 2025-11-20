import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Services5() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="services5-page">
      {/* Hero Section */}
      <section className="hero-section text-white text-center py-5" data-aos="fade-up">
        <div className="container">
          <h1 className="display-5 fw-bold">Cloud Migration & Cloud Services</h1>
          <p className="lead mt-3">Migrasi sistem Anda ke cloud dengan aman dan efisien</p>
        </div>
      </section>

      {/* Apa Itu */}
      <section className="section-content py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-3">Apa Tujuan Layanan Ini?</h3>
          <p className="mx-auto" style={{ maxWidth: "800px" }}>
            Migrasi data & sistem Anda ke cloud (AWS, Azure, GCP) untuk kecepatan, keamanan, dan efisiensi biaya.
          </p>
        </div>
      </section>

      {/* Manfaat */}
      <section className="section-content bg-light py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-4">Manfaat</h3>
          <div className="row justify-content-center">
            {[
              "Hemat biaya infrastruktur",
              "Akses dari mana saja",
              "Keamanan lebih tinggi"
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
              "Migrasi data",
              "Migrasi aplikasi",
              "Cloud architecture",
              "Optimization"
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
              "Perencanaan",
              "Migrasi",
              "Testing",
              "Governance"
            ].map((step, i) => (
              <div className="diagram-step" key={i}>
                <span>{step}</span>
                {i < 4 && <div className="arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paket Cloud Services */}
      <section className="section-content py-5 text-center bg-white" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-4">Paket Cloud Services</h3>
          <div className="row justify-content-center">
            {[
              {
                title: "Starter",
                color: "success",
                features: [
                  "Migrasi data dasar",
                  "Setup cloud storage (AWS S3 / Azure Blob)",
                  "1 akun cloud + dokumentasi",
                  "1 bulan support"
                ]
              },
              {
                title: "Growth",
                color: "primary",
                features: [
                  "Migrasi data & aplikasi",
                  "Setup cloud architecture (AWS/Azure)",
                  "Monitoring & optimization dasar",
                  "3 bulan support"
                ]
              },
              {
                title: "Enterprise",
                color: "purple",
                features: [
                  "Migrasi multi-aplikasi & database",
                  "Arsitektur hybrid/multi-cloud",
                  "Governance, security, & cost optimization",
                  "6 bulan support & evaluasi"
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

export default Services5;