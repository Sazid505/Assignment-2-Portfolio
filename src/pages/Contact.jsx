
/*
  File: Contact.jsx
  Student Name: MD Sazid
  Student ID: 301387514
  Date: September 26, 2024
*/

import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';

// Contact component for user to send messages and contact info

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    navigate('/'); // Redirect to the Home Page after submission
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1>Contact Me</h1>

        {/* Contact Information Panel */}
        <div style={styles.contactInfo}>
          <h2>Get in Touch</h2>
          <p>Email: mdsazid435@outlook.com</p>
          <p>Phone: +1437 602 0990</p>
          <p>Address: 169 Darlingside Drive, Scarborough, Toronto, Canada</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2>Send Me a Message</h2>

          <div style={styles.inputGroup}>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Contact Number:</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Email Address:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={styles.textarea}
            />
          </div>

          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', 
    padding: '50px 20px',
    textAlign: 'center', 
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '800px', // Limit the width of the entire container for readability
    width: '100%', // Ensure full width responsiveness
  },
  contactInfo: {
    backgroundColor: '#25c6b8',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px',
    width: '100%', // Ensures full width
    textAlign: 'center',
  },
  form: {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'left',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '100px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
