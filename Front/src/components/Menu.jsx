import { useState } from 'react'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css'
import CMLogo from '../assets/logo.png'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack, faUser } from '@fortawesome/free-solid-svg-icons'

function Menu() {
  return (
    <>
      <Navbar fixed="top" bg="white" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={CMLogo}
              width="auto"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            CasaMundi HOLA
          </Navbar.Brand>
          <ul className='menu'>
            <li className='anunciate'><a> <FontAwesomeIcon icon={faThumbtack} style={{ color: "#7a7a7a", }} /><span>Pon tu anuncio gratis</span></a></li>
            <li className='user'><a><FontAwesomeIcon icon={faUser} /><span>Iniciar sesión</span></a></li>
          </ul>

        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
