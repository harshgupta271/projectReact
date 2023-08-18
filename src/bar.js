import React, { useEffect, useState, useRef } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';

library.add(faCartShopping, faUser);

function Bar({ cartItemCount }) {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  const handleDocumentClick = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('scroll', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('scroll', handleDocumentClick);
    };
  }, []);

  const renderCartLink = (
    <div className="icon-container cart me-4">
      <Link to="/cart" className="nav-link">
        <FontAwesomeIcon icon={faCartShopping} size="lg" />
        {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        <span className="icon-text">Cart</span>
      </Link>
    </div>
  );

  const renderAccountLink = (
    <div className="icon-container account">
      <Link to="/account" className="nav-link">
        <FontAwesomeIcon icon={faUser} size="lg" />
        <span className="icon-text">Account</span>
      </Link>
    </div>
  );

  return (
    <>
      <Container>
        <Navbar fixed="top" expand="lg" className="rang mb-5" expanded={expanded} ref={navbarRef}>
          <Navbar.Brand href="#">CakeSpot</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/aboutus" className="nav-link">
                About Us
              </Link>
              <Link to="/contactus" className="nav-link">
                Contact Us
              </Link>
            </Nav>
            <Nav.Item className="me-4 icon">{renderCartLink}</Nav.Item>
            <Nav.Item className="me-4 icon">{renderAccountLink}</Nav.Item>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <div className="small mt-5 pt-3">
        <p
          style={{
            position: 'absolute',
            left: '4px',
            fontWeight: 'bolder',
            fontSize: 'larger',
            marginLeft: '5px',
          }}
        >
          Welcome!!
        </p>
        {renderCartLink}
        {renderAccountLink}
      </div>
    </>
  );
}

export default Bar;
