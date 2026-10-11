import Icon from "@components/Icon";
export default function Workflow({ workflow }) {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">FROM CONCEPT TO CONFIDENCE</span>
            <h2>{workflow.title}</h2>
          </div>
          <p>{workflow.description}</p>
        </div>
        <div className="process-grid">
          {[
            [
              "Discover",
              "We listen, ask the right questions, and map your goals, users, and technical needs.",
            ],
            [
              "Design",
              "We turn your vision into intuitive experiences, with room to review and refine.",
            ],
            [
              "Develop",
              "We build, integrate, and test your product with clean code and clear communication.",
            ],
            [
              "Launch & evolve",
              "We help you deploy confidently and keep your product ready for what comes next.",
            ],
          ].map(([title, text], i) => (
            <article key={title}>
              <div className="step-number">
                0{i + 1}
                <Icon size={18} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
