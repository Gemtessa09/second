import React from 'react';
import './Hero.css';
import profile_img from '../../assets/gemtessaphoto.jpg';

const Hero = () => {
  // Merge both arrays into one
  const allWords = ["Hello,", "I'M", "Gemtessa", "Deksisa", "Tolera,", "I'M", "Software", "Engineering", "&", "Management", "Student"];

  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Gemtessa Deksisa" />

      <h1>
        {allWords.map((word, idx) => (
          <span key={idx} className="animated-word">{word}</span>
        ))}
      </h1>

      <p>
        
        I'm passionate and dedicated Software Engineering 
        and Business Management student at Haramaya University, 
        currently training at the INSA Cyber Talent Center.
      </p>

      <div className="hero-action">
        <a href="https://drive.google.com/file/d/1c91WiaOWBQbiKL1Xu9z2KUBltJFFwFY1/view?usp=drivesdk" download className='hero-btn'>
          Download CV
        </a>
        <div id="contact" className='hero-btn'>Contact Me</div>    
      </div>
    </div>
  );
}

export default Hero;
