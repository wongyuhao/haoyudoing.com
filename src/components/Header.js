import React from 'react'
import {Link} from 'gatsby'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import logo from '../images/logo-40px.jpg'


export default function  Header(){
  return(
  <Navbar bg="none" expand="lg" className="navbar-light sticky-top">
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
    HAOYUDOING</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link ><Link to="/about">About</Link></Nav.Link>
      <Nav.Link ><Link to="/contact">Contact</Link></Nav.Link>
      <NavDropdown title="Projects" id="basic-nav-dropdown">
        <NavDropdown.Item ><Link to="/events"activeStyle={{ color: "red" }}>Events</Link></NavDropdown.Item>
        <NavDropdown.Divider></NavDropdown.Divider>
        <NavDropdown.Item ><Link to="/code">Code</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/mk">MechKeys</Link></NavDropdown.Item>

      </NavDropdown>

      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
)
  }