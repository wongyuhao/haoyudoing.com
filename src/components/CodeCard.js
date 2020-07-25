import React from 'react'
import {Card,CardGroup, Button, Badge} from 'react-bootstrap'

import Img from 'gatsby-image'

import styled from 'styled-components'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode} from '@fortawesome/free-solid-svg-icons'

const styles={
  'default':{
    backgroundColor:'black',
    color:'white'
  },
  "html":{
    backgroundColor:'#e44b23',
    color:'white'
  },
  "css":{
    backgroundColor:'#563d7c',
    color:'white'
  },
  "js":{
    backgroundColor:'#f1e05a',
    color:'black'
  },
  "ruby":{
    backgroundColor:'#701516',
    color:'white'
  },
  "java":{
    backgroundColor:'#b07219',
    color:'white'
  },
  "c++":{
    backgroundColor:'#f34b7d',
    color:'white'
  },
}

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


export default (props)=>{
  let source=<></>;
  let demo=<></>;
  if(props.source){
    source=<BtnSource href={props.source} target='_blank' rel='noreferrer noopener'> <FontAwesomeIcon icon={faGithub}/> Source Code</BtnSource>
  }else{
    source=<BtnSource disabled ><FontAwesomeIcon icon={faGithub}/> Source Code</BtnSource>
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
  



  return(
  <CardGroup className='border-0 shadow my-3'>
  <Card className='border-0 mx-auto justify-content-center' >
    <Img fluid={{...props.fluid, aspectRatio:1.8}}/>
  </Card>
  <Card className='border-0 '>
    <Card.Body className='pt-sm-0 pt-md-3'>
      <Card.Title>
        <strong>{props.title}</strong>
      </Card.Title>

      <Card.Subtitle className=''>
      {props.tags

      .map(tag => <Badge 
                   style={styles[tag]||styles['default']} 
                   className='mx-1'>{tag.toUpperCase()}
                   </Badge>)
      
      } 
      
      </Card.Subtitle>
      <hr/>
      <div dangerouslySetInnerHTML={{__html:props.html}}/>
    
      
     
   </Card.Body>
    <hr className='mb-0'/>
    {cardFoot}
  </Card>
  </CardGroup>
)
}