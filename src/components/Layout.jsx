
/*
  File: Layout.jsx
  Student Name: MD Sazid
  Student ID: 301387514
  Date: September 26, 2024
*/

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Sazid_new_logo.png'; 

// Layout component that defines the structure of the page with a navigation bar and main content area
export default function Layout({ children }) {
  return (
    <div>
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <div style={styles.logoContainer}>
            <img src={logo} alt="Sazid Logo" style={styles.logo} />
          </div>
          <ul style={styles.navLinks}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
      <main style={{ marginTop: '30px' }}>{children}</main> {}
    </div>
  );
}

// Inline styles for the NavBar 
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'flex-start', 
    alignItems: 'center',
    padding: '5px 20px', 
    backgroundColor: '#333',
    color: '#fff',
    position: 'fixed', 
    top: 0,
    width: '100%',
    zIndex: 1000, 
    boxShadow: '0 2px 2px -2px gray', 
  },
  navLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  logoContainer: {
    marginRight: '5px',
  },
  logo: {
    width: '40px',
    height: 'auto',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '10px', 
    marginLeft: '10px',
  },
};
