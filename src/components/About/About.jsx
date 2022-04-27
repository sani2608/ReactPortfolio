import React from 'react'
import Header from "../Header/Header";
import "./About.css";
import aboutVector from "./../../assets/about_vector.png";

const ABOUT_ME = "About Me.";
const DETAILS =
  "I am a web application developer having expertise in frontend development. I design and develop web applications for enterprise using SAP UI5 to deliver the product with quality code.";

const About = () => {
  return (
    <div className="section-container">
      <Header heading={ABOUT_ME} details={DETAILS} />

      {/** vector frame */}
      <div className="vector-frame">
        <img src={aboutVector} alt="about-vector" className='about-vector'/>
      </div>
    </div>
  );
};

export default About