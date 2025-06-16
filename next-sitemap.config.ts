import type { IConfig } from 'next-sitemap';

module.exports = {
  siteUrl: 'https://orlean.uz',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: true,
  exclude: ['/404', '/500', '/api/*'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://orlean.uz/sitemap.xml'],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/admin/*'],
      },
    ],
  },
  transform: async (config: IConfig, path: string) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
