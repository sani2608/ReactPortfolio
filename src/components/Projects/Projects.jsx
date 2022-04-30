import React from 'react'
import './Projects.css';
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";

const Projects = () => {
  return (
    <div className="section-container">
      <Header
        heading="Projects"
        details="Passionate about new technologies. In love with JavaScript."
      />

      <FooterLink phrase="Checkout my" link="projects." toAddress="/projects" />
    </div>
  );
};

export default Projects;
