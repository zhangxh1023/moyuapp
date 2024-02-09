import { queryHotTop } from "@/lib/fetch-supabase";
import { Website, getWebsiteName, isWebsite } from "@/lib/website";
import { notFound } from "next/navigation";

export default async function WebsitePage({
  params,
}: {
  params: { page: string; website: string };
}) {
  if (!isWebsite(params.website) || parseInt(params.page) < 1) {
    notFound();
  }
  const ret = await queryHotTop(
    params.website as Website,
    parseInt(params.page),
    20
  );

  return (
    <>
      {Object.values(Website)
        .map((item) => {
          return { text: getWebsiteName(item), code: item };
        })
        .map((item) => (
          <a
            key={item.code}
            href={`/${item.code}/1`}
            style={{ marginRight: "20px" }}
          >
            {item.text}
          </a>
        ))}
      <div>
        <a href={`/${params.website}/${parseInt(params.page) - 1}`}>上一页</a>
        <a href={`/${params.website}/${parseInt(params.page) + 1}`}>下一页</a>
      </div>
      {ret.map((item, index) => {
        return (
          <div key={index} style={{ marginTop: "20px" }}>
            <a href={item.uri} target="_blank">
              {item.title}
            </a>
            <div style={{ fontSize: "13px", color: "gray" }}>
              {item.summary}
            </div>
          </div>
        );
      })}
    </>
  );
}
