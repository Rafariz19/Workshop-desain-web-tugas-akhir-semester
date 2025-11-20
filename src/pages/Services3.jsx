import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Services3() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="services3-page">
      {/* Hero Section */}
      <section className="hero-section text-white text-center py-5" data-aos="fade-up">
        <div className="container">
          <h1 className="display-5 fw-bold">Pembuatan Website & Company Profile</h1>
          <p className="lead mt-3">Website profesional untuk branding dan sistem internal</p>
        </div>
      </section>

      {/* Apa Itu */}
      <section className="section-content py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-3">Apa Tujuan Layanan Ini?</h3>
          <p className="mx-auto" style={{ maxWidth: "800px" }}>
            Layanan pembuatan website profesional untuk branding, company profile, e-commerce, blog, hingga portal sistem internal.
          </p>
        </div>
      </section>

      {/* Manfaat */}
      <section className="section-content bg-light py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-4">Manfaat untuk Klien</h3>
          <div className="row justify-content-center">
            {[
              "Meningkatkan kredibilitas bisnis",
              "Tampil profesional & mudah ditemukan online",
              "Struktur website modern & responsif"
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
              "UI/UX Web",
              "CMS (WordPress, Laravel, Next.js)",
              "SEO Basic",
              "Domain & Hosting Management"
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
              "Konsultasi konsep",
              "Desain",
              "Development",
              "Testing",
              "Launching"
            ].map((step, i) => (
              <div className="diagram-step" key={i}>
                <span>{step}</span>
                {i < 4 && <div className="arrow">→</div>}
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
            <li>Desain premium</li>
            <li>SEO-friendly</li>
            <li>Keamanan website terjamin</li>
          </ul>
        </div>
      </section>

      {/* Paket Website */}
      <section className="section-content py-5 text-center bg-white" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-4">Paket Pembuatan Website</h3>
          <div className="row justify-content-center">
            {[
              {
                title: "Starter",
                color: "success",
                features: [
                  "Desain template responsif",
                  "3 halaman (Home, About, Contact)",
                  "CMS WordPress",
                  "Domain & hosting 1 tahun"
                ]
              },
              {
                title: "Growth",
                color: "primary",
                features: [
                  "Desain semi-custom",
                  "Hingga 6 halaman",
                  "CMS WordPress atau Laravel",
                  "SEO dasar + form kontak",
                  "3 bulan support"
                ]
              },
              {
                title: "Enterprise",
                color: "purple",
                features: [
                  "Desain full custom",
                  "Tak terbatas jumlah halaman",
                  "CMS Laravel atau Next.js",
                  "Integrasi sistem internal",
                  "SEO lanjutan + keamanan ekstra",
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

export default Services3;