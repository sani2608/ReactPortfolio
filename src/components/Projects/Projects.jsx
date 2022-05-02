import React from 'react'
import './Projects.css';
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import { projectsData } from './../../assets/projectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="section-container">
      <Header
        heading="My Projects"
        details="Passionate about new technologies. In love with JavaScript."
      />

      <div className="project-card-container">
        {projectsData.map(
          ({ projectName, projectDescription, imageUrl, codeUrl, projectUrl }, index) => (
            <ProjectCard
              key={index}
              projectName={projectName}
              projectDescription={projectDescription}
              imageUrl={imageUrl}
              codeUrl={codeUrl}
              projectUrl={projectUrl}
            />
          )
        )}
      </div>

      <FooterLink phrase="Checkout my" link="skills." toAddress="/skills" />
    </div>
  );
};

export default Projects;
