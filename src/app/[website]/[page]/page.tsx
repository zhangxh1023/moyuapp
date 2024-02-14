import Navigator from "@/components/Navigator";
import WebsiteSelector from "@/components/WebsiteSelector";
import { queryHotTop } from "@/lib/fetch-supabase";
import { Website, getWebsiteName, isWebsite } from "@/lib/website";
import { notFound } from "next/navigation";

const PAGE_SIZE = 20;

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
    PAGE_SIZE
  );

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "70%",
        minWidth: "600px",
        margin: "auto",
        padding: "24px",
        boxShadow:
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        borderRadius: "4px",
      }}
    >
      <WebsiteSelector website={params.website as Website} />

      <Navigator
        website={params.website as Website}
        currPage={parseInt(params.page)}
        hasNextPage={ret.length === PAGE_SIZE}
      />
      {ret.map((item, index) => {
        return (
          <div key={index} style={{ marginTop: "20px" }}>
            <span
              style={{
                backgroundColor: "#d1d2d5",
                borderRadius: "4px",
                marginRight: "4px",
                paddingLeft: "8px",
                paddingRight: "8px",
                display: "inline-block",
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              {getWebsiteName(item.website)}
            </span>
            <a href={item.uri} target="_blank">
              {item.title}
            </a>
            <div style={{ fontSize: "13px", color: "gray" }}>
              {item.summary}
            </div>
          </div>
        );
      })}
    </div>
  );
}
