import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand >Edu Care</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/courses"}>Courses</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
        
            </Nav>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;