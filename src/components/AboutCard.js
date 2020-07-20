import React from 'react'

import {Container,Card, Image, Row, Col, CardGroup} from 'react-bootstrap'
import headshot from '../images/headshot-272px.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faUniversity} from '@fortawesome/free-solid-svg-icons'

import '../styles/about.scss'

export default ()=>(


<CardGroup>
 <Card  className='col-md-3 text-center justify-content-center'>
   <Card.Body >
     <Image src={headshot} roundedCircle className='headshot'/>
   </Card.Body>
     
 </Card>
 <Card className='col-auto'>
   <Card.Body>
   <Card.Title>
     <strong>Yu Hao</strong> <light>Wong</light>
   </Card.Title>
   <Card.Subtitle className='mb-2 text-muted'>
     <FontAwesomeIcon icon={faMapMarkerAlt}/> Kuala Lumpur, Malaysia
   </Card.Subtitle>
   <Card.Subtitle className='mb-2 text-muted'>
   <FontAwesomeIcon icon={faUniversity}/> UW CSE 2024
   </Card.Subtitle>
   <Card.Text>
     
     Hi there! My name is Hao and I'm a Computer Science student at the University of Washington!
     <br/>
     <br/>
     I'm fascinated with putting things together, tinkering and find new projects to take on. <br/>
     Be it software or hardware, I hope to use this site as a platform to showcase my creations.
     <br/>
     <br/>
     Aside from being a tech fanatic, I enjoy sports, food, and socializing in general.
     I love activities that foster community and spirit, as well as meeting new people! <br/>
     
   </Card.Text>
   </Card.Body>
 </Card>

 </CardGroup>

)