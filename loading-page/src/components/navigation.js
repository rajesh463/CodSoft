// import React from 'react';
import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navbar,
  Nav,

  NavDropdown,

} from "react-bootstrap";
import "../components/navigation.css";
import logo from "../components/images/logo.png";

import { logoutInitiate } from "../redux/actions";


const Navigation = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const HandleAuth = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
    }
  };
  const routeToHideAfterlogin = () => {
    if (currentUser) {
      return (
        <>
          <Link to="/admission" className="item" id="item">
           ADMISSION
          </Link>
          <div className="item" id="item" onClick={HandleAuth}>
            LOGOUT
          </div>
        </>
      );
    } else {
      return (
        <>
          <Nav.Link
            eventKey="disabled" disabled className="Disabled-Admission" >
           ADMISSION
          </Nav.Link>
          <Link to="/login" className="item" id="item">
          SIGN IN
          </Link>
          <Link to="/signup" className="item" id="item">
          SIGN UP
          </Link>
        </>
      );
    }
  };
  return (
    <div className="body">
      <div className="heading">
        <img className="logo" src={logo} alt="logo-img" />
        <div className="container-nav">
          <h2>High School Admission Management System</h2>
          <h2>हायस्कुल एडमिशन मैनेजमेंट सिस्टम</h2>
        </div>
      </div>

      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav navbar-nav ">
            <Link to="/" className="item" id="item">
            HOME
            </Link>

            <NavDropdown title="PROGRAMS" className="navbar-dropdown" id="item" >
              <NavDropdown.Item > <Link to="/science" className="item" id="item">
                Science
              </Link></NavDropdown.Item>
              <NavDropdown.Item >   <Link to="/commarce" className="item" id="item">
                Commarce
              </Link></NavDropdown.Item>
              <NavDropdown.Item >   <Link to="/art" className="item" id="item">
                Arts
              </Link></NavDropdown.Item>
            </NavDropdown>
            <Link to="/about" className="item" id="item">
             ABOUT US
            </Link>
            <Link to="/contactus" className="item" id="item">
              CONTACT US
            </Link>

            {routeToHideAfterlogin()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
