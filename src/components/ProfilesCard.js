import React from 'react'
import {Card, Button, Col, Row} from 'react-bootstrap'

import styled from "styled-components"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons'


const StyledButton = styled(Button)`
 &{
  padding:1rem 2rem;
  
  border:none;
  
  font-weight: bold;
  width:300px;
 }

`;

const BtnGithub = styled(StyledButton)`
&{
  color:white;
  background-color:black;
}

&:hover &:active{
  background-color: #333333;
}


`

const BtnLinkedin = styled(StyledButton)`
&{
  color:white;
  background-color:#0e76a8;
}
`

const BtnInstagram = styled(StyledButton)`
&{
  color:white;
  background: #f09433; 
  background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
  background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
}
`

const BtnTwitter = styled(StyledButton)`
&{
  color:white;
  background-color:#00acee;
}
`

export default ()=>(

      
    
  <Card className='mt-3 border-0 shadow-lg'>
    
    <Card.Header className='text-center bg-dark text-white'>
      <strong><em>Find me on other platforms:</em></strong>
    </Card.Header>
    <Card.Body className='mx-auto' > 
    <Row >
    <Col >
      <BtnGithub  block href='https://www.github.com/wongyuhao' target='_blank' >
        <FontAwesomeIcon icon={faGithub}/> Github
      </BtnGithub>

      <BtnLinkedin block href='https://www.linkedin.com/in/yu-hao-wong-b21901194/' target='_blank'>
        <FontAwesomeIcon icon={faLinkedin}/> Linkedin
      </BtnLinkedin>

      <BtnInstagram block disabled href='' target='_blank'>
        <FontAwesomeIcon icon={faInstagram}/> Instagram
      </BtnInstagram>

      <BtnTwitter block disabled href='' target='_blank'>
        <FontAwesomeIcon icon={faTwitter}/> Twitter
      </BtnTwitter>
    </Col>
    </Row>
    </Card.Body>
    
  </Card>


  
)