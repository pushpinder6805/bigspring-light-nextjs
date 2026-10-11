import Icon from "@components/Icon";
export default function Principles({ principles }) {
  const symbols = ["code", "app", "phone", "spark", "integration", "cloud"];
  return (
    <section className="section principles-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">THE DETAILS THAT MATTER</span>
            <h2>{principles.title}</h2>
          </div>
          <p>
            Good engineering goes beyond the screen. Our foundations keep your
            product dependable, maintainable, and ready to grow.
          </p>
        </div>
        <div className="principles-grid">
          {principles.features.map((item, i) => (
            <article key={item.name}>
              <Icon name={symbols[i]} size={23} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.content}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
