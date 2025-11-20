import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style/About.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section text-white text-center py-5" data-aos="fade-up">
        <div className="container">
          <h1 className="display-5 fw-bold">Tentang Technova</h1>
          <p className="lead mt-3">Mitra transformasi digital Anda di era teknologi yang terus berkembang</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-content py-5" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img src="/a modern tech compan.png" alt="Technova Vision" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold mb-3">Siapa Kami?</h3>
              <p>
                Technova adalah penyedia solusi digital yang berfokus pada transformasi bisnis melalui teknologi. Kami membantu organisasi dari berbagai sektor untuk beradaptasi, berkembang, dan unggul di era digital.
              </p>
              <p>
                Dengan tim ahli di bidang pengembangan aplikasi, cloud, keamanan siber, dan infrastruktur IT, kami hadir untuk memberikan solusi yang tidak hanya canggih, tapi juga relevan dan berdampak nyata.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-content bg-light py-5" data-aos="fade-up">
        <div className="container text-center">
          <h3 className="fw-bold mb-4">Mengapa Memilih Technova?</h3>
          <div className="row justify-content-center">
            {[
              "Pendekatan konsultatif & berbasis kebutuhan",
              "Tim ahli dengan pengalaman lintas industri",
              "Solusi modular & scalable",
              "Dukungan end-to-end dari assessment hingga implementasi"
            ].map((item, i) => (
              <div className="col-md-6 col-lg-3 mb-4" key={i}>
                <div className="why-box p-4 rounded shadow-sm h-100 bg-white">
                  <i className="bi bi-check-circle-fill text-primary fs-3 mb-3"></i>
                  <p className="fw-semibold">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-content py-5" data-aos="fade-up">
        <div className="container text-center">
          <h3 className="fw-bold mb-3">Misi Kami</h3>
          <p className="mx-auto" style={{ maxWidth: "800px" }}>
            Memberdayakan bisnis Indonesia melalui teknologi digital yang inovatif, aman, dan berkelanjutan. Kami percaya bahwa setiap organisasi—besar maupun kecil—berhak mendapatkan solusi teknologi yang efektif dan mudah diakses.
          </p>
        </div>
      </section>

      {/* Trusted By */}
      <section className="section-content bg-light py-5" data-aos="fade-up">
        <div className="container text-center">
          <h4 className="fw-bold mb-4">Dipercaya oleh Klien dari Berbagai Sektor</h4>
          <div className="row justify-content-center">
            {["Startup", "Pemerintahan", "UMKM", "Korporasi", "Edukasi", "Kesehatan"].map((sector, i) => (
              <div className="col-6 col-md-2 mb-3" key={i}>
                <div className="sector-box p-2 rounded bg-white shadow-sm">{sector}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;