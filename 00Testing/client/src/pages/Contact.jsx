// src/components/Contact.jsx
import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    const formData = {
      name,
      email,
      project,
      message,
    };

    try {
      const response = await fetch(
        "https://navneet-portfolio-site.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      setAlertMessage(data.message); // Show success message
      // Optionally, reset the form
      setName("");
      setEmail("");
      setProject("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      setAlertMessage("There was an error sending your message.");
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Contact Us</h2>
        {alertMessage && (
          <div className="alert-message">{alertMessage}</div>
        )}
        <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-content">
            <label htmlFor="name" className="contact-label">Name</label>
            <input
              type="text"
              id="name"
              className="contact-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="contact-content">
            <label htmlFor="email" className="contact-label">Email</label>
            <input
              type="email"
              id="email"
              className="contact-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="contact-content">
            <label htmlFor="project" className="contact-label">Title</label>
            <input
              type="text"
              id="project"
              className="contact-input"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              required
            />
          </div>
          <div className="contact-content">
            <label htmlFor="message" className="contact-label">Message</label>
            <textarea
              id="message"
              cols="0"
              rows="7"
              className="contact-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="submit-button"
              disabled={loading} // Disable button while loading
            >
              {loading ? "Loading..." : "Send Message"} 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
