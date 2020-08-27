module.exports = {
  siteMetadata: {
    title: `Jack's Blog`,
    author: {
      name: `Jack Anderson`,
      summary: `Senior Software Engineer. Utah native, living near Greensboro, NC.`,
    },
    description: `A personal blog about technology and hobbies.`,
    siteUrl: `https://blog.jackanderson.dev`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          // {
          //   resolve: `gatsby-remark-images`,
          //   options: {
          //     maxWidth: 590,
          //   },
          // },
          // {
          //   resolve: `gatsby-remark-responsive-iframe`,
          //   options: {
          //     wrapperStyle: `margin-bottom: 1.0725rem`,
          //   },
          // },
          // `gatsby-remark-prismjs`,
          // `gatsby-remark-copy-linked-files`,
          // `gatsby-remark-smartypants`,
        ],
        defaultLayouts: `${__dirname}/src/templates/blog-post.tsx`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog`,
        short_name: `Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-theme-ui',
    // 'gatsby-plugin-mdx',
    `gatsby-plugin-graphql-codegen`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
