import Logo from "@components/Logo";
import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>{config.params.footer_content}</p>
            <Social source={social} className="social-icons" />
          </div>
          {menu.footer.map((col) => (
            <div key={col.name}>
              <h2>{col.name}</h2>
              <ul>
                {col.menu.map((item) => (
                  <li key={item.text}>
                    <Link href={item.url}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          {markdownify(config.params.copyright, "p")}
          <span>Thoughtfully designed. Carefully built.</span>
        </div>
      </div>
    </footer>
  );
}
