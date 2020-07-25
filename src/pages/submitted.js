import React from 'react';
import {Link} from 'gatsby';
import {Card,Button} from 'react-bootstrap';

export default () =>(
  <Card className='py-5 border-0 shadow-lg w-50 mx-auto'>
    
    <Card.Body className='text-center'>
    <Card.Title>
      <strong>Form response recorded</strong>
    </Card.Title>
    
    <Card.Text>
      I'll get back to you soon!
    </Card.Text>
      <Button variant ='dark' className='m-1' as={Link} to='/contact'><strong>Submit another form</strong></Button>
      <Button variant ='dark' className='m-1' as={Link} to='/'><strong>Go to homepage</strong></Button>
    </Card.Body>
  </Card>
)