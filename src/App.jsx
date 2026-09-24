import { useState } from 'react';
import './App.css';
import image from './assets/image.jpg';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [formMessage, setFormMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMessage(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '' });
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">My Portfolio</div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>

      <section id="home" className="home-section">
        <div className="home-content">
          <p className="welcome">WELCOME TO MY PORTFOLIO</p>
          <h1>Hello, I'm <span>John Marque Atienza</span></h1>
          <p>
            Welcome to my Student Portfolio! This is a basic student portfolio website where we apply our learnings thus far.      
          </p>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-card">
          <div className="about-text">
            <p className="section-label">ABOUT ME</p>
            <h2>A Little About Myself</h2>

            <p>
              I am currently a 3rd year Computer Engineering student at the Technological Institute of the Philippines. I plan on learning
              hardware management and maintenance, robotics and basic networking.
            </p>
          </div>

          <div className="about-box">
            <div className="image">
              <img src={image} alt="Profile" />
            </div>
            <h3>Web Development</h3>
            <p>Learning HTML, CSS and JavaScript.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <p className="section-label">CONTACT ME</p>
            <h2>Let's Connect</h2>
            <p>
              For further inquiries, please fill out the form and send me a message.
            </p>
          </div>

          <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <button type="submit">Submit</button>

            <p id="formMessage">{formMessage}</p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;