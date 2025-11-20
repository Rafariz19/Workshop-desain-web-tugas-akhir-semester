import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Services6() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="services6-page">
      {/* Hero Section */}
      <section className="hero-section text-white text-center py-5" data-aos="fade-up">
        <div className="container">
          <h1 className="display-5 fw-bold">Cybersecurity Assessment</h1>
          <p className="lead mt-3">Audit keamanan menyeluruh untuk melindungi sistem dan data Anda</p>
        </div>
      </section>

      {/* Apa Itu */}
      <section className="section-content py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-3">Apa Itu Layanan Ini?</h3>
          <p className="mx-auto" style={{ maxWidth: "800px" }}>
            Cybersecurity Assessment adalah proses evaluasi menyeluruh terhadap keamanan sistem TI perusahaan. Layanan ini mencakup identifikasi celah keamanan (vulnerabilities), pengujian penetrasi (penetration testing), dan pengecekan kepatuhan terhadap standar industri (compliance). Tujuannya adalah untuk mengetahui seberapa rentan sistem Anda terhadap serangan siber dan memberikan rekomendasi konkret untuk memperkuat pertahanan digital.
          </p>
        </div>
      </section>

      {/* Manfaat */}
      <section className="section-content bg-light py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-4">Manfaat</h3>
          <div className="row justify-content-center">
            {[
              "Mencegah serangan siber",
              "Melindungi data sensitif",
              "Memenuhi standar keamanan",
              "Meningkatkan kepercayaan pelanggan dan mitra",
              "Membantu tim memahami risiko dan prioritas"
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
          <h3 className="fw-bold mb-4">Komponen Layanan</h3>
          <ul className="custom-list mx-auto" style={{ maxWidth: "700px" }}>
            {[
              "Vulnerability Assessment",
              "Penetration Testing",
              "Compliance Check",
              "Security Posture Review",
              "Risk Prioritization"
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
              "Scanning",
              "Analisis",
              "Eksploitasi Terbatas",
              "Laporan",
              "Remediasi"
            ].map((step, i) => (
              <div className="diagram-step" key={i}>
                <span>{step}</span>
                {i < 4 && <div className="arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paket Cybersecurity */}
      <section className="section-content py-5 text-center bg-white" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-4">Paket Cybersecurity Assessment</h3>
          <div className="row justify-content-center">
            {[
              {
                title: "Starter",
                color: "success",
                features: [
                  "Vulnerability scan dasar",
                  "Laporan risiko prioritas",
                  "1 sesi konsultasi remediasi",
                  "1 sistem target (web atau jaringan)"
                ]
              },
              {
                title: "Growth",
                color: "primary",
                features: [
                  "Vulnerability scan + penetration testing terbatas",
                  "Compliance check (ISO/NIST)",
                  "Laporan lengkap + rekomendasi teknis",
                  "3 sistem target",
                  "3 bulan support"
                ]
              },
              {
                title: "Enterprise",
                color: "purple",
                features: [
                  "Full-scope pentest (web, mobile, API, jaringan)",
                  "Simulasi serangan siber (red teaming)",
                  "Review kebijakan & SOP keamanan",
                  "Laporan eksekutif + teknis",
                  "6 bulan support & evaluasi ulang"
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

export default Services6;