import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/gamtanew1.jpg'; // check file name is exact!

const About = () => {
  return (
    <div id="about" className="about">
      {/* Title */}
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>

      {/* Sections */}
      <div className="about-sections">
        {/* Left Section */}
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>

        {/* Right Section */}
        <div className="about-right">
          {/* Paragraph */}
          <div className="about-para">
            <p>
              I am a passionate and dedicated Software Engineering and Business
              Management student at Haramaya University, currently in my 3rd
              year of study. With a strong foundation in both technical and
              business disciplines, I bring a unique blend of problem-solving,
              creativity, and strategic thinking to every project I work on.
            </p>
            <p>
              I come from a humble background and have always been driven by a
              deep commitment to learning and self-improvement. I have
              participated in several national programs and earned certificates
              from prestigious institutions such as Udacity, Google (Eshay),
              STEM Power Ethiopia, the Ethiopian Ministry of Education, and the
              Ministry of Peace. I am also actively engaged in the INSA TECH
              internship program and a summer training at AASTU (INSA Talent
              Center).
            </p>
          </div>

          {/* Skills */}
          <h1>My Skills</h1>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p> <hr style={{ width: '80%' }} /></div>
            <div className="about-skill"><p>JavaScript</p> <hr style={{ width: '75%' }} /></div>
            <div className="about-skill"><p>React & Node.js</p> <hr style={{ width: '70%' }} /></div>
            <div className="about-skill"><p>MongoDB</p> <hr style={{ width: '65%' }} /></div>
            <div className="about-skill"><p>PHP & MySQL</p> <hr style={{ width: '70%' }} /></div>
            <div className="about-skill"><p>Python</p> <hr style={{ width: '75%' }} /></div>
            <div className="about-skill"><p>Java</p> <hr style={{ width: '70%' }} /></div>
            <div className="about-skill"><p>C++</p> <hr style={{ width: '65%' }} /></div>
            <div className="about-skill"><p>Kotlin (Android Development)</p> <hr style={{ width: '60%' }} /></div>
            <div className="about-skill"><p>AI & Machine Learning (Beginner)</p> <hr style={{ width: '55%' }} /></div>

            {/* Blockchain Skills */}
            <div className="about-skill"><p>Blockchain Fundamentals</p> <hr style={{ width: '65%' }} /></div>
            <div className="about-skill"><p>Ethereum & Smart Contracts (Solidity)</p> <hr style={{ width: '60%' }} /></div>
            <div className="about-skill"><p>Base (On-chain Development)</p> <hr style={{ width: '55%' }} /></div>
            <div className="about-skill"><p>Tokenization of Assets (NFT, ERC20)</p> <hr style={{ width: '50%' }} /></div>
            <div className="about-skill"><p>On-chain / Off-chain Integration</p> <hr style={{ width: '50%' }} /></div>

            <div className="about-skill"><p>Business Management</p> <hr style={{ width: '65%' }} /></div>
            <div className="about-skill"><p>Soft Skills: Leadership, Communication, Teamwork</p> <hr style={{ width: '90%' }} /></div>
          </div>
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
