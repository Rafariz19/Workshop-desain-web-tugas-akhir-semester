import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style/Services2.css";

function Services2() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="services2-page">
      {/* Hero Section */}
      <section className="hero-section text-white text-center py-5" data-aos="fade-up">
        <div className="container">
          <h1 className="display-5 fw-bold">Pengembangan Aplikasi</h1>
          <p className="lead mt-3">(Custom Software Development)</p>
        </div>
      </section>

      {/* Apa Itu */}
      <section className="section-content py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-3">Apa Tujuan Layanan Ini?</h3>
          <p className="mx-auto" style={{ maxWidth: "800px" }}>
            Layanan ini membantu perusahaan membangun aplikasi khusus yang benar-benar menyesuaikan kebutuhan bisnis mereka—bukan aplikasi template, bukan aplikasi generik, tetapi dibuat dari nol sesuai alur kerja, tujuan, dan masalah yang dimiliki perusahaan.
          </p>
          <ul>Tujuan utama:
Meningkatkan efisiensi, mempercepat proses kerja, mengurangi human error, dan memberikan keunggulan kompetitif melalui teknologi.</ul>
        </div>
      </section>

      {/* Manfaat */}
      <section className="section-content bg-light py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-4">Manfaat untuk Klien</h3>
          <div className="row justify-content-center">
            {[
              "Sistem benar-benar sesuai kebutuhan",
              "Skalabilitas jangka panjang",
              "Efisiensi kerja meningkat",
              "Integrasi dengan sistem lain lebih mudah"
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
          <h3 className="fw-bold mb-4">Komponen / Ruang Lingkup</h3>
          <ul className="custom-list mx-auto" style={{ maxWidth: "700px" }}>
            {[
              "UI/UX Design",
              "Frontend & Backend Development",
              "Mobile App Development",
              "API & Integrasi Sistem",
              "Quality Assurance & Testing",
              "Deployment & Maintenance"
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Proses */}
      <section className="section-content bg-light py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-4">Proses Layanan</h3>
          <div className="diagram-flow">
            {[
              "Requirement Gathering",
              "Wireframe & UI/UX",
              "Development",
              "Testing",
              "Deployment",
              "Monitoring & Support"
            ].map((step, i) => (
              <div className="diagram-step" key={i}>
                <span>{step}</span>
                {i < 5 && <div className="arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kenapa Memilih Kami */}
      <section className="section-content py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-3">Kenapa Memilih Kami?</h3>
          <ul className="custom-list mx-auto" style={{ maxWidth: "700px" }}>
            <li>Kode bersih, dokumentasi lengkap</li>
            <li>Aplikasi scalable</li>
            <li>Tim developer berpengalaman</li>
          </ul>
        </div>
      </section>

      {/* Paket Pengembangan Aplikasi */}
      <section className="section-content py-5 text-center bg-white" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-4">Paket Pengembangan Aplikasi</h3>
          <div className="row justify-content-center">
            {[
              {
                title: "Starter",
                color: "success",
                features: [
                  "UI/UX dasar",
                  "Frontend sederhana",
                  "1 platform (web atau mobile)",
                  "1 bulan support"
                ]
              },
              {
                title: "Growth",
                color: "primary",
                features: [
                  "UI/UX profesional",
                  "Frontend & Backend lengkap",
                  "API & integrasi sistem",
                  "3 bulan support + testing"
                ]
              },
              {
                title: "Enterprise",
                color: "purple",
                features: [
                  "Full-stack development",
                  "Mobile + Web + Backend",
                  "QA, deployment, monitoring",
                  "6 bulan support & maintenance"
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

export default Services2;