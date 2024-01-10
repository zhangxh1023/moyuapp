import { verbose } from 'sqlite3'
import { Website } from './website';

export type ListContent = {
  id: number;
  title: string;
  website: Website;
  createTime: number;
  updateTime: number;
  hotRankAchieved: number;
}

export const getListContent = (website: Website, pageNumber: number, pageSize: number): Promise<ListContent[]> => {
  const ret: ListContent[] = [];
  for (let i = 0; i < 20; i++) {
    ret.push({
      id: i + 1,
      title: `${i + 1} 网友是这样的，一边说羡慕欧美女星自然老去的风姿，一边又对国内女星的老态指手画脚，她就是没有做医美罢了`,
      website: Website.weibo,
      createTime: new Date().getTime(),
      updateTime: new Date().getTime(),
      hotRankAchieved: 1,
    });
  }
  return Promise.resolve(ret);
}
