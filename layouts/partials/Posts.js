import config from "@config/config.json";
import { plainify } from "@lib/utils/textConverter";
import Icon from "@components/Icon";
import Image from "next/image";
import Link from "next/link";
export default function Posts({ posts }) {
  if (!posts.length)
    return (
      <div className="empty-state">
        <h2>More ideas are on the way.</h2>
        <p>Check back soon for new articles and insights.</p>
      </div>
    );
  return (
    <div className="blog-grid">
      {posts.map((post, i) => (
        <article
          key={post.slug}
          className={`blog-card ${i === 0 ? "blog-featured" : ""}`}
        >
          {post.frontmatter.image && (
            <Link
              href={`/${config.settings.blog_folder}/${post.slug}`}
              tabIndex={-1}
              aria-hidden="true"
            >
              <Image
                src={post.frontmatter.image}
                alt=""
                width={700}
                height={400}
                priority={i === 0}
              />
            </Link>
          )}
          <div className="blog-card-body">
            <span className="eyebrow">
              {i === 0 ? "FEATURED INSIGHT" : "FROM THE BLOG"}
            </span>
            <h2 className="mt-3">
              <Link href={`/${config.settings.blog_folder}/${post.slug}`}>
                {post.frontmatter.title}
              </Link>
            </h2>
            <p>
              {post.frontmatter.desc ||
                plainify(
                  post.content?.slice(
                    0,
                    Number(config.settings.summary_length),
                  ),
                )}
            </p>
            <Link
              className="text-link"
              href={`/${config.settings.blog_folder}/${post.slug}`}
            >
              Read the article
              <Icon size={16} />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
