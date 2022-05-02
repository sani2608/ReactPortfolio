import React from 'react'
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import './Contact.css';

const LINKEDIN_URL = 'https://www.linkedin.com/in/sani2608/';
const GITHUB_URL = 'https://www.github.com/sani2608/';

const Contact = () => {
  return (
    <div className="section-container">
      <Header
        heading="Get in touch"
        details="Interested to collaborate? Feel free to drop me an email."
      />

      {/** contact form */}
      <div className="contact-form-container">
        <form className="contact-form" action="https://formspree.io/f/xknyppqg" method="POST">
          <input
            type="email"
            placeholder="Your Email ID"
            name="email"
            className="input-box email-input"
          />

          {/** email body */}
          <textarea
            id="textarea"
            type="text"
            placeholder="Your message"
            name="message"
            className="input-box body-input"
          />

          {/** submit button */}
          <button className="contact-btn" type="submit">
            Send Email
          </button>
        </form>
      </div>

      {/** social icons */}
      <div className="social-icons-container">
        <a className="social-icon" href={LINKEDIN_URL} target="_blank">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a className="social-icon" href={GITHUB_URL} target="_blank">
          <img src={github} alt="github" />
        </a>
      </div>

      <FooterLink phrase="Read more" link="about me." toAddress="/about" />
      <div className="skills-vector-frame">
        <img className="skills-vector" src={contactVector} alt="contact vector" />
      </div>
    </div>
  );
};

export default Contact;
