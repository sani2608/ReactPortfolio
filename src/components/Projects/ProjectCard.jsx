import React from 'react';

const ProjectCard = ({ projectName, projectDescription, imageUrl, codeUrl, projectUrl }) => {
  return (
    <div className="project-card">
      <div className="image-container">
        <a href={projectUrl} target="_blank" className="project-external-link">
          <img src={imageUrl} alt="project" className="project-image" />
        </a>
      </div>

      <div className="project-details-container">
        <h2 className="project-heading">{projectName}</h2>
        <p className="project-details">{projectDescription}</p>
        <a href={codeUrl} target="_blank" className="project-yt-link">
          Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
