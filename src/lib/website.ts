export enum Website {
  /**
   * 全部
   */
  all = "all",

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

  /**
   * 虎扑篮球
   */
  hupu_basketball = "hupu_basketball",

  /**
   * 虎扑足球
   */
  hupu_soccer = "hupu_soccer",

  /**
   * 虎扑步行街
   */
  hupu_bbs = "hupu_bbs",

  /**
   * 腾讯热门问答
   */
  qq_qa = "qq_qa",
}

export const getWebsiteName = (website: Website): string => {
  if (website === Website.all) return "全部";
  if (website === Website.weibo_hot) return "微博热搜";
  if (website === Website.weibo_entertainment) return "微博文娱";
  if (website === Website.weibo_news) return "微博要闻";
  if (website === Website.weibo_topic) return "微博话题";
  if (website === Website.zhihu) return "知乎";
  if (website === Website.hupu_basketball) return "虎扑篮球";
  if (website === Website.hupu_soccer) return "虎扑足球";
  if (website === Website.hupu_bbs) return "虎扑步行街";
  if (website === Website.qq_qa) return "腾讯热门问答";
  return "";
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
  } else if (website === Website.hupu_basketball) {
    return symbol;
  } else if (website === Website.hupu_soccer) {
    return symbol;
  } else if (website === Website.hupu_bbs) {
    return symbol;
  } else if (website === Website.qq_qa) {
    return `https://new.qq.com/rain/a/${symbol}`;
  }

  return "";
};

export const isWebsite = (website: string) => {
  return Object.values(Website).includes(website as Website);
};
