import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard,faKeyboard, faPaperPlane,faCode,faUserFriends} from '@fortawesome/free-solid-svg-icons'
import '../styles/index.scss'

import {Link} from 'gatsby'
import { Card, CardGroup, ListGroup} from 'react-bootstrap'

export default () =>(
 <CardGroup style={{height:'100%', paddingTop:'1rem'}}>
    <Card >
     <Card.Body>
        <p>
          Hey there! I'm Hao and welcome to my site! 
          <br/>
          <br/>
          Please forgive the white void everywhere as we are currently migrating from our old home.
          <br/>
          <br/>
          In the meantime, you can visit the old site <a href="https://wongyuhao.github.io">here</a>
        </p>
      </Card.Body>
    </Card>
  
 
    <Card className='col-auto mx-auto'>
      
     
       <ListGroup variant='flush'>
          <ListGroup.Item action as={Link} to="/about">
           <FontAwesomeIcon icon={faAddressCard}/> About Me
          </ListGroup.Item>

          <ListGroup.Item action as={Link} to="/code">
           <FontAwesomeIcon icon={faCode}/> Code
          </ListGroup.Item>

          <ListGroup.Item action as={Link} to="/events">
           <FontAwesomeIcon icon={faUserFriends}/> Events
          </ListGroup.Item>

          <ListGroup.Item action as={Link}to="/mk">
           <FontAwesomeIcon icon={faKeyboard}/> MechKeys
          </ListGroup.Item>

          <ListGroup.Item action as={Link}to="/contatct">
           <FontAwesomeIcon icon={faPaperPlane}/> Get in Touch
          </ListGroup.Item>
          
        </ListGroup>
      
    </Card>
  </CardGroup>
  
 

 
)
