import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="col-12">
            <br/>
  <Navbar bg="dark" variant="dark">
    <LinkContainer to="/">
    <Navbar.Brand>Stationery Plus</Navbar.Brand>
    </LinkContainer>
    <Nav className="mr-auto">

    <LinkContainer to="/">
      <Nav.Link>Home</Nav.Link>
    </LinkContainer>

    <LinkContainer to="/pro">
      <Nav.Link>Products</Nav.Link>
    </LinkContainer>

    <LinkContainer to="/contact">
      <Nav.Link>Contact Us</Nav.Link>
    </LinkContainer>

    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
        </header>
    )
}

export default Header
