
/*
  File: Project.jsx
  Student Name: MD Sazid
  Student ID: 301387514
  Date: September 26, 2024
*/


import React from 'react';
import project1Image from '../assets/project1.png'; 
import project2Image from '../assets/project2.png';
import project3Image from '../assets/project3.png';

// Projects component that displays a list of projects with description

export default function Projects() {
  return (
    <div style={styles.wrapper}>
      <h1>My Projects</h1>
      
      <div style={styles.projects}>
        {/* Project 1 */}
        <div style={styles.projectCard}>
          <img src={project1Image} alt="Project 1" style={styles.projectImage} />
          <div style={styles.projectDetails}>
            <h2>Project 1: Websites about Protected Areas Issue</h2>
            <p>
              <strong>Role:</strong> Lead Developer <br />
              Developed a HTML website about importance of protected areas is the conservation of biodiversity. Where there is described about
              Bio Diversity, Climate-change, Cultural values, Recreation, World heritage and Solutions regarding the Protected Areas in the world.
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div style={styles.projectCard}>
          <img src={project2Image} alt="Project 2" style={styles.projectImage} />
          <div style={styles.projectDetails}>
            <h2>Project 2: Website for a Juice Company</h2>
            <p>
              <strong>Role:</strong> Software Engineer <br />
              Designed the website for a juice company through which the customer can know about the info of the group,
              get connected to social media and can order juice for themselves.
            </p>
          </div>
        </div>

        {/* Project 3 */}
        <div style={styles.projectCard}>
          <img src={project3Image} alt="Project 3" style={styles.projectImage} />
          <div style={styles.projectDetails}>
            <h2>Project 3: Website for a Housing Company</h2>
            <p>
              <strong>Role:</strong> Full-Stack Developer <br />
              Built a website that helps the customer to see the available properties which they can buy through the realtors. Contact them in case of any inquiry and also contact them through forms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


// Styles for the Projects component
const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Full height
    padding: '50px 20px',
  },
  projects: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    marginTop: '30px',
    alignItems: 'center', // Center project cards horizontally
    width: '100%', // Full width to ensure centering
  },
  projectCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Center the content inside the card
    gap: '20px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '900px', // Max width for readability
    width: '100%', // Ensures full width responsiveness
  },
  projectImage: {
    width: '200px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  projectDetails: {
    textAlign: 'left',
    maxWidth: '600px',
  },
};
