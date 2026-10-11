import Link from "next/link";
import Icon from "@components/Icon";
export default function HomeBanner({ banner }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="status-dot" /> YOUR IDEAS. OUR ENGINEERING.
          </span>
          <h1>
            {banner.title.split(/\.\s+/).map((line, i, lines) =>
              i === lines.length - 1 ? (
                <span key={line}>{line}</span>
              ) : (
                <span className="hero-title-line" key={line}>
                  {line}.<br />
                </span>
              ),
            )}
          </h1>
          <p>{banner.content}</p>
          <div className="button-row">
            <Link className="btn btn-primary" href={banner.button.link}>
              {banner.button.label}
              <Icon size={18} />
            </Link>
            <Link className="btn btn-secondary" href="#services">
              Explore our services <span aria-hidden="true">↓</span>
            </Link>
          </div>
          <div className="hero-note">
            <span className="tiny-mark">
              <Icon name="check" size={15} />
            </span>{" "}
            From your first idea to your next big launch.
          </div>
        </div>
        <div
          className="product-scene"
          role="img"
          aria-label="Illustrative web, mobile and software product interfaces"
        >
          <div className="scene-orbit" />
          <div className="studio-window">
            <div className="window-bar">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>
              <span>YOUR NEXT BIG THING</span>
              <Icon name="spark" size={14} />
            </div>
            <div className="studio-body">
              <aside className="studio-sidebar">
                <div className="mini-brand">
                  s<span>✳</span>
                </div>
                {["Overview", "Projects", "Analytics", "Integrations"].map(
                  (x, i) => (
                    <div key={x} className={i === 0 ? "selected" : ""}>
                      <Icon
                        name={["app", "code", "globe", "integration"][i]}
                        size={13}
                      />
                      {x}
                    </div>
                  ),
                )}
                <div className="sidebar-bottom">Built around you.</div>
              </aside>
              <div className="studio-content">
                <div className="studio-heading">
                  <div>
                    <small>WORKSPACE</small>
                    <h3>Ideas, in motion.</h3>
                  </div>
                  <span className="demo-badge">Live preview</span>
                </div>
                <div className="demo-stats">
                  <div>
                    <span>Design</span>
                    <strong>Beautiful.</strong>
                    <small>Every detail considered</small>
                  </div>
                  <div>
                    <span>Development</span>
                    <strong>Scalable.</strong>
                    <small>Built for what’s next</small>
                  </div>
                </div>
                <div className="chart-card">
                  <div>
                    <strong>A better digital experience</strong>
                    <span>DESIGNED TO GROW ↗</span>
                  </div>
                  <div className="chart-bars">
                    {[27, 38, 33, 52, 46, 62, 58, 76, 68, 85, 80, 98].map(
                      (h, i) => (
                        <i key={i} style={{ height: `${h}%` }} />
                      ),
                    )}
                  </div>
                  <div className="chart-labels">
                    <span>Idea</span>
                    <span>Build</span>
                    <span>Launch</span>
                    <span>Grow</span>
                  </div>
                </div>
                <div className="project-line">
                  <span className="tiny-mark">
                    <Icon name="check" size={14} />
                  </span>
                  <div>
                    <strong>Ready for the real world</strong>
                    <small>Responsive · Secure · Made for you</small>
                  </div>
                  <Icon size={16} />
                </div>
              </div>
            </div>
          </div>
          <div className="code-float">
            <span>
              <i /> CLEAN CODE. CLEAR THINKING.
            </span>
            <code>
              <b>const</b> possibilities = <em>unlimited</em>;<br />
              <b>await</b> build(<em>yourIdea</em>);
            </code>
          </div>
          <div className="mobile-float">
            <div className="phone-notch" />
            <small>MADE TO MOVE</small>
            <h4>
              Your product.
              <br />
              Anywhere.
            </h4>
            <div className="phone-art">
              <Icon name="spark" size={46} />
            </div>
            <div className="phone-lines">
              <i />
              <i />
            </div>
            <span className="phone-button">Let’s go ↗</span>
          </div>
          <div className="scene-caption">
            A glimpse of what we can build together. <span>01 / ∞</span>
          </div>
        </div>
      </div>
      <div className="container capability-strip">
        <span>BUILT FOR YOUR AMBITION</span>
        <div>Websites</div>
        <div>Web applications</div>
        <div>Mobile apps</div>
        <div>Software & SaaS</div>
      </div>
    </section>
  );
}
