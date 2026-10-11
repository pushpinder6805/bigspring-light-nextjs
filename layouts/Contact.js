import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import Icon from "@components/Icon";
export default function Contact({ data }) {
  const { title, info } = data.frontmatter;
  return (
    <section className="section inner-page">
      <div className="container">
        <div className="page-heading">
          <span className="eyebrow">START A CONVERSATION</span>
          <h1>{title}</h1>
          <p>
            A new idea, a tricky challenge, or your next big step. Tell us what
            you have in mind.
          </p>
        </div>
        <div className="contact-grid">
          <form
            className="contact-form panel"
            method="POST"
            action={config.params.contact_form_action}
          >
            <h2>Tell us about your project</h2>
            <p className="form-intro">
              A few details are all we need to get started.
            </p>
            <div className="form-grid">
              <div>
                <label htmlFor="contact-name">
                  Your name <span>(required)</span>
                </label>
                <input
                  id="contact-name"
                  className="form-input"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Alex Morgan"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-email">
                  Email address <span>(required)</span>
                </label>
                <input
                  id="contact-email"
                  className="form-input"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="alex@company.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-subject">
                What would you like to build? <span>(required)</span>
              </label>
              <input
                id="contact-subject"
                className="form-input"
                name="subject"
                placeholder="A website, an app, a custom integration…"
                required
              />
            </div>
            <div>
              <label htmlFor="contact-message">Project details</label>
              <textarea
                id="contact-message"
                className="form-textarea"
                name="message"
                rows="6"
                placeholder="Share your goals, timeline, and anything else we should know."
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send your message
              <Icon size={18} />
            </button>
          </form>
          <aside className="contact-info">
            <span className="icon-tile">
              <Icon name="spark" size={26} />
            </span>
            <h2>{info.title}</h2>
            {markdownify(info.description, "p")}
            <ul className="contact-list">
              {info.contacts.map((c, i) => (
                <li key={i}>{markdownify(c, "div")}</li>
              ))}
            </ul>
            <div className="contact-expect">
              <h3>A clear path forward</h3>
              {[
                "Talk through your goals",
                "Explore the right approach",
                "Define the scope together",
              ].map((x) => (
                <p key={x}>
                  <Icon name="check" size={17} />
                  {x}
                </p>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
