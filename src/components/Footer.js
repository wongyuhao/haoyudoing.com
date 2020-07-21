import React from 'react'
<<<<<<< HEAD
import styled from 'styled-components'

const StyledFooter = styled.footer`
  & {
    padding:1rem;
    padding-bottom: 0;
    font-size:0.9rem;
    font-family: monospace;
  
   
  }
`
=======
import '../styles/footer.scss'
>>>>>>> b797655cd1ff5065df844159549370ddddb4acb5

export default function Footer (){
  return (
    
<<<<<<< HEAD
    <StyledFooter className= "fixed-bottom text-muted" >
      <p >Yu Hao Wong © 2020</p>
    </StyledFooter>
=======
    <footer className= "fixed-bottom text-muted" >
      <p >Yu Hao Wong © 2020</p>
    </footer>
>>>>>>> b797655cd1ff5065df844159549370ddddb4acb5

  )
}