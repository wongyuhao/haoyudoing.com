import React from 'react'
import {Card, Col} from 'react-bootstrap'
import CodeCard from '../components/CodeCard'

import {graphql} from 'gatsby'


export default  ({
  data: {
    allMarkdownRemark: { edges },
  }
})=>(
  <div>
   <Card className='border-0 shadow'>
     <Card.Body>
      <h1 style={{fontFamily:'monospace',fontWeight:'bold'}}>Code</h1>
      <p style={{fontFamily:'monospace'}}> Some of my 1's and 0's</p>
      </Card.Body>
   </Card>
   <Col className='px-0'>
  {
    edges.map(
      edge=>  
      <CodeCard
      title={edge.node.frontmatter.title}
      html={edge.node.html}
      fluid={edge.node.frontmatter.thumbnail.childImageSharp.fluid}
      tags={edge.node.frontmatter.tags}
      source={edge.node.frontmatter.source}
      demo={edge.node.frontmatter.demo}
      />
    )

  }
   </Col>
   </div>
)

export const pageQuery = graphql`
  query {
    gcms{
      codes{
       id
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] },filter: { frontmatter: { category: { eq: "code" } } }) {
      
      edges {
        node {
          id
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            tags
            source
            demo
            thumbnail{
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            
          }
        }
      }
    }
  }
`