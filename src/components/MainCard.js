import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKeyboard, faPaperPlane,faCode, faBoxOpen} from '@fortawesome/free-solid-svg-icons'

import {Link} from 'gatsby'
import { Card, CardGroup,ListGroup} from 'react-bootstrap'

import styled from 'styled-components'

const StyledLink = styled(Link)`
 &{
  padding:1rem 1rem;
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
 <CardGroup className='h-100  mt-3 pl-0 shadow-lg bg-white rounded ' >
   
    <Card className=' border-0 rounded'>
      
     <Card.Body>

       <Card.Title>
        <strong>What's New?</strong>
      </Card.Title>

      <Card.Text>
         We are currently migrating from our old site, which you can visit <a href="https://wongyuhao.github.io">here</a>.
        <br/>
        Check back soon!

      </Card.Text>


      </Card.Body>
    </Card>
  
 
    <Card className='border-0 p-0 rounded '>
      <Card.Body className='col-auto'>
      <ListGroup>
           <ListGroup.Item as={StyledLink} to='/code'><FontAwesomeIcon icon={faCode}/> Code</ListGroup.Item>
          
           <ListGroup.Item as={StyledLink} to='/mk'><FontAwesomeIcon icon={faKeyboard}/> Mechanical Keyboards</ListGroup.Item>
           <ListGroup.Item as={StyledLink} to='/mk/gb'><FontAwesomeIcon icon={faBoxOpen}/> Group Buys</ListGroup.Item>

           <ListGroup.Item as={StyledLink} to='/contact'><FontAwesomeIcon icon={faPaperPlane}/> Get in Touch</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
 
  </CardGroup>
  
 

 
)
