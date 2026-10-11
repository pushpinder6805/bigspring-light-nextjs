import Icon from "@components/Icon";

const icons = {
  "Web development": "code",
  "Backend & APIs": "app",
  "SaaS integrations": "integration",
  Databases: "shield",
  "Cloud & DevOps": "cloud",
  "Mobile apps": "phone",
  "Games & realtime": "game",
};

export default function ArticleCover({ category = "Insights" }) {
  return (
    <div className="article-cover" aria-hidden="true">
      <div className="article-cover-orbit" />
      <div className="article-cover-icon">
        <Icon name={icons[category] || "code"} size={52} />
      </div>
      <span className="article-cover-label">THE TECH SPECTRA / {category}</span>
      <span className="article-cover-mark">Ideas into impact.</span>
    </div>
  );
}
