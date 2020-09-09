/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [

    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-manifest`,
    {
      resolve:`gatsby-source-graphql`,
      options:{
        typeName: 'GraphCMS',
        fieldName:'gcms',
        url:'https://api-ap-northeast-1.graphcms.com/v2/cke73dv0pgsmj01xid076hy4t/master'
      }
    },
   
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Haoyudoing`,
        short_name: `Hao`,
        start_url: `/`,
        icon:'src/images/logo.png'
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.js`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {

        path: `${__dirname}/src/pages/md-pages/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
   
  
  ]
}
