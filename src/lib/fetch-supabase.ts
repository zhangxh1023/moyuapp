"use server";

import { Website, getUrlBySymbol } from './website';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL ?? '', process.env.SUPABASE_KEY ?? '');

export type ListContent = {
  id: number;
  title: string;
  website: Website;
  createTime: number;
  updateTime: number;
  bestRank: number;
  latestRank: number;
  url: string;
}

export const getListContent = async (website: Website, pageNumber: number, pageSize: number): Promise<ListContent[]> => {
  const ret: ListContent[] = [];

  const hotTops = await supabase
    .from('hot_top')
    .select('*')
    .eq('website', website)
    .range((pageNumber - 1) * pageSize, (pageNumber * pageSize) - 1)
    .order('update_at', { ascending: false });

  for (const hotTop of hotTops.data ?? []) {
    ret.push({
      id: hotTop.id,
      title: hotTop.title,
      website: website,
      createTime: hotTop.create_at,
      updateTime: hotTop.update_at,
      bestRank: hotTop.best_rank,
      latestRank: hotTop.latest_rank,
      url: getUrlBySymbol(website, hotTop.symbol ?? ''),
    });
  }

  return Promise.resolve(ret);
}
