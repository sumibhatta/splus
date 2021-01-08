import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

const Header = () => {
    return (
        <header className="col-12">
            <br/>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Stationery Plus</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Products</Nav.Link>
      <Nav.Link href="#pricing">Contact Us</Nav.Link>
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
