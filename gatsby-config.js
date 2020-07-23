/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [

    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
  
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
   
  
  ]
}
