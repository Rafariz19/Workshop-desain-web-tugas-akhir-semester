function CertificationSection() {
  const certs = [
    "ISO 27001",
    "ISO 9001",
    "CompTIA Security+",
    "CEH Certified"
  ];

  return (
    <div className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Sertifikasi & Standar</h2>

        <div className="row justify-content-center g-3">
          {certs.map((c, i) => (
            <div className="col-md-3" key={i}>
              <div className="p-3 border rounded shadow-sm bg-white">
                {c}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CertificationSection;
