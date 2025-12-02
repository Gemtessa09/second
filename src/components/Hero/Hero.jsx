import React from 'react';
import { 
  FaDownload, 
  FaEnvelope, 
  FaArrowRight, 
  FaGithub, 
  FaLinkedin,
  FaJava,
  FaCode,
  FaGraduationCap,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { 
  SiFlutter, 
  SiReact, 
  SiNodedotjs, 
  SiPython,
  SiMongodb
} from 'react-icons/si';
import profile_img from '../../assets/gamta8.jpg';

const Hero = () => {
  const words = ["Hello,", "I'm", "Gemtessa", "Full Stack", "&", "Flutter", "Developer"];

  return (
    <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">
            {/* Title with proper line breaks */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
  <span className="block">Hello, I'm</span>
  <span className="block text-blue-600 mt-1">Gemtessa Deksisa</span>
  <span className="block text-gray-800 mt-1">
    <span className="text-blue-500">Full Stack</span> &{' '}
    <span className="text-blue-500">Flutter</span> Developer
  </span>
</h1>

            
            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-gray-600">
                Software Engineering & Business Management student at{' '}
                <span className="font-semibold text-blue-600">Haramaya University</span>,
                currently training at{' '}
                <span className="font-semibold text-purple-600">INSA Cyber Talent Center</span>.
              </p>
              
              <div className="flex items-center space-x-4 text-gray-500">
                <div className="flex items-center space-x-2">
                  <FaGraduationCap className="text-blue-500" />
                  <span>4th Year Student</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-green-500" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                <SiReact className="text-blue-500" />
                <span className="font-medium">React</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
                <SiFlutter className="text-green-500" />
                <span className="font-medium">Flutter</span>
              </div>
              <div className="flex items-center space-x-2 bg-yellow-50 px-4 py-2 rounded-full">
                <SiNodedotjs className="text-green-600" />
                <span className="font-medium">Node.js</span>
              </div>
              <div className="flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full">
                <FaJava className="text-red-600" />
                <span className="font-medium">Java</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="https://drive.google.com/file/d/1c91WiaOWBQbiKL1Xu9z2KUBltJFFwFY1/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
              >
                <FaDownload />
                <span>Download CV</span>
                <FaArrowRight className="opacity-70" />
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-3 px-6 py-3 sm:px-8 sm:py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                <FaEnvelope />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-gray-600 mb-3">Connect with me:</p>
              <div className="flex space-x-4">
                <a href="https://github.com" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <FaGithub className="text-gray-700" />
                </a>
                <a href="https://linkedin.com" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <FaLinkedin className="text-blue-600" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div className="order-1 lg:order-2 relative">
            {/* Decorative background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-10 blur-xl"></div>
            
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={profile_img} 
                alt="Gemtessa Deksisa" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow-xl">
                <div className="flex items-center space-x-2">
                  <FaCode className="text-yellow-300" />
                  <span className="font-bold">Available for Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;