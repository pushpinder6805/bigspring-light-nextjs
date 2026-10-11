"use client";

import { useMemo, useState } from "react";
import Posts from "@partials/Posts";

export default function BlogExplorer({ posts, currentPosts, children }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All topics");
  const [limit, setLimit] = useState(12);
  const categories = useMemo(
    () => [
      "All topics",
      ...new Set(posts.map((post) => post.frontmatter.category || "Insights")),
    ],
    [posts],
  );
  const active = query.trim() !== "" || category !== "All topics";
  const matches = useMemo(
    () =>
      posts.filter((post) => {
        const matchesCategory =
          category === "All topics" ||
          (post.frontmatter.category || "Insights") === category;
        const text =
          `${post.frontmatter.title} ${post.summary} ${post.frontmatter.category || "Insights"}`.toLowerCase();
        return matchesCategory && text.includes(query.trim().toLowerCase());
      }),
    [posts, query, category],
  );
  const reset = () => {
    setQuery("");
    setCategory("All topics");
    setLimit(12);
  };

  return (
    <div className="blog-explorer">
      <div className="blog-toolbar">
        <div className="blog-library-label">
          <strong>{posts.length} articles</strong>
          <span>Practical ideas for your next build</span>
        </div>
        <div className="blog-search">
          <label htmlFor="article-search">Search the library</label>
          <input
            id="article-search"
            type="search"
            placeholder="Search APIs, mobile apps, Docker…"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setLimit(12);
            }}
          />
        </div>
      </div>
      <div
        className="blog-categories"
        role="group"
        aria-label="Filter articles by topic"
      >
        {categories.map((topic) => (
          <button
            key={topic}
            type="button"
            aria-pressed={category === topic}
            onClick={() => {
              setCategory(topic);
              setLimit(12);
            }}
          >
            {topic}
          </button>
        ))}
      </div>
      <p className="blog-results" role="status" aria-live="polite">
        {active
          ? `${matches.length} ${matches.length === 1 ? "article" : "articles"} found`
          : "Explore the latest articles, or choose a topic to browse the entire library."}
      </p>
      {active && matches.length === 0 ? (
        <div className="empty-state">
          <h2>No articles found.</h2>
          <p>Try a broader search or choose another topic.</p>
          <button className="btn btn-primary" type="button" onClick={reset}>
            Clear filters
          </button>
        </div>
      ) : (
        <Posts posts={active ? matches.slice(0, limit) : currentPosts} />
      )}
      {active && matches.length > limit && (
        <div className="blog-load-more">
          <button
            className="btn btn-outline"
            type="button"
            onClick={() => setLimit((value) => value + 12)}
          >
            Show more articles
          </button>
          <span>
            Showing {Math.min(limit, matches.length)} of {matches.length}
          </span>
        </div>
      )}
      {!active && children}
    </div>
  );
}
