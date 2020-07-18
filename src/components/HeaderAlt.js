import React from 'react'
import {Link} from 'gatsby'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import logo from '../images/logo.svg'


export default function  Header(){
  return(
  <Navbar bg="white" expand="lg" className="sticky-top">
  <Navbar.Brand> 
    <Link to="/">
    <img
        src={logo}
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt="haoyudoing logo"
        
    />
    </Link> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
      <NavDropdown title="Projects" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.2">Events</NavDropdown.Item>
        <NavDropdown.Divider></NavDropdown.Divider>
        <NavDropdown.Item href="#action/3.1">Code</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Mechanical Keyboards</NavDropdown.Item>

      </NavDropdown>

      <Nav.Link ><Link to="/projects">About</Link></Nav.Link>

      <Nav.Link ><Link to="/projects">Contact</Link></Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
)
  }