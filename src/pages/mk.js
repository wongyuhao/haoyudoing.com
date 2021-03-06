import React from 'react'
import {Card} from 'react-bootstrap'
import {useStaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'
import MkCard from '../components/MkCard';

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
      mkbuildlogs (orderBy: buildDate_DESC){
        id
        slug
        boardName
        description
        displayImage {
          url
        }
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
        <a
          target='_blank' rel="noopener noreferrer" 
          href="https://media.graphcms.com/jCGbapecRKGI6S9zwdF8">
          Read this article about my work here!
        </a>
      <hr className='w-100 h-100'/>
      {mkbuildlogs.map(
        mk=> <MkCard key={mk.id} slug={mk.slug} boardName={mk.boardName} imgsrc={mk.displayImage.url} desc={mk.description}/>
      )}
      </Card.Body>
   </Card>

  </>
)
}
