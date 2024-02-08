export enum Website {
  /**
   * 微博热搜
   */
  weibo_hot = "weibo_hot",

  /**
   * 微博文娱
   */
  weibo_entertainment = "weibo_entertainment",

  /**
   * 微博要闻
   */
  weibo_news = "weibo_news",

  /**
   * 微博话题
   */
  weibo_topic = "weibo_topic",

  /**
   * 知乎
   */
  zhihu = "zhihu",
}

export const getWebsiteName = (website: Website): string => {
  if (website === Website.weibo_hot) return "微博热搜";
  if (website === Website.weibo_entertainment) return "微博文娱";
  if (website === Website.weibo_news) return "微博要闻";
  if (website === Website.weibo_topic) return "微博话题";
  if (website === Website.zhihu) return "知乎";
  return "";
};

export const isWebsite = (website: string) => {
  return Object.values(Website).includes(website as Website);
};

export const getUriBySymbol = (website: Website, symbol: string): string => {
  if (website === Website.weibo_hot) {
    return `https://s.weibo.com/weibo?q=${encodeURIComponent(symbol)}`;
  } else if (website === Website.weibo_entertainment) {
    return `https://s.weibo.com/weibo?q=${encodeURIComponent(symbol)}`;
  } else if (website === Website.weibo_news) {
    return `https://s.weibo.com/weibo?q=${encodeURIComponent(symbol)}`;
  } else if (website === Website.weibo_topic) {
    return `https://s.weibo.com/weibo?q=${encodeURIComponent(symbol)}`;
  } else if (website === Website.zhihu) {
    return `https://www.zhihu.com/question/${symbol}`;
  }

  return "";
};
