import { markdownify, plainify } from "@lib/utils/textConverter";
import Link from "next/link";
export default function Faq({ data }) {
  const { title, faqs } = data.frontmatter;
  return (
    <section className="section inner-page">
      <div className="container">
        <div className="page-heading">
          <span className="eyebrow">A LITTLE MORE CLARITY</span>
          <h1>{title}</h1>
          <p>Answers to help you take your next step with confidence.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <details className="faq-item" key={i}>
              <summary>
                <span>{plainify(faq.title)}</span>
                <span className="faq-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="faq-answer">{markdownify(faq.answer, "div")}</div>
            </details>
          ))}
          <div className="faq-help">
            <h2>Still have a question?</h2>
            <p>Let’s talk about what you need.</p>
            <Link href="/contact" className="btn btn-primary">
              Get in touch ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
