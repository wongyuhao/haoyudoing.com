import React from 'react'
import {Card,CardGroup, Button, Badge} from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { LazyLoadComponent  } from 'react-lazy-load-image-component';
import AutoFitImage from 'react-image-autofit-frame';
import styled from 'styled-components'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode} from '@fortawesome/free-solid-svg-icons'

import {styles} from '../colors.js'

const StyledBtn = styled(Button)`
&{
  margin-right:1rem;
  border:none;
  font-weight:bolder
}


&:disabled{
    background: gray;
    color:white;
  }
`
const BtnSource= styled(StyledBtn)`
  &{
    background: #211F1F;
    color:white;
    }

  &:hover {
    background: #444444;
    color:white;
    }  

  

  
`
const AutoImageDiv = styled.div`
&{
  height:100%;
}

@media(max-width:576px){
  height:20vh;
}
`

export default (props)=>{
  let source=<></>;
  let demo=<></>;
  let thumbsrc=""
  if(props.source){
    source= <BtnSource href={props.source} target='_blank' rel='noreferrer noopener'> 
              <FontAwesomeIcon icon={faGithub}/> 
              {' '}Source Code
            </BtnSource>
  }else{
    source= <BtnSource disabled >
              <FontAwesomeIcon icon={faGithub}/> 
              {' '}Source Code
            </BtnSource>
  }
  if(props.demo){
    demo=<StyledBtn href={props.demo}  target='_blank' rel='noreferrer noopener'><FontAwesomeIcon icon={faLaptopCode}/> Live Demo</StyledBtn>
  }else{
    demo=<StyledBtn disabled><FontAwesomeIcon icon={faLaptopCode}/> Live Demo</StyledBtn>
  }
  const cardFoot = <div className='p-3 '>
    {source}
    {demo}
  </div>
  
  
  thumbsrc = props.img != null ? props.img.url : props.none;

  return(
  <CardGroup className='border-0 shadow my-3'>
  <Card className='border-0 mx-auto justify-content-center ' >
    <LazyLoadComponent>
      <AutoImageDiv>
        <AutoFitImage imgSrc = {thumbsrc} />
      </AutoImageDiv>
    </LazyLoadComponent>
  </Card>
  <Card className='border-0  '>
    <Card.Body className='pt-0 pt-md-3 pt-lg-3  pb-0'>
      <Card.Title>
        <strong>{props.title}</strong>
      </Card.Title>

      <Card.Subtitle className=''>
      {props.tags
      .map((tag,i) => <Badge 
                   key={i}
                   style={styles[tag.toLowerCase()]||styles['default']} 
                   className='mx-1'>{tag.toUpperCase()}
                   </Badge>)
      
      } 
      
      </Card.Subtitle>
      <hr/>
      <ReactMarkdown source={props.md} />
    
      
     
   </Card.Body>
    <hr className='mb-0'/>
    {cardFoot}
  </Card>
  </CardGroup>
)
}