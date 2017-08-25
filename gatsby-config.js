module.exports = {
  siteMetadata: {
    title: `Gatsby with Contentful`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `uj7lky3by3ba`,
        accessToken: `59eb0ae6fcfade2242138019487c174dec444fc87d4c9c46931f9b7710949cfe`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}