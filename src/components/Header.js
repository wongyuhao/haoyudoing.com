import React from 'react'
import {Link} from 'gatsby'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import logo from '../images/logo-100px.svg'

import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
background-color:white;

`

export default function  Header(){
  return(
  <StyledNavbar variant='light' expand="lg" className="sticky-top shadow-sm" >
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
    <Nav.Link to="/about" as={Link}>About</Nav.Link>
    <Nav.Link to="/contact" as={Link}>Contact</Nav.Link>
    
      <NavDropdown title="Projects" id="basic-nav-dropdown">
        <NavDropdown.Item to="/events" as={Link}>Events</NavDropdown.Item>
        <NavDropdown.Divider></NavDropdown.Divider>
        <NavDropdown.Item to="/code" as={Link}>Code</NavDropdown.Item>
        <NavDropdown.Item to="/mk" as={Link}>MechKeys</NavDropdown.Item>

      </NavDropdown>

      
    </Nav>
    
  </Navbar.Collapse>
  





</ StyledNavbar>
)
  }