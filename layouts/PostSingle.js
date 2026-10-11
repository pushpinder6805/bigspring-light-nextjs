import MDXContent from "app/helper/MDXContent";
import Image from "next/image";
import Link from "next/link";
import ArticleCover from "@components/ArticleCover";
import { plainify } from "@lib/utils/textConverter";
import SeoMeta from "./SeoMeta";

const PostSingle = ({ frontmatter, content }) => {
  const { title, image, image_alt, category, author } = frontmatter;
  const description =
    frontmatter.description || plainify(content).slice(0, 160);
  const readingTime = Math.max(
    1,
    Math.ceil(plainify(content).split(/\s+/).length / 220),
  );

  return (
    <>
      <SeoMeta title={title} description={description} image={image} />
      <section className="section article-section">
        <div className="container">
          <article className="article-page">
            <header className="article-header">
              <Link href="/blogs" className="article-back">
                ← Back to articles
              </Link>
              <div className="article-meta">
                <span className="eyebrow">{category || "Insights"}</span>
                <span>
                  {author || "TheTechSpectra"} · {readingTime} min read
                </span>
              </div>
              <h1>{title}</h1>
              {frontmatter.category && (
                <p className="article-intro">{description}</p>
              )}
            </header>
            <div className="article-hero">
              {image ? (
                <Image
                  src={image}
                  height={675}
                  width={1200}
                  alt={image_alt || title}
                  priority
                  sizes="(max-width: 860px) 92vw, 820px"
                />
              ) : (
                <ArticleCover category={category} />
              )}
            </div>
            <div className="content article-content">
              <MDXContent content={content} />
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default PostSingle;
