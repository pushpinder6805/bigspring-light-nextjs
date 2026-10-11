import Link from "next/link";
import Cta from "./components/Cta";
import Icon from "@components/Icon";
export default function Pricing({ data }) {
  const { title, plans, call_to_action } = data.frontmatter;
  return (
    <>
      <section className="section inner-page">
        <div className="container">
          <div className="page-heading">
            <span className="eyebrow">A PLAN FOR YOUR NEXT STEP</span>
            <h1>{title}</h1>
            <p>
              Explore the existing plans, or talk to us about a custom project
              scope.
            </p>
          </div>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article
                key={plan.title}
                className={`pricing-card ${plan.recommended ? "recommended" : ""}`}
              >
                {plan.recommended && (
                  <span className="plan-badge">RECOMMENDED</span>
                )}
                <h2>{plan.title}</h2>
                <p>{plan.subtitle}</p>
                <div className="plan-price">
                  <strong>${plan.price}</strong>
                  <span>/ {plan.type}</span>
                </div>
                <Link
                  className={`btn ${plan.recommended ? "btn-primary" : "btn-secondary"}`}
                  href={plan.button.link}
                  rel={plan.button.rel}
                >
                  {plan.button.label}
                  <Icon size={17} />
                </Link>
                <div className="plan-divider" />
                <span className="eyebrow">WHAT’S INCLUDED</span>
                <ul>
                  {plan.features.map((f) => (
                    <li key={f}>
                      <Icon name="check" size={18} />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Cta cta={call_to_action} />
    </>
  );
}
