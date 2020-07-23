import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  & {
  
    padding:1rem;
    padding-top:3rem;
    font-size:0.9rem;
    font-family: monospace;
  
   
  }
`

export default function Footer (){
  return (
    
    <StyledFooter className= "text-center text-muted" >
      <p >Yu Hao Wong © 2020</p>
    </StyledFooter>

  )
}