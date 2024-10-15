
/*
  File: About.jsx
  Student Name: MD Sazid
  Student ID: 301387514
  Date: September 26, 2024
*/

import React from 'react';
import resume from '../assets/Resume.pdf'; 
import profileImage from '../assets/Myself.jpg'; 

// About Me component that displays personal information and a link to download the resume

export default function About() {
  return (
    <div style={styles.container}>
      <h1>About Me</h1>
      
      <div style={styles.profile}>
        <img src={profileImage} alt="Sazid" style={styles.profileImage} />
        <div style={styles.bio}>
          <h2>MD Sazid</h2>
          <p>
            I am a passionate software developer with a strong interest in building innovative and efficient solutions. 
            With a background in web development and software engineering, I continuously strive to expand my knowledge and contribute to exciting projects.
          </p>
          <p>
            In my spare time, I enjoy exploring new technologies, solving problems, and improving my skills in full-stack development. I am enthusiastic about working in a collaborative environment where I can contribute my expertise and learn from others.
          </p>

          <a href={resume} download style={styles.resumeLink}>
            Download My Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}

// Styles for the About Me page

const styles = {
  container: {
    padding: '50px 20px',
    textAlign: 'center',
  },
  profile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    marginTop: '30px',
  },
  profileImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  bio: {
    maxWidth: '500px',
    textAlign: 'left',
  },
  resumeLink: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
};
