import React from 'react'


import WhatsNew from '../components/WhatsNew'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKeyboard, faPaperPlane,faCode, faBoxOpen} from '@fortawesome/free-solid-svg-icons'

import {Link} from 'gatsby'
import { Card, CardGroup,ListGroup} from 'react-bootstrap'

import styled from 'styled-components'


const StyledLink = styled(Link)`
 &{
  padding:1.6rem 1rem;
  font-weight: bold;
  color:black;
 }

 &:focus{
   background:black;
   color:white;
 }

 &:hover{
   text-decoration:none;
   color:white;
   background:#202020;
 }

`;


export default () =>(
 <CardGroup className='h-100 mt-3 pl-0 shadow-lg bg-white rounded ' >
   
    <Card className=' border-0 rounded' >
      
     <Card.Body className='pb-0'>

       <Card.Title className='mb-1'>
        <strong>What's New?</strong>
      </Card.Title>

      <WhatsNew />
 
      </Card.Body>
    </Card>
  

    <Card className='border-0 p-0 py-1 rounded'>
      <Card.Body className='col-auto'>
      <ListGroup>
           <ListGroup.Item as={StyledLink} to='/code'><FontAwesomeIcon icon={faCode}/> Code</ListGroup.Item>
          
           <ListGroup.Item as={StyledLink} to='/mk'><FontAwesomeIcon icon={faKeyboard}/> Mechanical Keyboards</ListGroup.Item>
           
           <ListGroup.Item as={StyledLink} to='/contact'><FontAwesomeIcon icon={faPaperPlane}/> Get in Touch</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
 
  </CardGroup>
  
 

 
)
