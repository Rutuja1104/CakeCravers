import React from "react";
import Nav from "react-bootstrap/Nav";
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CakeHeader from "./CakeHeader";
import "../style/cakeHeader.scss"

const Layout = () => {
  return (
    < >
        <div style={{width:"100%",height:"100%", marginBottom:"4%"}}>
        <CakeHeader/>
        </div>
      <Navbar style={{backgroundColor:"black",}} className="NavContainer">
      <Nav className="me-auto" style={{backgroundColor:"rgb(18 18 18)"}} >
      <Container>
          <Nav className="me-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/skills">Skills</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/projects">Projects</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contact">Contact</Link>
          </Nav.Link>
        </Nav>
        </Container>
      </Nav>
      </Navbar>
      <Outlet />

    </>
  );
};

export default Layout;
