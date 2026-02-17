/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://yss007895-code.github.io/stylemedaily-web',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }, { userAgent: '*', disallow: '/api/' }],
  },
};
