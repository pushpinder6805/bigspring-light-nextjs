import Link from "next/link";
import Icon from "@components/Icon";
import { markdownify } from "@lib/utils/textConverter";
export default function Cta({ cta }) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-panel">
          <div>
            <span className="eyebrow">LET’S MAKE SOMETHING GREAT</span>
            <h2>{cta.title}</h2>
            <div className="cta-description">{markdownify(cta.content)}</div>
          </div>
          {cta.button.enable && (
            <Link
              className="btn btn-light"
              href={cta.button.link}
              rel={cta.button.rel}
            >
              {cta.button.label}
              <Icon size={19} />
            </Link>
          )}
          <span className="cta-watermark" aria-hidden="true">
            ✳
          </span>
        </div>
      </div>
    </section>
  );
}
