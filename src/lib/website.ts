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

  /**
   * 36kr快讯热点
   */
  kr36_newsflashes_hot = "kr36_newsflashes_hot",

  /**
   * 36kr快讯股市
   */
  kr36_newsflashes_stock = "kr36_newsflashes_stock",

  /**
   * 36kr快讯公司
   */
  kr36_newsflashes_corp = "kr36_newsflashes_corp",

  /**
   * 36kr快讯宏观
   */
  kr36_newsflashes_macro = "kr36_newsflashes_macro",

  /**
   * 豆瓣话题趋势
   */
  douban_topic = "douban_topic",
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
  if (website === Website.kr36_newsflashes_hot) return "36kr快讯热点";
  if (website === Website.kr36_newsflashes_stock) return "36kr快讯股市";
  if (website === Website.kr36_newsflashes_corp) return "36kr快讯公司";
  if (website === Website.kr36_newsflashes_macro) return "36kr快讯宏观";
  if (website === Website.douban_topic) return "豆瓣话题趋势";
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
  } else if (website === Website.kr36_newsflashes_hot) {
    return `https://36kr.com${symbol}`;
  } else if (website === Website.kr36_newsflashes_stock) {
    return `https://36kr.com${symbol}`;
  } else if (website === Website.kr36_newsflashes_corp) {
    return `https://36kr.com${symbol}`;
  } else if (website === Website.kr36_newsflashes_macro) {
    return `https://36kr.com${symbol}`;
  } else if (website === Website.douban_topic) {
    return symbol;
  }

  return "";
};

export const isWebsite = (website: string) => {
  return Object.values(Website).includes(website as Website);
};
