module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "agencies", // The name of directory that contains your authors.
  blogAuthorId: "okb", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Oregon Knowledge Bank", // Site title.
  siteTitleAlt: "OKB Local Public Safety Resource", // Alternative site title for SEO.
  siteLogo:
    "/logos/logo-1024.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://oregonkb.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "Local public safety programs and resources.", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "/images/blog-cover.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "OKB", // The author name used in the `R`SS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 25, // The max number of posts per page.
  googleAnalyticsID: "UA-115720201-1", // GA tracking ID.
  siteSocialUrls: [
    "https://github.com/alexpichel/okb2",
    "https://twitter.com/ORKnowledgeBank",
    "mailto:okb@oregon.gov"
  ],
  postDefaultCategoryID: "Policing", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/alexpichel/okb2",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "Twitter",
      url: "https://twitter.com/ORKnowledgeBank",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:okb@oregon.gov",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Oregon Criminal Justice Commission" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
