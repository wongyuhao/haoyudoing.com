exports.createPages = async({graphql, actions:{createPage}})=>{
  const {data: {gcms: {mkbuildlogs}}} = await graphql(`
  {
    gcms{
      mkbuildlogs{
        id
        slug
      }
    }
  }
  
  `)

  mkbuildlogs.forEach(
    ({id,slug})=> createPage({
      path: `/mk/${slug}`,
      component: require.resolve('./src/templates/MkPage.js'),
      context:{
        id
      }
    })
  
  
  
  )
}