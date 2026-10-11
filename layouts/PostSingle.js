import { markdownify } from "@lib/utils/textConverter";
import MDXContent from "app/helper/MDXContent";
import Image from "next/image";
import Link from "next/link";
import ArticleCover from "@components/ArticleCover";
import { plainify } from "@lib/utils/textConverter";
import SeoMeta from "./SeoMeta";

const PostSingle = ({ frontmatter, content }) => {
  let { description, title, image, category, author } = frontmatter;
  const readingTime = Math.max(
    1,
    Math.ceil(plainify(content).split(/\s+/).length / 220),
  );
  description = description ? description : content.slice(0, 120);

  return (
    <>
      <SeoMeta title={title} description={description} />
      <section className="section">
        <div className="container">
          <div className="row">
            <article className="col-12 mx-auto text-center md:col-8">
              <Link href="/blogs" className="article-back">
                ← Back to articles
              </Link>
              <div className="article-meta">
                <span className="eyebrow">{category || "Insights"}</span>
                <span>
                  {author || "TheTechSpectra"} · {readingTime} min read
                </span>
              </div>
              {image ? (
                <Image
                  src={image}
                  height="500"
                  width="1000"
                  alt={title}
                  priority={true}
                  className="rounded-lg"
                />
              ) : (
                <ArticleCover category={category} />
              )}
              {markdownify(title, "h1", "h2 mb-6 mt-6 text-left")}

              <div className="content mb-16 text-left">
                <MDXContent content={content} />
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostSingle;
