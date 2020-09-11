import React from 'react'
import {Card, Form,Button,Col} from 'react-bootstrap'

import styled from 'styled-components';

const FormBtn = styled(Button)`
margin:0.2rem;
width:10rem;
font-weight:bold;
`

export default ()=>(
  <Card className='border-0 shadow-lg '>
    
    <Card.Body>
    <div className='d-md-flex justify-content-between'>
      <h1><strong>Get in touch</strong></h1>
      <p className='d-flex align-items-center pt-3'>Shoot me an email and let's chat!</p>
    </div>
      <hr className='mt-0'/>
      <Form action='/submitted' method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" >
        
        <Form.Control type="hidden" name="bot-field" />
        <Form.Control type="hidden" name="form-name" value="contact" />

        <Form.Row >

          <Col sm='12'>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" id="name" placeholder='Tim Apple' required/>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" id="email" placeholder='example@host.com' required/>
            </Form.Group>
          </Col>

        </Form.Row>

        <Form.Group>
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" name="subject" id="subject" placeholder='Subject' required/>
        </Form.Group>

        <Form.Group>
        <Form.Label> Message </Form.Label>
          <Form.Control as='textarea' name="message" id="message" rows="5" placeholder="What's on your mind?" required/>
        </Form.Group>


   
        <Form.Group className='text-center'>
          <FormBtn variant='danger'type="reset" value="Clear">Clear</FormBtn>
          <FormBtn variant='dark'type="submit">Send</FormBtn>
        </Form.Group>
     
      </Form>
    </Card.Body>
  </Card>
)