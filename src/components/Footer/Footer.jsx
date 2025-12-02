import React, { useState } from 'react';
import { 
  FaReact, 
  FaEnvelope, 
  FaArrowRight, 
  FaHeart, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaFacebook,
  FaCopyright,
  FaRegCopyright,
  FaCode,
  FaGlobeAmericas,
  FaMapMarkerAlt,
  FaFlag
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress
} from 'react-icons/si';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      console.log('Subscribing email:', email);
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const socialLinks = [
    { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com', color: 'hover:bg-gray-800' },
    { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:bg-blue-700' },
    { icon: <FaTwitter />, label: 'Twitter', href: 'https://twitter.com', color: 'hover:bg-blue-400' },
    { icon: <FaInstagram />, label: 'Instagram', href: 'https://instagram.com', color: 'hover:bg-pink-600' },
    { icon: <FaTelegram />, label: 'Telegram', href: 'https://telegram.org', color: 'hover:bg-blue-500' },
    { icon: <FaYoutube />, label: 'YouTube', href: 'https://youtube.com', color: 'hover:bg-red-600' },
  ];

  const techStack = [
    { icon: <FaReact />, name: 'React', color: 'text-blue-400' },
    { icon: <SiNodedotjs />, name: 'Node.js', color: 'text-green-500' },
    { icon: <SiExpress />, name: 'Express', color: 'text-gray-400' },
    { icon: <SiMongodb />, name: 'MongoDB', color: 'text-green-600' },
    { icon: <SiTailwindcss />, name: 'Tailwind', color: 'text-blue-500' },
  ];

  return (
    <footer id="contact" className="bg-linear-to-br from-gray-900 to-gray-950 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 justify-items-center mx-auto">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
                <FaCode className="text-2xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Gemtessa Deksisa</h2>
                <p className="text-gray-400">MERN Stack Developer</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
             Software Engineer from Ethiopia with 3+ years building scalable web apps.
            </p>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <FaMapMarkerAlt className="text-green-600" />
              <span>Based in Addis Ababa, Ethiopia</span>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
              <FaCode className="text-blue-400" />
              <span>Tech Stack</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {techStack.map((tech, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 bg-gray-800/50 hover:bg-gray-800 p-3 rounded-lg transition-colors group"
                >
                  <div className={`text-2xl ${tech.color} group-hover:scale-110 transition-transform`}>
                    {tech.icon}
                  </div>
                  <span className="font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
              <FaEnvelope className="text-purple-400" />
              <span>Stay Updated</span>
            </h3>
            
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              
              <button
                type="submit"
                className={`w-full py-4 rounded-xl font-medium flex items-center justify-center space-x-3 transition-all ${
                  subscribed 
                    ? 'bg-green-600' 
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:shadow-xl'
                }`}
              >
                {subscribed ? (
                  <>
                    <FaHeart className="animate-pulse" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              
              <p className="text-sm text-gray-400">
                Get notified about new projects, tutorials, and tech insights.
              </p>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Middle Section - Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 justify-items-center">

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors">Web Development</li>
              <li className="hover:text-white transition-colors">Mobile Apps</li>
              <li className="hover:text-white transition-colors">UI/UX Design</li>
              <li className="hover:text-white transition-colors">API Development</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors">Blog</li>
              <li className="hover:text-white transition-colors">Documentation</li>
              <li className="hover:text-white transition-colors">Tutorials</li>
              <li className="hover:text-white transition-colors">GitHub</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg bg-gray-800 hover:bg-gray-700 ${social.color} transition-all flex items-center justify-center group`}
                  title={social.label}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-3 text-gray-400">
            <FaRegCopyright />
            <p>
              <span className="font-medium">© {new Date().getFullYear()} Gemtessa Deksisa.</span>
              <span className="ml-2">All rights reserved.</span>
            </p>
          </div>

          {/* Policies */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Code of Conduct</a>
          </div>

          {/* Made With Love */}
          <div className="flex items-center space-x-2 text-gray-400">
            <FaFlag className="text-green-500" />
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>from Ethiopia</span>
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-12 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <FaArrowRight className="rotate-90" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;