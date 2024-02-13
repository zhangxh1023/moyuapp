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
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {currPage > 1 ? (
        <a href={`/${website}/${currPage - 1}`}>上一页</a>
      ) : (
        <a />
      )}
      {hasNextPage ? <a href={`/${website}/${currPage + 1}`}>下一页</a> : <a />}
    </div>
  );
}
