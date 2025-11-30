import React from 'react';
import './Hero.css';
import profile_img from '../../assets/gamta8.jpg';

const Hero = () => {

  const allWords = [
    "Hello,", "I'm", "Gemtessa", "Deksisa", "Tolera,", 
    "Full", "Stack", "&", "Flutter", "Developer"
  ];

  return (
    <div id='home' className='hero'>
      {/* LEFT SIDE */}
      <div className="hero-content">
        <h1>
          {allWords.map((word, idx) => (
            <span key={idx} className="animated-word">{word}</span>
          ))}
        </h1>

        <p>
          I'm a passionate and dedicated Software Engineering 
          and Business Management student at Haramaya University,
          currently training at the INSA Cyber Talent Center.
        </p>

        <div className="hero-action">
          <a 
            href="https://drive.google.com/file/d/1c91WiaOWBQbiKL1Xu9z2KUBltJFFwFY1/view?usp=drivesdk" 
            download 
            className='hero-btn'
          >
            Download CV
          </a>

          <div id="contact" className='hero-btn'>Contact Me</div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <img src={profile_img} alt="Gemtessa Deksisa" className="hero-img" />

    </div>
  );
}

export default Hero;
