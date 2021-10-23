import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
const Navbar = () => (
    <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>

    </Nav>

)

export default Navbar;