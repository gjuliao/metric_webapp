import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';

const Nav = () => {
  const location = useLocation();
  // eslint-disable-next-line no-console
  console.log(location.pathname);
  return (
    <>
      { location.pathname === '/home'
      && (
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand href="/">
            <h2 className="title">COUNTRYPEDIA</h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
      )}
      { location.pathname === '/home/:country'
      && (
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand href="/">
            <h2 className="title">Country</h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
      )}
    </>
  );
};

export default Nav;
