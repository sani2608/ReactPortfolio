import React from "react";
import Header from "../Header/Header";
import "./About.css";
import aboutVector from "./../../assets/about_vector.png";
import aboutAnime from "./../../assets/about_anime.gif";
import FooterLink from "../FooterLink/FooterLink";

const ABOUT_ME = "About Me.";
const DETAILS =
  "I am a web application developer having expertise in frontend development. I design and develop web applications for enterprise to deliver the product with quality code.";
const LINKEDIN_URL = "https://www.linkedin.com/in/sani2608/";
const INSTAGRAM_URL = "https://www.instagram.com/26sunny/";

const About = () => {
  return (
    <div className="section-container">
      <Header heading={ABOUT_ME} details={DETAILS} />

      <div className="about-main">
        <div className="about-main-left">
          {/** sub section 1 */}
          <h3 className="about-sub-head">Software Engineer</h3>
          <p className="about-details">
            Coding is my passion, I love to meet new people with same interest and talk about tech.
            &nbsp;
            {/**
               <a
              className="about-link-element"
              href="http://github.com/sani2608"
              target="_blank"
            >
              my github profile
            </a>
               */}
          </p>

          {/** sub section 1 */}
          <h3 className="about-sub-head">Musician</h3>
          <p className="about-details">
            The main instrument which I play is Tabla. I also know how to play Harmonium, piano.

            <br /> I am in love with Indian classical music.
            <br /> Apart from this, I listen to EDM, House, techno, trance music, etc.
          </p>

          {/** sub section 3 */}
          <h3 className="about-sub-head">Fitness Freak</h3>
          <p className="about-details">
            I have been weight lifting for almost three years now. I can give you personalized
            workout plans and diet plans. I will be happy to connect and discus. Lets connect on
            &nbsp;
            <a className="about-link-element" href={LINKEDIN_URL} target="_blank">
              LinkedIn
            </a>
            <br />
          </p>

          {/** sub section 4 */}
          <h3 className="about-sub-head">Travel</h3>
          <p className="about-details">
            I like to travel on my bike to different places. You can check out my posts on
            &nbsp;
            <a className="about-link-element" href={INSTAGRAM_URL} target="_blank">
              Instagram
            </a>
            <br />
            <span>...</span>
          </p>
        </div>
        <div className="about-main-right">
          <img src={aboutAnime} className="about-anime" alt="animation" />
        </div>
      </div>

      <FooterLink phrase="Check out my" link="projects!" toAddress="/projects" />

      {/** vector frame */}
      <div className="vector-frame">
        <img src={aboutVector} alt="about-vector" className="about-vector" />
      </div>
    </div>
  );
};

export default About;
