import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style/Contact.css";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    service: "",
    package: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section text-white text-center py-5" data-aos="fade-up">
        <div className="container">
          <h1 className="display-5 fw-bold">Hubungi Kami</h1>
          <p className="lead mt-3">Kami siap membantu kebutuhan digital Anda</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-content py-4 text-center" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-3">Bagaimana Kami Bisa Membantu Anda?</h3>
          <p className="mb-4">Silakan hubungi kami melalui formulir di bawah atau langsung melalui kontak berikut:</p>
          <div className="d-flex justify-content-center gap-4 mb-3">
            <div className="contact-icon">
              <i className="bi bi-whatsapp text-success fs-4 me-2"></i>
              <span className="fw-semibold">0895-0884-2143</span>
            </div>
            <div className="contact-icon">
              <i className="bi bi-envelope-fill text-danger fs-4 me-2"></i>
              <span className="fw-semibold">yukizuna99@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-content py-5" data-aos="fade-up">
        <div className="container">
          <div className="form-wrapper mx-auto p-5 shadow-lg rounded border border-primary" style={{ maxWidth: "800px" }}>
            <h3 className="fw-bold mb-4 text-center">Formulir Kontak</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Nama Lengkap</label>
                <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Nama Perusahaan</label>
                <input type="text" className="form-control" name="company" value={formData.company} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Pilih Layanan</label>
                <select className="form-select" name="service" value={formData.service} onChange={handleChange} required>
                  <option value="">-- Pilih --</option>
                  <option value="Konsultasi Transformasi Digital">Konsultasi Transformasi Digital</option>
                  <option value="Pengembangan Aplikasi">Pengembangan Aplikasi</option>
                  <option value="Pembuatan Website & Company Profile">Pembuatan Website & Company Profile</option>
                  <option value="IT Infrastructure Setup & Modernization">IT Infrastructure Setup & Modernization</option>
                  <option value="Cloud Migration & Cloud Services">Cloud Migration & Cloud Services</option>
                  <option value="Cybersecurity Assessment">Cybersecurity Assessment</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Pilih Paket</label>
                <select className="form-select" name="package" value={formData.package} onChange={handleChange} required>
                  <option value="">-- Pilih --</option>
                  <option value="Starter">Starter</option>
                  <option value="Growth">Growth</option>
                  <option value="Enterprise">Enterprise</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Pesan / Kebutuhan Khusus</label>
                <textarea className="form-control" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary px-4">Kirim Pesan</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Tidur Nyenyak */}
      <div className="text-center mt-4 mb-5">
        <h4 className="text-primary fw-bold">
          Tidur nyenyak, kami siap membantu
        </h4>
      </div>

{/* Testimoni Klien */}
<section className="section-content py-5 bg-light text-center" data-aos="fade-up">
  <div className="container">
    <h4 className="fw-bold mb-4">Testimoni dari klien kami :</h4>
    <div className="testimonial-column mx-auto" style={{ maxWidth: "700px" }}>
      {[
        {
          name: "Andi - CEO Startup",
          comment: "Tim mereka sangat responsif dan profesional. Website kami tampil jauh lebih modern!",
          avatar: "/nime2.jpg"
        },
        {
          name: "Sinta - Manager IT",
          comment: "Layanan cloud dan keamanan yang mereka berikan membuat sistem kami jauh lebih stabil.",
          avatar: "/download (2).jpg"
        },
        {
          name: "Rudi - UMKM Owner",
          comment: "Paket Starter sudah cukup untuk bisnis kecil saya. Hasilnya memuaskan dan cepat!",
          avatar: "yuta okkotsu.jpg"
        },
        {
          name: "Erina chan - HR Consultant",
          comment: "Desain website company profile kami terlihat premium dan mudah diakses klien.",
          avatar: "/𝘍𝘰𝘭𝘭𝘰𝘸 𝘮𝘦 ૮ ˶ᵔ ᵕ ᵔ˶ ა.jpg"
        }
      ].map((testi, i) => (
        <div className="testimonial-box d-flex align-items-start mb-4 p-3 rounded shadow-sm bg-white" key={i}>
          <img
            src={testi.avatar}
            alt={testi.name}
            className="rounded-circle me-3"
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
          />
          <div className="text-start">
            <p className="mb-1">“{testi.comment}”</p>
            <small className="text-muted">{testi.name}</small>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
}

export default Contact;