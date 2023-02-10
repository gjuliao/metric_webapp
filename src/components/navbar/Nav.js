import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';

const Nav = () => (
  <Navbar className="navbar">
    <Container>
      <Navbar.Brand href="/">
        <h2 className="title">COUNTRYPEDIA</h2>
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default Nav;
