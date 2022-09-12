import { Outlet, Link } from "react-router-dom";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {

  return (
    <div>
      <Nav
         defaultActiveKey="invoices"
      >
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand to="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link eventKey="invoices"  as={Link} to="/invoices">
                  Invoices
                </Nav.Link>
                <Nav.Link eventKey="expenses"  as={Link} to="/expenses">
                  Expenses
                </Nav.Link>
                <Nav.Link eventKey="posts"  as={Link} to="/posts">
                  Posts
                </Nav.Link>
                <Nav.Link eventKey="user"  as={Link} to="/user">
                  User
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Nav>
      <Outlet />
    </div>
  );
}
