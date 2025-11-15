function ServiceCard({ title, description }) {
  return (
    <div className="col-md-4">
      <div className="card p-4 shadow-sm border-0">
        <h4 className="fw-bold">{title}</h4>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
