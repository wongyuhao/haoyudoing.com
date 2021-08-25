import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'
import ReactMarkdown from 'react-markdown'

import {Card, Image, CardGroup} from 'react-bootstrap'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faUniversity,faAddressCard,faHome, faEnvelope} from '@fortawesome/free-solid-svg-icons'


export default ()=>{
  const data = useStaticQuery(graphql`
    query AboutQuery {
      gcms {
        abouts (last: 1){
          content
        }
        assets(where: {fileName: "headshot.JPG.png"}) {
          id
          url
        }
      }
    }
  `)
return(
<CardGroup className=' rounded bg-white shadow-lg' >
 <Card  className='col-md-3 text-center justify-content-center border-0 '>
   <Card.Body >
     <Image src={data.gcms.assets[0].url} roundedCircle className='p-1' style={{width:'100%', maxWidth:'200px'}}/>
     <Card.Text className='pt-2 text-muted'><FontAwesomeIcon icon={faAddressCard}/> About Me</Card.Text>
     
   </Card.Body>
   
     
 </Card>
 <Card className='col-auto border-0'>
   <Card.Body >
   <Card.Title>
     <strong>Yu Hao</strong> Wong
   </Card.Title>
   <Card.Subtitle className='text-muted' style={{fontFamily: 'monospace'}}>
     <FontAwesomeIcon icon={faEnvelope}/> wongyh(at)uw.edu
  </Card.Subtitle>
   
  <Card.Subtitle className='mb-2 mt-3'>
    <a href='https://www.google.com/maps/place/Seattle,+WA/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faMapMarkerAlt}/> Seattle, WA</a>
   </Card.Subtitle>
   <Card.Subtitle className='mb-2 '>
    <a href='https://www.cs.washington.edu/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faUniversity}/> UW CSE 2024</a>
   </Card.Subtitle>
  <Card.Subtitle className='mb-2'>
    <a href='https://goo.gl/maps/UNfAH9WjwdX9YwbY6' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faHome}/> Kuala Lumpur, Malaysia</a>
   </Card.Subtitle>
   
   

   <ReactMarkdown source={data.gcms.abouts[0].content}/>
   </Card.Body>
 </Card>

 </CardGroup>
)
}
