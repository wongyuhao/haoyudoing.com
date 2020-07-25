import React from "react"
import { graphql } from "gatsby"

import {Card} from 'react-bootstrap'

const Template = ({data, })=>{
  const { markdownRemark } = data 
  const { frontmatter, html } = markdownRemark
  return (
    <Card>
       
        <Card.Body>
          
         <Card.Title>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        </Card.Title>

        <hr/>
        <Card.Text dangerouslySetInnerHTML={{ __html: html }}>

        </Card.Text>
        </Card.Body>
      
    </Card>
  )
}

export default Template
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`