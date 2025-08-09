import React from 'react'

import './Hero.css'
import profile_img from '../../assets/gemtessaphoto.jpg'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span> Hello, I'M Gemtessa Deksisa Tolera, </span>I'M software Engineering & Management Student</h1>
      <p>I'm  passionate and dedicated Software Engineering 
        and Business Management student at Haramaya University, 
        currently training at the INSA Cyber Talent Center. </p>
      <div className="hero-action">
      <a href="https://drive.google.com/file/d/1c91WiaOWBQbiKL1Xu9z2KUBltJFFwFY1/view?usp=drivesdk" download className='hero-btn'>
          Download CV
        </a>
      
        <div id="contact"className='hero-btn'>Contact Me</div>    
      </div>
    </div>
  )
}

export default Hero
