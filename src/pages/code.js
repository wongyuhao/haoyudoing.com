import React from 'react'
import {Card, Col} from 'react-bootstrap'
import CodeCard from '../components/CodeCard'

import {useStaticQuery, graphql } from 'gatsby'

export default  ()=>{
const {gcms}= useStaticQuery(graphql`
  query codeQuery {
    gcms {
      codes(orderBy: date_DESC) {
        projectName
        tags
        description
        thumbnail {
          url(transformation: {document: {output: {format: jpg}}})
        }
      }
      asset(where: {id: "ckewcndbk0wnc0188azh3u767"}) {
        id
        url
      }
      
    }
  }
  
`)

return(
  <div>
   <Card className='border-0 shadow '>
     <Card.Body className=' justify-content-between d-md-flex'>
      <h2 className='d-inline'><strong>Coding Projects</strong></h2>
      <h6 className='d-flex align-items-center pt-2'><em>Beep Boop. Some of my 1's and 0's</em></h6>
      </Card.Body>
   </Card>
   <Col className='px-0'>
  {
    gcms.codes.map(
      proj=>  
      <CodeCard
      key={proj.projectName}
      title={proj.projectName}
      md={proj.description}
      img={proj.thumbnail}
      none={gcms.asset.url}
      tags={proj.tags.values}
      source={proj.tags.source}
      demo={proj.tags.demo}
      />
    )

  }
   </Col>
   </div>
)
}