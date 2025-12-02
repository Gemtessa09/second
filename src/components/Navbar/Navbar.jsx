import React, { useState, useEffect } from 'react';
import { 
  FaHome, FaUser, FaLaptopCode, FaBriefcase, FaCertificate, 
  FaEnvelope, FaBars, FaTimes, FaGithub, FaLinkedin, 
  FaTwitter, FaInstagram, FaDownload, FaSun, FaMoon,
  FaChevronDown, FaExternalLinkAlt
} from 'react-icons/fa';
import { MdWork, MdDesignServices, MdLightMode, MdDarkMode } from 'react-icons/md';
import { HiMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleMenuClick = (section) => {
    setMenu(section);
    setIsMobileOpen(false);
  };

  const menuItems = [
    { id: "home", label: "Home", icon: <FaHome size={20} />, color: "from-blue-400 to-blue-600" },
    { id: "about", label: "About", icon: <FaUser size={20} />, color: "from-purple-400 to-purple-600" },
    { id: "services", label: "Services", icon: <MdDesignServices size={20} />, color: "from-pink-400 to-pink-600" },
    { id: "work", label: "Work", icon: <MdWork size={20} />, color: "from-orange-400 to-orange-600" },
    { id: "certificates", label: "Certs", icon: <FaCertificate size={20} />, color: "from-green-400 to-green-600" },
    { id: "contact", label: "Contact", icon: <FaEnvelope size={20} />, color: "from-red-400 to-red-600" },
  ];

  const socialLinks = [
    { icon: <FaGithub size={20} />, label: "GitHub", href: "#", color: "bg-gray-800 hover:bg-gray-900" },
    { icon: <FaLinkedin size={20} />, label: "LinkedIn", href: "#", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: <FaTwitter size={20} />, label: "Twitter", href: "#", color: "bg-blue-400 hover:bg-blue-500" },
    { icon: <FaInstagram size={20} />, label: "Instagram", href: "#", color: "bg-pink-600 hover:bg-pink-700" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? darkMode 
          ? 'bg-gray-900/95 backdrop-blur-lg shadow-xl' 
          : 'bg-white/95 backdrop-blur-lg shadow-xl'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo - Simplified for mobile */}
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              darkMode 
                ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                : 'bg-gradient-to-br from-blue-600 to-purple-600'
            }`}>
              <span className="text-white font-bold text-lg">GD</span>
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${
                darkMode ? 'text-white' : ''
              }`}>
                Gemtessa Deksisa
              </h1>
              <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                Developer
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  onClick={() => handleMenuClick(item.id)}
                  className={`flex flex-col items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                    menu === item.id
                      ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                      : darkMode 
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-xs font-medium mt-1">{item.label}</span>
                </a>
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-400' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            {/* Download CV */}
            <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg">
              <FaDownload size={16} />
              <span className="text-sm">CV</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(true)}
            className={`lg:hidden p-2 rounded-lg ${
              darkMode 
                ? 'bg-gray-800 text-gray-300' 
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            <HiMenuAlt3 size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl">
            <div className="h-full flex flex-col">
              
              {/* Header */}
              <div className="p-4 border-b dark:border-gray-800">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h2 className="text-lg font-bold dark:text-white">Menu</h2>
                  </div>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-2"
                  >
                    <FaTimes size={20} className="text-gray-600 dark:text-gray-300" />
                  </button>
                </div>
              </div>

              {/* Menu Items - Vertical List for mobile */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-2">
                  {menuItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => handleMenuClick(item.id)}
                      className={`flex items-center space-x-4 p-3 rounded-lg transition-all ${
                        menu === item.id
                          ? `bg-gradient-to-r ${item.color} text-white`
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <div className={`p-2 rounded ${
                        menu === item.id ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-800'
                      }`}>
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </a>
                  ))}
                </div>

                {/* Dark Mode Toggle */}
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-medium dark:text-gray-300">Dark Mode</span>
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className={`relative w-12 h-6 rounded-full ${
                        darkMode ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                        darkMode ? 'transform translate-x-6' : 'transform translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6">
                  <p className="font-medium mb-3 dark:text-gray-300">Connect</p>
                  <div className="grid grid-cols-4 gap-2">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`p-3 rounded-lg flex items-center justify-center text-white ${social.color}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-4 border-t dark:border-gray-800 space-y-3">
                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium flex items-center justify-center space-x-2">
                  <FaDownload />
                  <span>Download CV</span>
                </button>
                
                <button className="w-full py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-medium">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;