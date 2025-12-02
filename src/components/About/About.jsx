import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaPython, FaJava, FaPhp, FaDatabase, FaCode,
  FaBrain, FaChartLine, FaHandshake, FaCertificate,
  FaProjectDiagram, FaUsers, FaUserGraduate, FaGlobe,
  FaRocket, FaLightbulb, FaSeedling, FaUniversity,
  FaMedal, FaTrophy, FaAward, FaStar, FaGraduationCap
} from 'react-icons/fa';
import { 
  SiMongodb, SiMysql, SiCplusplus, SiKotlin, 
  SiBlockchaindotcom, SiTensorflow, SiTailwindcss,
  SiEthereum, SiSmartthings, SiGoogleclassroom
} from 'react-icons/si';
import { GiAchievement } from 'react-icons/gi';
import profile_img from '../../assets/gamtanew1.jpg';

const About = () => {
  const skills = [
    { name: "HTML & CSS", level: 69, icon: <><FaHtml5 className="text-orange-500" /> <FaCss3Alt className="text-blue-500" /></>, color: "from-orange-500 to-red-500" },
    { name: "JavaScript", level: 80, icon: <FaJs className="text-yellow-400" />, color: "from-yellow-400 to-yellow-600" },
    { name: "React & Node.js", level: 59, icon: <><FaReact className="text-blue-400" /> <FaNodeJs className="text-green-500" /></>, color: "from-blue-400 to-green-500" },
    { name: "MongoDB", level: 80, icon: <SiMongodb className="text-green-500" />, color: "from-green-500 to-green-700" },
    { name: "PHP & MySQL", level: 64, icon: <><FaPhp className="text-purple-500" /> <SiMysql className="text-blue-600" /></>, color: "from-purple-500 to-blue-600" },
    { name: "Python", level: 80, icon: <FaPython className="text-blue-400" />, color: "from-blue-400 to-yellow-500" },
    { name: "Java", level: 85, icon: <FaJava className="text-red-500" />, color: "from-red-500 to-orange-500" },
    { name: "C++", level: 90, icon: <SiCplusplus className="text-blue-600" />, color: "from-blue-600 to-purple-600" },
    { name: "Kotlin", level: 85, icon: <SiKotlin className="text-purple-500" />, color: "from-purple-500 to-pink-500" },
    { name: "AI & ML", level: 73, icon: <><FaBrain className="text-pink-500" /> <SiTensorflow className="text-orange-500" /></>, color: "from-pink-500 to-orange-500" },
    { name: "Blockchain", level: 80, icon: <><SiBlockchaindotcom className="text-yellow-500" /> <SiEthereum className="text-gray-700" /></>, color: "from-yellow-500 to-gray-700" },
    { name: "Business Management", level: 49, icon: <FaChartLine className="text-green-600" />, color: "from-green-600 to-teal-500" },
    { name: "Soft Skills", level: 70, icon: <FaHandshake className="text-blue-500" />, color: "from-blue-500 to-indigo-500" },
  ];

  const achievements = [
    { number: "3+", label: "Years of Experience", icon: <FaCode className="text-2xl" />, color: "from-blue-500 to-cyan-400" },
    { number: "20+", label: "Projects Completed", icon: <FaProjectDiagram className="text-2xl" />, color: "from-purple-500 to-pink-500" },
    { number: "50+", label: "Happy Clients", icon: <FaUsers className="text-2xl" />, color: "from-green-500 to-emerald-400" },
    { number: "10+", label: "Certificates", icon: <FaCertificate className="text-2xl" />, color: "from-yellow-500 to-orange-500" },
  ];

  // FIXED: Using FaGoogle component defined below
  const certifications = [
    { name: "Udacity", icon: <SiGoogleclassroom className="text-blue-600" /> },
    { name: "Google (Eshay)", icon: <FaGoogle className="text-green-500" /> },
    { name: "STEM Power Ethiopia", icon: <FaRocket className="text-purple-500" /> },
    { name: "Ethiopian Ministry of Education", icon: <FaUniversity className="text-red-500" /> },
    { name: "Ministry of Peace", icon: <FaHandshake className="text-teal-500" /> },
    { name: "INSA TECH", icon: <FaCode className="text-indigo-500" /> },
    { name: "AASTU Talent Center", icon: <FaGraduationCap className="text-yellow-500" /> },
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-gray-600">
    Hi, I’m Gemtessa Deksisa Tolera, a 4th-year Software Engineering and Business Management student at Haramaya University. I am passionate about building innovative software solutions that bridge the gap between technology and real-world problems.

With hands-on experience in full-stack development (React, Node.js, Next.js, PHP), mobile development (Flutter, Kotlin), AI/ML (Python), and blockchain technology, I create scalable and user-friendly applications that solve complex challenges.

I have successfully completed multiple projects, earned certificates from Udacity, Google (Eshay), STEM Power Ethiopia, and trained at the INSA Cyber Talent Center, which strengthened my skills in both technical and business domains.

Driven by curiosity, creativity, and continuous learning, I aim to contribute to impactful technology projects while growing as a versatile software engineer.

Let’s build the future, one line of code at a tim
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          
          {/* Profile Image */}
          <div className="lg:w-2/5">
            <img 
              src={profile_img} 
              alt="Profile" 
              className="rounded-2xl shadow-2xl"
            />
          </div>

          {/* About Text */}
          <div className="lg:w-3/5 space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-6">My Journey</h2>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  
                </p>
                
                <p className="text-gray-700">
                  My journey began with a deep curiosity about technology and its potential to transform lives. Growing up in a humble background, I learned the value of hard work, resilience, and continuous learning. This drive led me to pursue Software Engineering and Business Management at Haramaya University, where I am now in my 4th year.

Along the way, I have explored full-stack web development, mobile app development, AI/ML, and blockchain technologies, completing projects that challenged me to apply both technical knowledge and business insights. I have earned certificates from Udacity, Google (Eshay), STEM Power Ethiopia, and other recognized programs, which helped me gain practical skills and industry exposure.

Currently, I am training at the INSA Cyber Talent Center, where I continue to sharpen my skills, work on impactful projects, and collaborate with like-minded innovators. Each step of my journey has reinforced my commitment to leveraging technology to create meaningful solutions and to grow as a well-rounded software engineer and problem solver.
                </p>
              </div>
            </div>

            {/* Certifications */}
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-5"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      {skill.icon}
                    </div>
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-sm font-bold">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
  
      </div>
    </section>
  );
};
// Fixed FaGoogle component
const FaGoogle = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
  </svg>
);

export default About;