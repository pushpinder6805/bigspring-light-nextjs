# TheTechSpectra design system

The redesign preserves Next.js App Router routes, Markdown content loading, blog pagination, configured navigation, pricing values, social links, and the contact form’s POST action. No backend or submission service is introduced.

## Foundation

`config/theme.json` supplies Tailwind colors and font configuration. `styles/premium.scss` owns the shared visual system and responsive rules. Legacy content utilities remain available for existing Markdown and shortcodes.

- Canvas: ivory `#fafbf8`; surface: white; ink: `#172b24`; secondary text: `#59645c`.
- Accent: teal `#076f62`; accent hover: `#056356`; border: `#dde3dd`.
- Typography: Manrope with a system sans-serif fallback. Fluid heading sizes; compact interface labels; comfortable prose line height.
- Spacing: an 8px foundation, responsive section padding, and a centered 1200px content container.
- Radius: 9px controls, 12px icon tiles, 20px cards, and 24px feature panels.
- Motion: short CSS transitions and entrance animations; reduced-motion preferences disable movement and smooth scrolling.

## Reusable components

- `Logo`, `Icon`, `Header`, `Footer`, `Cta`, and `Pagination` are shared components.
- Buttons: `.btn` with `.btn-primary`, `.btn-secondary`, `.btn-outline-primary`, or `.btn-light`.
- Fields: `.form-input`, `.form-textarea`, semantic labels, native required/email validation, and visible focus treatment.
- Surfaces: `.panel`, `.service-card`, `.pricing-card`, `.blog-card`, and `.expertise-card`.
- Content: `.eyebrow`, `.section-heading`, `.page-heading`, `.icon-tile`, and `.text-link`.
- States: `.empty-state`, `.skeleton`, `.alert`, and `.badge`; `app/loading.js` provides route loading feedback.
- Supporting patterns: `.tabs`, native `dialog`, native `details` dropdowns/accordions, accessible tooltip selectors, and scrollable prose tables.

Use actual controls only when the experience needs them. The site does not add invented dashboard functionality, customer metrics, or testimonials. The homepage product illustration is explicitly illustrative.

## Content editing

Homepage copy and service data live in `content/_index.md`. Existing engineering benefits are retained in its `principles` block. Pricing data and FAQ questions remain in their original content files. Placeholder FAQ answers are replaced with project guidance that avoids inventing commercial policies; additional questions cover existing products, timelines, and SaaS integrations. The navigation and footer remain driven by `config/menu.json`.

## Contact configuration

Set `config.params.contact_form_action` to a real form submission endpoint before expecting delivery. It was empty in the original repository and remains unchanged. The form now submits `name`, `email`, `subject`, and `message`; the original message textarea had no field name. Contact details in `content/contact.md` and social URLs in `config/social.json` are inherited template values and should be replaced by verified business information.

## Verification

Run `npm install`, `npm run build`, and `npm run start`. Check the homepage, contact, pricing, FAQ, blog listing, paginated listing, all five articles, content elements, and the not-found page. Responsive QA covers 375px, 768px, 1024px, and 1440px widths. Keyboard checks cover the mobile menu, Escape dismissal, FAQ expansion, form validation, and reduced motion. The completed implementation passed 48 page/viewport checks and 12 automated WCAG A/AA audits across representative pages at mobile and desktop widths, with no reported violations. Pagination navigation was also checked. Submit a message only after configuring a real endpoint.
