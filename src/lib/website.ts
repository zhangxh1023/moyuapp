export enum Website {
  weibo = 'weibo',
};

export const getWebsiteByCode = (code: string): Website | null => {
  for (const key in Website) {
    if (Website[key as keyof typeof Website] === code) {
      return Website[key as keyof typeof Website];
    }
  }
  return null;
}

export const getIconNameByWebsite = (website: Website): string | undefined => {
  return Website[website as keyof typeof Website];
}

export const getUrlBySymbol = (website: Website, symbol: string): string => {
  if (website === Website.weibo) {
    return `https://s.weibo.com/weibo?q=${encodeURIComponent(symbol)}`;
  }

  return '';
}
