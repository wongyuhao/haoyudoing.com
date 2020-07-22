import React from 'react'
import {Link} from 'gatsby'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import logo from '../images/logo-100px.svg'

import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
&{
  background:black
}

`

export default function  Header(){
  return(
  <StyledNavbar  expand="lg" variant='dark' className="sticky-top shadow-sm  text-white mb-md-4 mb-sm-3"  >
  <Navbar.Brand> 
    <Link to="/">
    <img
        src={logo}
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt="haoyudoing logo"
        
    />
    </Link> 
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
    
    <Nav.Link to="/code" as={Link} className='text-white'>Code</Nav.Link>
    <Nav.Link to="/mk" as={Link}>MechKeys</Nav.Link>
      

      
    </Nav>
    
  </Navbar.Collapse>
  





</ StyledNavbar>
)
  }