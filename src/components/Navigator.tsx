"use client";

export default function Navigator({
  website,
  currPage,
  hasNextPage,
}: {
  website: string;
  currPage: number;
  hasNextPage: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "1px solid #e2e2e2",
      }}
    >
      <a
        style={{
          color: currPage > 1 ? "black" : "#e2e2e2",
          cursor: currPage === 1 ? "default" : "pointer",
        }}
        href={currPage > 1 ? `/${website}/${currPage - 1}` : "#"}
        onClick={(e) => {
          if (currPage <= 1) {
            e.preventDefault();
          }
        }}
      >
        上一页
      </a>
      <a
        style={{
          color: hasNextPage ? "black" : "#e2e2e2",
          cursor: !hasNextPage ? "default" : "pointer",
        }}
        href={hasNextPage ? `/${website}/${currPage + 1}` : "#"}
        onClick={(e) => {
          if (!hasNextPage) {
            e.preventDefault();
          }
        }}
      >
        下一页
      </a>
    </div>
  );
}
