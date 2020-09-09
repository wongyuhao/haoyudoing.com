import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'


import {Card, Image, CardGroup} from 'react-bootstrap'
import headshot from '../images/headshot-272px.jpg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faUniversity,faAddressCard} from '@fortawesome/free-solid-svg-icons'


export default (  )=>{
  const data = useStaticQuery(graphql`
    query AboutQuery {
      gcms {
        abouts {
          content{
            html
            markdown
          }
        }
      }
    }
  `)
 const about = data.gcms.abouts[0].content.html;
return(
<CardGroup className=' rounded bg-white shadow-lg' >
 <Card  className='col-md-3 text-center justify-content-center border-0 '>
   <Card.Body >
     <Image src={headshot} roundedCircle className='p-1' style={{width:'100%', maxWidth:'200px'}}/>
     <Card.Text className='pt-2 text-muted'><FontAwesomeIcon icon={faAddressCard}/> About Me</Card.Text>
   </Card.Body>
   
     
 </Card>
 <Card className='col-auto border-0 pt-0'>
   <Card.Body>
   <Card.Title>
     <strong>Yu Hao</strong> Wong
   </Card.Title>
   <Card.Subtitle className='mb-2'>
    <a href='https://goo.gl/maps/UNfAH9WjwdX9YwbY6' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faMapMarkerAlt}/> Kuala Lumpur, Malaysia</a>
   </Card.Subtitle>
   <Card.Subtitle className='mb-2 '>
    <a href='https://www.cs.washington.edu/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faUniversity}/> UW CSE 2024</a>
   </Card.Subtitle>
   

   <Card.Text dangerouslySetInnerHTML={{__html: about}} >
       
   </Card.Text>
   </Card.Body>
 </Card>

 </CardGroup>
)
}