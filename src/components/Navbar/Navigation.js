import React from 'react'
import { Navbar, Container, NavDropdown, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation(props) {
  return (
    <div>
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/">wulanfrom</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Link className="nav-link" to="/">Work</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
