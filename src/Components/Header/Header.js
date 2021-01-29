import { useHistory } from "react-router-dom";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = React.memo(() => {
  const history = useHistory();
  const navigateTransaction = () => {
    history.push("/transactions");
  };
  const navigateHome = () => {
    history.push("/home");
  };
  const navigateCreateTransaction = () => {
    history.push("/transactions/create");
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>Alkemy-Interview</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link onClick={navigateHome}>Home</Nav.Link>
          <Nav.Link onClick={navigateTransaction}>Transactions</Nav.Link>
          <Nav.Link onClick={navigateCreateTransaction}>
            Create Transaction
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Header;
