import React from 'react'
import {Card, Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKeyboard} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const MkHeader = styled.div`
&{
  display: inline-flex; 
  flex-direction: row;
  width:100%;
  justify-content: space-between;
  align-items: flex-end;

}

@media(max-width:850px){
  &{

    flex-direction:column;
    align-items:start;
    text-align:left;
  }
}
`

const mk = ()=>(
  <>

    <Card className='border-0 shadow '>
     <Card.Body className='d-flex flex-column '>
      <MkHeader>
        <p style={{fontWeight:'bold', fontSize:'1.7em', margin:0}}>Mechanical Keyboards</p>
        <p style={{fontStyle:'italic'}} className='mb-1 pb-1 align-items-end'>a.k.a. that hobby I've given up on explaining</p>
      </MkHeader>
      <hr className='w-100 h-100'/>
      hello there
      </Card.Body>
   </Card>

  </>
)

export default mk