import { Home, Login, Logout } from "@mui/icons-material";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { loggedInUser, handleLogout } from "../utils/services";

import { Typography } from "@mui/material";

export default function NavigationBar() {
  return (
    <div>
      <Navbar variant="light" expand="lg" bg="white" fixed="top">
        <Container>
          <Navbar.Brand href="/">DMW</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">
                Home
                <span className="ms-1">
                  <Home />
                </span>
              </Nav.Link>
            </Nav>

            <Nav className="ms-auto">
              {loggedInUser ? (
                <>
                  <Nav.Link>
                    <Typography>{loggedInUser.firstName}</Typography>
                  </Nav.Link>
                  <Nav.Link component="button" onClick={handleLogout}>
                    Logout
                    <span className="ms-1">
                      <Logout />
                    </span>
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link href="/login">
                  Login
                  <span className="ms-1">
                    <Login />
                  </span>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
