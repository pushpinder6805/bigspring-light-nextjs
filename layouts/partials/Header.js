"use client";
import Logo from "@components/Logo";
import Icon from "@components/Icon";
import menu from "@config/menu.json";
import config from "@config/config.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <nav className="container nav-shell" aria-label="Main navigation">
        <Logo />
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          <span>{open ? "✕" : "☰"}</span>
        </button>
        <div
          id="main-navigation"
          className={`navigation ${open ? "is-open" : ""}`}
        >
          <ul>
            {menu.main.map((item) => (
              <li key={item.name}>
                {item.hasChildren ? (
                  <details className="nav-details">
                    <summary>{item.name}</summary>
                    <ul>
                      {item.children.map((child) => (
                        <li key={child.url}>
                          <Link href={child.url} onClick={() => setOpen(false)}>
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={item.url}
                    onClick={() => setOpen(false)}
                    className={pathname === item.url ? "is-active" : ""}
                    aria-current={pathname === item.url ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {config.nav_button.enable && (
            <Link
              className="btn btn-primary nav-cta"
              href={config.nav_button.link}
            >
              {config.nav_button.label}
              <Icon size={17} />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
