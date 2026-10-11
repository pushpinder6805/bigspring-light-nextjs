import Pagination from "@components/Pagination";
import config from "@config/config.json";
import SeoMeta from "@layouts/SeoMeta";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { markdownify } from "@lib/utils/textConverter";
import BlogExplorer from "@components/BlogExplorer";
import { plainify } from "@lib/utils/textConverter";
import { notFound } from "next/navigation";
const { blog_folder } = config.settings;

// blog pagination
const BlogPagination = async ({ params }) => {
  //
  const currentPage = parseInt((params && params.slug) || 1);
  const { pagination } = config.settings;
  const posts = await getSinglePage(`content/${blog_folder}`).sort(
    (post1, post2) =>
      new Date(post2.frontmatter.date) - new Date(post1.frontmatter.date),
  );
  const postIndex = await getListPage(`content/${blog_folder}/_index.md`);
  //
  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const totalPages = Math.ceil(posts.length / pagination);
  if (
    !Number.isInteger(currentPage) ||
    currentPage < 1 ||
    (totalPages > 0 && currentPage > totalPages)
  )
    notFound();
  const summaries = posts.map((post) => ({
    slug: post.slug,
    frontmatter: {
      title: post.frontmatter.title,
      image: post.frontmatter.image || null,
      category: post.frontmatter.category || "Insights",
    },
    summary:
      post.frontmatter.desc ||
      post.frontmatter.description ||
      plainify(post.content).slice(0, Number(config.settings.summary_length)),
    readingTime: Math.max(
      1,
      Math.ceil(plainify(post.content).split(/\s+/).length / 220),
    ),
  }));
  const currentPosts = summaries.slice(indexOfFirstPost, indexOfLastPost);
  const { frontmatter } = postIndex;
  const { title } = frontmatter;

  return (
    <>
      <SeoMeta title={title} description={frontmatter.description} />
      <section className="section">
        <div className="container">
          <div className="page-heading">
            <span className="eyebrow">IDEAS & INSIGHTS</span>
            {markdownify(title, "h1")}
            <p>
              Guides to building better websites, applications, and connected
              products. Written for curious teams and ambitious businesses.
            </p>
          </div>
          <BlogExplorer posts={summaries} currentPosts={currentPosts}>
            <Pagination
              section={blog_folder}
              totalPages={totalPages}
              currentPage={currentPage}
            />
          </BlogExplorer>
        </div>
      </section>
    </>
  );
};

export default BlogPagination;

export async function generateStaticParams() {
  const getAllSlug = await getSinglePage(`content/${blog_folder}`);
  const allSlug = getAllSlug.map((item) => item.slug);
  const { pagination } = config.settings;
  const totalPages = Math.ceil(allSlug.length / pagination);
  let paths = [];

  for (let i = 1; i < totalPages; i++) {
    paths.push({
      slug: (i + 1).toString(),
    });
  }

  return paths;
}
