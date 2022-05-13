import { Home, Login, Logout, Notifications } from "@mui/icons-material";
import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { loggedInUser, handleLogout } from "../utils/services";

import { Badge, Typography } from "@mui/material";
import { ReloadContext } from "../Contexts/ReloadContext";

export default function NavigationBar() {
  const { adminNotifications } = useContext(ReloadContext);
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
                    <Badge color="error" badgeContent={adminNotifications}>
                      <Notifications />
                    </Badge>
                  </Nav.Link>
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
