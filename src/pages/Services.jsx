
/*
  File: Service.jsx
  Student Name: MD Sazid
  Student ID: 301387514
  Date: September 26, 2024
*/

import React from 'react';
import programmingImage from '../assets/programming.png'; 
import webDevImage from '../assets/web-development.png';
import mobileAppImage from '../assets/mobile-apps.png';

export default function Services() {
  return (
    <div style={styles.container}>
      <h1>My Services</h1>
      
      <div style={styles.services}>
        {/* Service 1: General Programming */}
        <div style={styles.serviceCard}>
          <img src={programmingImage} alt="General Programming" style={styles.serviceImage} />
          <div style={styles.serviceDetails}>
            <h2>General Programming</h2>
            <p>
              I offer general programming services in multiple languages such as Java, Python, and C++. Whether it's automating tasks, building algorithms, or creating standalone applications, I can help bring your ideas to life.
            </p>
          </div>
        </div>

        {/* Service 2: Web Development */}
        <div style={styles.serviceCard}>
          <img src={webDevImage} alt="Web Development" style={styles.serviceImage} />
          <div style={styles.serviceDetails}>
            <h2>Web Development</h2>
            <p>
              I specialize in full-stack web development, creating dynamic, responsive, and user-friendly websites using modern frameworks such as React, Node.js, and more.
            </p>
          </div>
        </div>

        {/* Service 3: Mobile App Development */}
        <div style={styles.serviceCard}>
          <img src={mobileAppImage} alt="Mobile Apps" style={styles.serviceImage} />
          <div style={styles.serviceDetails}>
            <h2>Mobile App Development</h2>
            <p>
              I provide mobile app development services for both iOS and Android using technologies like React Native. Let me help you create high-performing mobile applications for your business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Styles for the services component
const styles = {
  container: {
    padding: '50px 20px',
    textAlign: 'center',
  },
  services: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    marginTop: '30px',
  },
  serviceCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  serviceImage: {
    width: '200px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  serviceDetails: {
    maxWidth: '600px',
    textAlign: 'left',
  },
};
