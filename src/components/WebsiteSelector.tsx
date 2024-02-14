"use client";

import { Website, getWebsiteName } from "@/lib/website";

export default function WebsiteSelector({ website }: { website: Website }) {
  return (
    <div
      style={{
        padding: "10px",
        borderBottom: "1px solid #e2e2e2",
      }}
    >
      {Object.values(Website)
        .map((item) => {
          return { text: getWebsiteName(item), code: item };
        })
        .map((item) => (
          <a
            key={item.code}
            href={`/${item.code}/1`}
            style={{
              marginRight: "10px",
              backgroundColor: website === item.code ? "#333344" : "white",
              color: website === item.code ? "white" : "black",
              display: "inline-block",
              paddingLeft: "8px",
              paddingRight: "8px",
              borderRadius: "4px",
            }}
          >
            {item.text}
          </a>
        ))}
    </div>
  );
}
