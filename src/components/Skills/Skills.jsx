import React from "react";
import "./Skills.css";
import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import skillsVector from "./../../assets/skills_vector.png";
import { skillList } from "../../assets/skillsData";
import SkillCard from "./SkillCard";

const HEADING = "My Skills.";
const DETAILS = "Passionate about new technologies. In love with JavaScript.";
const Skills = () => {
  return (
    <div className="section-container">
      <Header heading={HEADING} details={DETAILS} />

      <div className="skills-card-container">
        {skillList.map((skill, index) => {
          return <SkillCard key={index} skillName={skill.skillName} skillUrl={skill.skillUrl} />;
        })}
      </div>

      <FooterLink phrase="Get in" link="touch." toAddress="/contact" />
      <div className="skills-vector-frame">
        <img className="skills-vector" src={skillsVector} alt="skills vector" />
      </div>
    </div>
  );
};

export default Skills;
