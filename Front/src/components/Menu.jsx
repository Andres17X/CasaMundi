import { useState } from 'react'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css'
import CMLogo from '../assets/logo.png'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack, faUser } from '@fortawesome/free-solid-svg-icons'

function Menu() {
  return (
    <>
      <div className='header'>
        <Navbar bg="light" expand="lg" >
          <Container style={{ minWidth: '100vw' }}>
            <Navbar.Brand >
            <img
              alt=""
              src={CMLogo}
              width="auto"
              height="40"
              className="d-inline-block align-top"
            /></Navbar.Brand>
            <Nav className="header-right">
              <Nav.Link className='user'><a><FontAwesomeIcon icon={faUser} /><span>Iniciar sesión</span></a></Nav.Link>
              <Nav.Link className='anunciate'><a> <FontAwesomeIcon icon={faThumbtack} /><span>Pon tu anuncio gratis</span></a></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Menu;
