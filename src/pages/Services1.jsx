import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style/Services1.css";

function Services1() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="services1-page">
      {/* Hero Section */}
      <section className="hero-section text-white text-center py-5" data-aos="fade-up">
        <div className="container">
          <h1 className="display-5 fw-bold">Transformasi Digital</h1>
          <p className="lead mt-3">Solusi strategis untuk mempercepat digitalisasi bisnis Anda</p>
        </div>
      </section>

      {/* Apa Itu */}
      <section className="section-content py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-3">Apa Tujuan Layanan Ini?</h3>
          <p className="mx-auto" style={{ maxWidth: "800px" }}>
            Layanan Transformasi Digital membantu perusahaan beralih dari proses manual ke sistem digital secara menyeluruh. Konsultan kami menganalisis proses bisnis yang ada, mengidentifikasi celah efisiensi, lalu merancang roadmap digitalisasi sesuai tujuan bisnis dan sumber daya perusahaan.
          </p>
          <p className="fw-bold text-dark">
            Transformasi digital berarti mengubah proses bisnis, budaya kerja, dan sistem perusahaan menggunakan teknologi seperti:
          </p>
          <div className="container my-4">
  <div className="row justify-content-center">
    <div className="col-md-6 col-lg-4">
      <ul className="list-group list-group-flush shadow-sm rounded border">
        {[
          "Aplikasi digital",
          "Cloud",
          "Automasi",
          "AI / Machine Learning",
          "Sistem ERP",
          "Sistem manajemen data",
        ].map((item, i) => (
          <li key={i} className="list-group-item d-flex align-items-center small py-2">
            <i className="bi bi-check-circle-fill text-primary me-2"></i>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* Manfaat */}
      <section className="section-content bg-light py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-4">Manfaat untuk Klien</h3>
          <div className="row justify-content-center">
            {[
              "Proses bisnis lebih cepat dan efisien",
              "Pengurangan biaya operasional",
              "Adaptasi lebih cepat terhadap teknologi baru",
              "Mengurangi human-error",
              "Meningkatkan daya saing bisnis"
            ].map((item, i) => (
              <div className="col-md-4 mb-3" key={i}>
                <div className="benefit-box p-3 rounded shadow-sm">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagram Proses */}
      <section className="section-content py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-4">Diagram Proses Layanan</h3>
          <div className="diagram-flow">
            {[
              "Assessment",
              "Analisis Gap",
              "Strategi Transformasi",
              "Roadmap Teknologi",
              "Implementasi",
              "Pelatihan",
              "Evaluasi"
            ].map((step, i) => (
              <div className="diagram-step" key={i}>
                <span>{step}</span>
                {i < 6 && <div className="arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kenapa Memilih Kami */}
      <section className="section-content bg-light py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-3">Kenapa Memilih Kami?</h3>
          <ul className="custom-list mx-auto" style={{ maxWidth: "700px" }}>
            <li>Pendekatan konsultatif, bukan sekadar teknis</li>
            <li>Pengalaman di berbagai industri</li>
            <li>Solusi disesuaikan kebutuhan bisnis, bukan template</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Services1;