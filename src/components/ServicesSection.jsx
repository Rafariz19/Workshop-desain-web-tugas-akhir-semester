import { Link } from "react-router-dom";

function ServicesSection() {
  const services = [
    {
      title: "Konsultasi Transformasi Digital",
      desc: "Bantu bisnis beradaptasi di era digital dengan strategi yang tepat.Kami menganalisis proses kerja Anda, menemukan peluang otomatisasi, dan membuat roadmap digital yang realistis agar perusahaan dapat bekerja lebih cepat, efisien, dan kompetitif.",
      link: "/services1"
    },
    {
      title: "Pengembangan Aplikasi (Custom Software Development)",
      desc: "Bangun aplikasi yang benar-benar sesuai kebutuhan bisnis Anda. Mulai dari perencanaan, desain UI/UX, pengembangan fitur, hingga maintenance—kami memastikan aplikasi bekerja stabil dan mendukung tujuan operasional Anda.",
      link: "/services2"
    },
    {
      title: "Pembuatan Website & Company Profile",
      desc: "Tingkatkan citra profesional perusahaan dengan website yang modern, cepat, dan responsif. Kami membuat website yang tidak hanya terlihat premium, tapi juga mampu menjelaskan identitas bisnis, layanan, dan keunggulan Anda secara jelas dan menarik.",
      link: "/services3"
    },
    {
      title: "IT Infrastructure Setup & Modernization",
      desc: "Bangun pondasi teknologi yang kuat untuk pertumbuhan jangka panjang. Kami membantu menyiapkan dan memodernisasi infrastruktur IT—server, jaringan, keamanan, dan sistem pendukung—agar kinerja perusahaan menjadi lebih stabil dan aman.",
      link: "/services4"
    },
    {
      title: "Cloud Migration & Cloud Services",
      desc: "Pindahkan sistem Anda ke cloud dengan aman dan tanpa downtime. Kami membantu proses migrasi, konfigurasi keamanan, optimasi biaya, serta integrasi layanan cloud (AWS, GCP, Azure) untuk meningkatkan skalabilitas dan fleksibilitas bisnis Anda.",
      link: "/services5"
    },
    {
      title: "Cybersecurity Assessment",
      desc: "Lindungi bisnis dari ancaman siber sebelum terlambat. Kami melakukan audit keamanan menyeluruh, mengidentifikasi celah risiko, dan memberikan rekomendasi solusi agar sistem dan data perusahaan tetap aman dari serangan digital.",
      link: "/services6"
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-4">Layanan Kami</h2>

      <div className="row g-4">
        {services.map((s, i) => (
          <div className="col-md-4" key={i}>
            <div className="p-4 border rounded shadow-sm h-100 service-card">
              <h5 className="fw-bold">{s.title}</h5>
              <p className="text-muted mt-2">{s.desc}</p>
              <Link to={s.link} className="btn discover-btn mt-3">
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;