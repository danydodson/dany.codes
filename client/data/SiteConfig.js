const config = {
  siteTitle: "@danydodson | Dany Dodson | My Profile", // Site title.
  siteTitleShort: "@danydodson | Dany Dodson | @danydodson", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Dany Dodson | @danydodson", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://danycodes.netlify.app", // Domain of your website without pathPrefix.
  repo: "https://github.com/danydodson/dany.codes",
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Hi, I’m Dany.😎 I help people to make better world by good apps, I am Publisher, Trainer Developer, working on Enterprise and open source Technologies JavaScript frameworks (React Angular 2.x), I work with client side and server side javascript programming", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "@danydodson", // Title of the RSS feed
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  disqusShortname: "dany-codes", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  userName: "Dany Dodson", // Username to display in the author segment.
  userEmail: "danydodson@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "dany_dodson", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Midwest, USA", // User location to display in the author segment.
  userAvatar: "https://en.gravatar.com/userimage/62805797/de9073787b8f44890f332e259f2e1bbd.jpeg", // User avatar to display in the author segment.
  userDescription: "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // 
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/danydodson/dany.codes",
      iconClassName: "fa fa-github",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/dany_dodson",
      iconClassName: "fa fa-twitter",
    },
    {
      label: "Email",
      url: "mailto:danydodson@gmail.com",
      iconClassName: "fa fa-envelope",
    },
  ],
  copyright: "Copyright © 2020. Advanced User", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
