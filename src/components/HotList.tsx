import { HotTopItem } from "@/lib/fetch-supabase";
import { getWebsiteName } from "@/lib/website";
import dayjs from "dayjs";
import styles from "./HotList.module.css";

export default function HotLlist({ list }: { list: HotTopItem[] }) {
  return (
    <>
      {list.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              padding: "10px",
              borderBottom: "1px solid #e2e2e2",
            }}
          >
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

            <div>
              <span className={styles.tipItem} title="最高热搜排行">
                {item.best_rank}
              </span>
              <span className={styles.tipItem} title="最后热搜排行">
                {item.latest_rank}
              </span>
              <span className={styles.tipItem} title="第一次上热搜时间">
                {dayjs(item.created_at).format("YYYY-MM-DD HH:mm:ss")}
              </span>
              <span className={styles.tipItem} title="更新时间">
                {dayjs(item.update_at).format("YYYY-MM-DD HH:mm:ss")}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
}
