function ServicesSection() {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">Our Services</h2>

      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card p-3">
            <h4>Web Development</h4>
            <p>Kami membuat website modern, cepat, dan responsif.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card p-3">
            <h4>UI/UX Design</h4>
            <p>Desain tampilan profesional untuk meningkatkan pengalaman pengguna.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card p-3">
            <h4>IT Consulting</h4>
            <p>Kami memberikan solusi tepat untuk kebutuhan bisnis Anda.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
