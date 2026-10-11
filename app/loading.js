export default function Loading() {
  return (
    <section className="section" role="status" aria-label="Loading page">
      <span className="sr-only">Loading, please wait.</span>
      <div className="container" aria-hidden="true">
        <div className="skeleton loading-heading" />
        <div className="service-grid">
          {[0, 1, 2].map((i) => (
            <div key={i}>
              <div className="skeleton skeleton-card" />
              <div className="skeleton skeleton-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
