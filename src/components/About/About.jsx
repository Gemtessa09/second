import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/gamtanew1.jpg' // check file name is exact!

const About = () => {
  return (
    <div id='about' className='about'>

      {/* Title */}
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      {/* Main Section: Photo Left & About Right */}
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>

        <div className="about-right">
        <div className="about-para">
  <p>
    I am a passionate and driven Software Engineering and Business Management student at Haramaya University,
    currently in my 4Th year of study. With a strong foundation in both technical and business disciplines,
    I bring a unique blend of problem-solving, creativity, and strategic thinking to every project I undertake.
  </p>
  <p>
    Coming from a humble background, I am deeply committed to continuous learning and self-improvement.
    Over the years, I have participated in national programs and earned certificates from Udacity,
    Google (Eshay), STEM Power Ethiopia, the Ethiopian Ministry of Education, and the Ministry of Peace.
    In addition, I have gained practical experience through the INSA TECH internship program and advanced
    training at the INSA Talent Center hosted at AASTU.
  </p>
  <p>
    I also have growing expertise in <strong>Blockchain technologies</strong>, including Ethereum, Smart Contracts,
    Tokenization, and On-chain/Off-chain integration, which complement my skills in web development,
    artificial intelligence, and mobile app development. My ultimate goal is to leverage both technical and
    managerial knowledge to design impactful, innovative, and sustainable technology solutions.
  </p>
</div>

        </div>
      </div>

      {/* Detached Skills Section (90% width) */}
      <div className="about-skills-container">
        <h2>My Skills</h2>
        <div className="about-skills">
          <div className="about-skill"> <p>HTML & CSS</p> <hr style={{ width: "69%" }} /> </div>
          <div className="about-skill"> <p>JavaScript</p> <hr style={{ width: "80%" }} /> </div>
          <div className="about-skill"> <p>React & Node.js</p> <hr style={{ width: "59%" }} /> </div>
          <div className="about-skill"> <p>MongoDB</p> <hr style={{ width: "80%" }} /> </div>
          <div className="about-skill"> <p>PHP & MySQL</p> <hr style={{ width: "64%" }} /> </div>
          <div className="about-skill"> <p>Python</p> <hr style={{ width: "80%" }} /> </div>
          <div className="about-skill"> <p>Java</p> <hr style={{ width: "85%" }} /> </div>
          <div className="about-skill"> <p>C++</p> <hr style={{ width: "90%" }} /> </div>
          <div className="about-skill"> <p>Kotlin</p> <hr style={{ width: "85%" }} /> </div>
          <div className="about-skill"> <p>AI & ML</p> <hr style={{ width: "73%" }} /> </div>
          <div className="about-skill"> <p>Blockchain</p> <hr style={{ width: "80%" }} /> </div>
          <div className="about-skill"> <p>Business Management</p> <hr style={{ width: "49%" }} /> </div>
          <div className="about-skill"> <p>Soft Skills</p> <hr style={{ width: "70%" }} /> </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>50+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
