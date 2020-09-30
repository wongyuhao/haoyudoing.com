import React from 'react'
import {Card, Container, Row, Col} from 'react-bootstrap'
import {useStaticQuery, graphql, navigate, Link} from 'gatsby'
import styled from 'styled-components'

const MkHeader = styled.div`
&{
  display: inline-flex; 
  flex-direction: row;
  width:100%;
  justify-content: space-between;
  align-items: flex-end;

}

@media(max-width:850px){
  &{

    flex-direction:column;
    align-items:start;
    text-align:left;
  }
}
`

export default ()=>{
  const {gcms:{mkbuildlogs}}= useStaticQuery(graphql`
  query mkQuery {
    gcms {
      mkbuildlogs {
        id
        slug
        boardName
      }
    }
  }
  
`)
  
  return(
  <>

    <Card className='border-0 shadow '>
     <Card.Body className='d-flex flex-column '>
      <MkHeader>
        <p style={{fontWeight:'bold', fontSize:'1.7em', margin:0}}>Mechanical Keyboards</p>
        <p style={{fontStyle:'italic'}} className='mb-1 pb-1 align-items-end'>a.k.a. that hobby I've given up on explaining</p>
      </MkHeader>
      <hr className='w-100 h-100'/>
      {mkbuildlogs.map(
        mk=> <Link to={`/mk/${mk.slug}`}>{mk.boardName}</Link>
      )}
      </Card.Body>
   </Card>

  </>
)
}