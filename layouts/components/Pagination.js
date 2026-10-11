import Link from "next/link";
export default function Pagination({ section, currentPage, totalPages }) {
  if (totalPages <= 1) return null;
  const url = (page) =>
    page === 1
      ? `/${section || ""}`
      : `/${section ? section + "/" : ""}page/${page}`;
  return (
    <nav className="pagination" aria-label="Blog pagination">
      {currentPage > 1 ? (
        <Link href={url(currentPage - 1)} aria-label="Previous page">
          ←
        </Link>
      ) : (
        <span aria-disabled="true" aria-label="Previous page">
          ←
        </span>
      )}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) =>
        page === currentPage ? (
          <span key={page} aria-current="page" className="current-page">
            {page}
          </span>
        ) : (
          <Link key={page} href={url(page)} aria-label={`Page ${page}`}>
            {page}
          </Link>
        ),
      )}
      {currentPage < totalPages ? (
        <Link href={url(currentPage + 1)} aria-label="Next page">
          →
        </Link>
      ) : (
        <span aria-disabled="true" aria-label="Next page">
          →
        </span>
      )}
    </nav>
  );
}
