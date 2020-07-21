import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard,faKeyboard, faPaperPlane,faCode,faUserFriends} from '@fortawesome/free-solid-svg-icons'
<<<<<<< HEAD

=======
import '../styles/index.scss'
>>>>>>> b797655cd1ff5065df844159549370ddddb4acb5

import {Link} from 'gatsby'
import { Card, CardGroup, ListGroup} from 'react-bootstrap'

export default () =>(
<<<<<<< HEAD
 <CardGroup className='h-100  mt-5 pl-0 shadow bg-white rounded ' >
   
    <Card className=' border-0 rounded'>
      
     <Card.Body>

       <Card.Title>
        Welcome!
      </Card.Title>

      <Card.Text>
=======
 <CardGroup style={{height:'100%', paddingTop:'1rem'}}>
    <Card >
     <Card.Body>
        <p>
>>>>>>> b797655cd1ff5065df844159549370ddddb4acb5
          Hey there! I'm Hao and welcome to my site! 
          <br/>
          <br/>
          Please forgive the white void everywhere as we are currently migrating from our old home.
          <br/>
          <br/>
          In the meantime, you can visit the old site <a href="https://wongyuhao.github.io">here</a>
<<<<<<< HEAD
      </Card.Text>


=======
        </p>
>>>>>>> b797655cd1ff5065df844159549370ddddb4acb5
      </Card.Body>
    </Card>
  
 
<<<<<<< HEAD
    <Card className='col-md-auto border-0 '>
=======
    <Card className='col-auto mx-auto'>
>>>>>>> b797655cd1ff5065df844159549370ddddb4acb5
      
     
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
<<<<<<< HEAD
 
=======
>>>>>>> b797655cd1ff5065df844159549370ddddb4acb5
  </CardGroup>
  
 

 
)
