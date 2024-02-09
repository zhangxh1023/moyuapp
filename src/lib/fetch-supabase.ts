"use server";

import { Website, getUriBySymbol } from "./website";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_KEY ?? ""
);

export type HotTopItem = {
  id: number;
  website: Website;
  latest_rank: number;
  best_rank: number;
  title: string;
  symbol: string;
  summary: string;
  created_at: number;
  update_at: number;
  uri: string;
};

export const queryHotTop = async (
  website: Website,
  pageNumber: number,
  pageSize: number
): Promise<HotTopItem[]> => {
  let hotTops;
  if (website === Website.all) {
    hotTops = await supabase
      .from("hot_top")
      .select("*")
      .range((pageNumber - 1) * pageSize, pageNumber * pageSize - 1)
      .order("update_at", { ascending: false });
  } else {
    hotTops = await supabase
      .from("hot_top")
      .select("*")
      .eq("website", website)
      .range((pageNumber - 1) * pageSize, pageNumber * pageSize - 1)
      .order("update_at", { ascending: false });
  }

  const ret: HotTopItem[] = hotTops.data ?? [];
  for (const item of ret) {
    item.uri = getUriBySymbol(item.website, item.symbol);
  }

  return ret;
};

export const fetchCache = 'force-no-store';
