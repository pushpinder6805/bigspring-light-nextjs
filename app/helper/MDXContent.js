import shortcodes from "@layouts/shortcodes/all";
import "highlight.js/styles/atom-one-dark.css";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

const AccessibleCode = ({ className, children, ...props }) => (
  <code
    {...props}
    className={className}
    tabIndex={className?.includes("hljs") ? 0 : undefined}
  >
    {children}
  </code>
);
const AccessibleTable = ({ children, ...props }) => (
  <table {...props} tabIndex={0} aria-label="Article table">
    {children}
  </table>
);

const MDXContent = ({ content }) => {
  const mdxOptions = {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  };

  return (
    <>
      {/* @ts-ignore */}
      <MDXRemote
        source={content}
        components={{
          ...shortcodes,
          code: AccessibleCode,
          table: AccessibleTable,
        }}
        options={{ mdxOptions }}
      />
    </>
  );
};

export default MDXContent;
