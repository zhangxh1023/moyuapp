"use client";

import { Website, getWebsiteName } from "@/lib/website";

export default function WebsiteSelector({ website }: { website: Website }) {
  return (
    <div>
      {Object.values(Website)
        .map((item) => {
          return { text: getWebsiteName(item), code: item };
        })
        .map((item) => (
          <a
            key={item.code}
            href={`/${item.code}/1`}
            style={{
              marginRight: "20px",
              backgroundColor: website === item.code ? "#333344" : "white",
              color: website === item.code ? "white" : "black",
            }}
            className="inline-block px-2 rounded"
          >
            {item.text}
          </a>
        ))}
    </div>
  );
}
