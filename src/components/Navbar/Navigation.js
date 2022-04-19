import React from 'react'
import { Navbar, Container, NavDropdown, Nav} from 'react-bootstrap'
import './Navigation.css'

export default function Navigation() {
  return (
    <div>
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">wulanfrom</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Work</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
