import React from 'react'
import {Link} from 'gatsby'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import logo from '../images/logo.svg'


export default function  HeaderAlt(){
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

</Navbar>
)
  }