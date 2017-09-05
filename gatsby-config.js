require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Gatsby with Contentful',
  },
  pathPrefix: '/gatsby-contentful-static-test',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACEID,
        accessToken: process.env.CONTENTFUL_ACCESSTOKEN
      }
    },
    'gatsby-transformer-remark'
  ]
}