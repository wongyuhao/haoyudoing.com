import React from 'react'

import {Card, Image, CardGroup} from 'react-bootstrap'
import headshot from '../images/headshot-272px.jpg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faUniversity,faAddressCard} from '@fortawesome/free-solid-svg-icons'


export default ()=>(


<CardGroup className=' rounded bg-white shadow-lg' >
 <Card  className='col-md-3 text-center justify-content-center border-0 '>
   <Card.Body >
     <Image src={headshot} roundedCircle className='p-1' style={{width:'100%'}}/>
     <Card.Text className='pt-2 text-muted'><FontAwesomeIcon icon={faAddressCard}/> About Me</Card.Text>
   </Card.Body>
   
     
 </Card>
 <Card className='col-auto border-0 pt-0'>
   <Card.Body>
   <Card.Title>
     <strong>Yu Hao</strong> <light>Wong</light>
   </Card.Title>
   <Card.Subtitle className='mb-2'>
    <a href='https://goo.gl/maps/UNfAH9WjwdX9YwbY6' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faMapMarkerAlt}/> Kuala Lumpur, Malaysia</a>
   </Card.Subtitle>
   <Card.Subtitle className='mb-2 '>
    <a href='https://www.cs.washington.edu/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faUniversity}/> UW CSE 2024</a>
   </Card.Subtitle>
   

   <Card.Text>
     
     Hi there! My name is Hao and I'm a Computer Science student at the <strong style={{color:'#4b2e83'}}>University of Washington</strong>! <br/>
     I'm a huge fan of technology that's not only aesthically pleasing but also functionally intuitive.<br/>
     <strong><em>haoyudoing.com</em></strong> is my way of showcasing my latest projects and endevours to the world.
     <br/><br/>
   
     
     Outisde of tech, my interests include sports, food, maker culture, and speed <small>(Both in Formula 1 and swimming)</small>. 
     I’m constantly on the lookout for new experiences and opportunities, as well as the chance to connect with new people!
   </Card.Text>
   </Card.Body>
 </Card>

 </CardGroup>

)