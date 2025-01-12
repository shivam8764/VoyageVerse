import React, { useState, useCallback, useMemo } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom'; // <-- Import useHistory
import './NavigationBar.css';

function NavigationBar() {
  // Determine the current path
  const pathName = useMemo(() => window.location.pathname, []);

  const [isOpen, setIsOpen] = useState(false);

  // Check if user is authenticated (based on localStorage)
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  // For redirecting after logout
  const history = useHistory();

  const toggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  // Handle user logout
  const handleLogout = useCallback(() => {
    // Remove auth flag from localStorage
    localStorage.removeItem('isAuthenticated');
    // Redirect to login page
    history.push('/login');
  }, [history]);

  return (
    <div className="navBar1">
      <Navbar
        color="dark"
        dark
        className="fixed-top d-flex justify-content-between"
        expand="md"
      >
        {/* Brand Name */}
        <NavItem>
          <Link to="/" className="navbar-brand text-white">
            VoyageVerse
          </Link>
        </NavItem>

        {/* Toggler for smaller screens */}
        <NavbarToggler onClick={toggle} style={{ width: 'auto' }} />

        {/* Collapsible Navigation Links */}
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {/* Home Link */}
            <NavItem>
              <Link to="/" onClick={toggle}>
                <p
                  className={`m-2 ${
                    pathName === '/' ? 'text-white' : 'text-secondary'
                  }`}
                >
                  Home
                </p>
              </Link>
            </NavItem>

            {/* Most Liked Posts */}
            <NavItem>
              <Link to="/most-liked" onClick={toggle}>
                <p
                  className={`m-2 ${
                    pathName === '/most-liked' ? 'text-white' : 'text-secondary'
                  }`}
                >
                  Most Liked
                </p>
              </Link>
            </NavItem>

            {/* Most Commented Posts */}
            <NavItem>
              <Link to="/most-commented" onClick={toggle}>
                <p
                  className={`m-2 ${
                    pathName === '/most-commented'
                      ? 'text-white'
                      : 'text-secondary'
                  }`}
                >
                  Most Commented
                </p>
              </Link>
            </NavItem>

            {/* Conditional Login/Logout */}
            {isAuthenticated ? (
              <NavItem>
                <button
                  className="btn btn-link text-secondary m-2"
                  onClick={() => {
                    toggle();
                    handleLogout();
                  }}
                  style={{ textDecoration: 'none' }}
                >
                  Logout
                </button>
              </NavItem>
            ) : (
              <NavItem>
                <Link to="/login" onClick={toggle}>
                  <p
                    className={`m-2 ${
                      pathName === '/login' ? 'text-white' : 'text-secondary'
                    }`}
                  >
                    Login
                  </p>
                </Link>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
