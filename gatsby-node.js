exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/codeTemplate.js`)
  const mkPostTemplate = require.resolve(`./src/templates/mkTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if(node.frontmatter.category==='code'){
      createPage({
        path: node.frontmatter.slug,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        }
      })
    }else{
      createPage({
        path: node.frontmatter.slug,
        component: mkPostTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    }

  })
}