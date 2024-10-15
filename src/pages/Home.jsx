
/*
  File: Home.jsx
  Student Name: MD Sazid
  Student ID: 301387514
  Date: September 26, 2024
*/

import React from 'react';
import { Link } from 'react-router-dom';

// Home page component that provides an introduction to the portfolio

export default function Home() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1>Welcome to My Portfolio</h1>
        <p style={styles.welcomeMessage}>
          Hello! I’m Sazid. Welcome to my personal portfolio where I showcase my projects, skills, and experiences.
        </p>
        
        <p style={styles.missionStatement}>
          <strong>Mission Statement:</strong> "To continuously grow as a developer and build innovative solutions that positively impact the world."
        </p>

        <div style={styles.buttonContainer}>
          <Link to="/about" style={styles.button}>About Me</Link>
          <Link to="/projects" style={styles.button}>My Projects</Link>
          <Link to="/contact" style={styles.button}>Contact Me</Link>
        </div>
      </div>
    </div>
  );
}

// Styles for the Home page
const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full screen height to center vertically
    textAlign: 'center',
    padding: '0 20px', // Optional padding for responsiveness
  },
  container: {
    maxWidth: '800px', // Ensures content stays within a readable width
    width: '100%', // Ensures full width responsiveness
  },
  welcomeMessage: {
    fontSize: '1.2rem',
    margin: '20px 0',
    color: '#555',
  },
  missionStatement: {
    fontSize: '1.1rem',
    fontStyle: 'italic',
    color: '#333',
    marginBottom: '30px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
};
