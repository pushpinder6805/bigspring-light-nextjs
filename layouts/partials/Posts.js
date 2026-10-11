import config from "@config/config.json";
import Icon from "@components/Icon";
import ArticleCover from "@components/ArticleCover";
import Image from "next/image";
import Link from "next/link";

export default function Posts({ posts }) {
  if (!posts.length) return null;
  return (
    <div className="blog-grid">
      {posts.map((post, i) => (
        <article
          key={post.slug}
          className={`blog-card ${i === 0 ? "blog-featured" : ""}`}
        >
          <Link
            href={`/${config.settings.blog_folder}/${post.slug}`}
            tabIndex={-1}
            aria-hidden="true"
          >
            {post.frontmatter.image ? (
              <Image
                src={post.frontmatter.image}
                alt=""
                width={700}
                height={400}
                priority={i === 0}
              />
            ) : (
              <ArticleCover category={post.frontmatter.category} />
            )}
          </Link>
          <div className="blog-card-body">
            <div className="blog-card-meta">
              <span className="eyebrow">
                {post.frontmatter.category || "Insights"}
              </span>
              <span>{post.readingTime || 1} min read</span>
            </div>
            <h2 className="mt-3">
              <Link href={`/${config.settings.blog_folder}/${post.slug}`}>
                {post.frontmatter.title}
              </Link>
            </h2>
            <p>
              {post.summary ||
                post.frontmatter.desc ||
                post.frontmatter.description}
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
