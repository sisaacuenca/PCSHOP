import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (

        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><Badge bg="dark">PC SHOP</Badge></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ">
                        <Link to='/category/componentes'>Componentes</Link>
                        <Link to='/category/perifericos'>Perifericos</Link>
                        <CartWidget className="d-flex justify-content-end" />
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    );
}

export default NavBar;