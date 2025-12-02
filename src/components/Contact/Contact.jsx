import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaPaperPlane,
  FaUser, 
  FaAt,
  FaComment,
  FaCheckCircle,
  FaTimesCircle,
  FaSpinner,
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaWhatsapp
} from 'react-icons/fa';

const Contact = () => {
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('');
    setIsSubmitting(true);
    
    try {
      // Using FormSubmit.co for free form submissions
      const response = await fetch('https://formsubmit.co/ajax/gemtessadeksisa@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success === 'true') {
        setResult('Form Submitted Successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResult('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setResult('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:bg-blue-700 bg-blue-600' },
    { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com', color: 'hover:bg-gray-800 bg-gray-900' },
    { icon: <FaTelegram />, label: 'Telegram', href: 'https://telegram.org', color: 'hover:bg-blue-500 bg-blue-400' },
    { icon: <FaWhatsapp />, label: 'WhatsApp', href: 'https://wa.me/251903735890', color: 'hover:bg-green-600 bg-green-500' },
  ];

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Let's connect and create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Section - Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500">
                  <FaComment className="text-2xl text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Let's Talk</h2>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm always excited to connect, collaborate, and contribute! Whether you have a question,
                a project idea, or just want to say hello — feel free to reach out. I'm open to
                opportunities in web development, mobile app development, AI projects, internships, and
                tech communities. Let's work together to create something impactful. Your message is
                always welcome!
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 hover:shadow-lg transition-shadow">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <FaEnvelope className="text-blue-600 dark:text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300">Email</h3>
                    <a 
                      href="mailto:gemtessadeksisa@gmail.com" 
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      gemtessadeksisa@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-800 hover:shadow-lg transition-shadow">
                  <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30">
                    <FaPhone className="text-green-600 dark:text-green-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300">Phone</h3>
                    <a 
                      href="tel:+251903735890" 
                      className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      +251 90 373 5890
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-800 hover:shadow-lg transition-shadow">
                  <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900/30">
                    <FaMapMarkerAlt className="text-orange-600 dark:text-orange-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white p-4 rounded-xl flex flex-col items-center justify-center space-y-2 hover:scale-105 transition-all duration-300`}
                  >
                    {social.icon}
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                <FaPaperPlane className="text-2xl text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Send Message</h2>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-medium mb-2">
                  <FaUser className="text-blue-500" />
                  <span>Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-medium mb-2">
                  <FaAt className="text-blue-500" />
                  <span>Your Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-medium mb-2">
                  <FaComment className="text-blue-500" />
                  <span>Your Message</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Enter your message here..."
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-medium text-white transition-all duration-300 flex items-center justify-center space-x-3 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {result && (
                <div className={`p-4 rounded-xl flex items-center space-x-3 ${
                  result.includes('Success') 
                    ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                    : 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                }`}>
                  {result.includes('Success') ? (
                    <FaCheckCircle className="text-xl" />
                  ) : (
                    <FaTimesCircle className="text-xl" />
                  )}
                  <p className="font-medium">{result}</p>
                </div>
              )}
            </form>

            {/* Alternative Email */}
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-xl">
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Prefer to email directly? Reach me at{' '}
                <a 
                  href="mailto:gemtessadeksisa@gmail.com" 
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  gemtessadeksisa@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Working Hours */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 max-w-3xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Working Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20">
                <p className="font-medium text-blue-600 dark:text-blue-400">Mon - Fri</p>
                <p className="text-gray-600 dark:text-gray-400">9:00 AM - 6:00 PM</p>
              </div>
              <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20">
                <p className="font-medium text-green-600 dark:text-green-400">Response Time</p>
                <p className="text-gray-600 dark:text-gray-400">Within 24 Hours</p>
              </div>
              <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20">
                <p className="font-medium text-purple-600 dark:text-purple-400">Availability</p>
                <p className="text-gray-600 dark:text-gray-400">Open to Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;