import React from 'react'
import {Card, Button, Col, Row} from 'react-bootstrap'

import styled from "styled-components"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin,faInstagram,faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons'

const StyledButton = styled(Button)`
 &{
  padding:1rem 2rem;
  
  border:none;
  
  font-weight: bold;
  width:300px;
 }

 &:disabled{
   color:white; 
   background: gray;
 }

 &:focus{
   background:white;
   color:black;
   
 }

`;

const BtnGithub = styled(StyledButton)`
&{
  color:white;
  background:#211F1F;
}

&:hover {
  background: #444444;
}


`

const BtnLinkedin = styled(StyledButton)`
&{
  color:white;
  background:#0e76a8;
}

&:hover{
  background:#0a597e;
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
&:hover{
  background: -moz-linear-gradient(70deg, #f09433 0%, #e6683c 15%, #dc2743 30%, #cc2366 55%, #bc1888 100%); 
  background: -webkit-linear-gradient(70deg, #f09433 0%,#e6683c 15%,#dc2743 30%,#cc2366 55%,#bc1888 100%); 
  background: linear-gradient(70deg, #f09433 0%,#e6683c 15%,#dc2743 30%,#cc2366 55%,#bc1888 100%); 
}
`

const BtnTwitter = styled(StyledButton)`
&{
  color:white;
  background:#00acee;
}

&:hover{
  background:#40c1f2;
}


`

const BtnFacebook =styled(StyledButton)`
&{
  color:white;
  background:#3b5998;
}

&:hover{
  background:#546ea5;
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
      <BtnGithub  block href='https://www.github.com/wongyuhao' target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub}/> Github
      </BtnGithub>

      <BtnLinkedin block href='https://www.linkedin.com/in/yu-hao-wong-b21901194/' target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin}/> Linkedin
      </BtnLinkedin>

      <BtnInstagram block disabled href='https://www.instagram.com/wongyuhao/' target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram}/> Instagram
      </BtnInstagram>

      <BtnTwitter block disabled href='https://twitter.com/haoyudoing' target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter}/> Twitter
      </BtnTwitter>

      <BtnFacebook block  disabled href='https://www.facebook.com/wongyuhao' target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook}/> Facebook
      </BtnFacebook>


    </Col>
    </Row>
    </Card.Body>
    
  </Card>


  
)
