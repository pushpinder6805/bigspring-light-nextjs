import Icon from "@components/Icon";
import Link from "next/link";
export default function HomeFeatures({ feature }) {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">WHAT WE BUILD</span>
            <h2>
              Big ambitions.
              <br />
              Beautifully engineered.
            </h2>
          </div>
          <p>
            One development partner. Every digital possibility. We bring design,
            technology, and your business goals together.
          </p>
        </div>
        <div className="service-grid">
          {feature.features.map((item, i) => (
            <Link href="/contact" className="service-card" key={item.name}>
              <div className="card-top">
                <span className="icon-tile">
                  <Icon name={item.symbol} />
                </span>
                <span className="card-number">0{i + 1}</span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.content}</p>
              <span className="service-card-link">
                Let’s build it <Icon size={17} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
