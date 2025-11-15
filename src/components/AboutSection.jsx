import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">About Us</h2>

      <div className="row align-items-center">
        <div className="col-md-6">
          <img 
            src="https://via.placeholder.com/500x300" 
            alt="About"
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6 mt-4 mt-md-0">
          <h3 className="fw-bold">Siapa Kami?</h3>
          <p className="mt-3">
            Kami adalah perusahaan teknologi yang berfokus pada pengembangan website,
            desain UI/UX, serta layanan IT Consulting. Kami membantu bisnis Anda
            berkembang dengan solusi digital yang modern.
          </p>
          <Link to="/about" className="btn btn-primary mt-3">
            Learn More
          </Link>

        </div>
      </div>
    </div>
  );
}

export default AboutSection;
