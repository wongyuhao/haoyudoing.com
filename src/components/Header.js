import React from 'react'
import {Link} from 'gatsby'
import {Navbar, Nav} from 'react-bootstrap'
import logo from '../images/logo-100px.svg'

import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
&{
  background: #1a1d20   
}
`

const StyledNavLink = styled(Link)`
&{
  font-weight:bold;

}


`

export default function  Header(){
  return(
  <StyledNavbar  expand="lg" variant='dark' className="sticky-top shadow text-white mb-md-4 mb-sm-3"  >
  <Navbar.Brand className='d-flex flex-row p-0'> 
    <Link to="/">
    <img
        src={logo}
        width="35"
        height="35"
        className="d-inline-block align-top"
        alt="haoyudoing logo"
        
    />
    
    </Link>
    <strong className='d-flex align-items-center m-0 pl-2 pt-0 pr-0' >haoyudoing.</strong>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto ">
    
    <Nav.Link to="/code" as={StyledNavLink} className='pl-0'>Code</Nav.Link>
    <Nav.Link to="/mk" as={StyledNavLink}>MechKeys</Nav.Link>
    
  
  </Nav>
  <Nav>
    <Nav.Link to="/resume" as={Link} style={{fontWeight: 'bold', color:'white'}}>Resume</Nav.Link>
    <Nav.Link to="/contact" as={StyledNavLink}>Contact</Nav.Link>
    <Nav.Link to="/about" as={StyledNavLink}>About</Nav.Link>
  </Nav>
    
  </Navbar.Collapse>
  





</ StyledNavbar>
)
  }
