import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';


import "./components.css";

const Navigation = () => {
  return (
    <Navbar>
      <Nav>
        <NavItem>
          <Link className="nav-item" to = '/'>Home</Link>
          <Link className="nav-item" to = '/Characters'>Characters</Link>

        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Navigation;