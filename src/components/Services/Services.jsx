import React, { useState } from 'react';
import { 
  FaCode, 
  FaMobileAlt, 
  FaDatabase, 
  FaBrain, 
  FaEthereum,
  FaProjectDiagram,
  FaCheckCircle,
  FaArrowRight,
  FaRocket,
  FaShieldAlt,
  FaBolt,
  FaUsers,
  FaChartLine,
  FaLayerGroup,
  FaCogs,
  FaSyncAlt,
  FaHandshake
} from 'react-icons/fa';
import { 
  SiReact, 
  SiFlutter, 
  SiNodedotjs, 
  SiPython, 
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiNextdotjs,
  SiPhp,
  SiMysql,
  SiGraphql,
  SiAmazon
} from 'react-icons/si';

const Services = () => {
  const [activeTab, setActiveTab] = useState('web');

  const services = [
    {
      id: 'web',
      title: 'Web Development',
      icon: <FaCode className="text-4xl" />,
      description: 'Full-stack applications with modern technologies',
      color: 'from-blue-500 to-cyan-400',
      details: [
        'React, Next.js, Node.js, Express.js applications',
        'PHP & MySQL/MongoDB backend solutions',
        'Responsive designs with Tailwind CSS',
        'API integration & authentication systems',
        'Payment gateway implementation',
        'Deployment on Vercel, Netlify, AWS'
      ],
      tech: [<SiReact />, <SiNextdotjs />, <SiNodedotjs />, <SiPhp />, <SiTailwindcss />]
    },
    {
      id: 'mobile',
      title: 'Mobile App Development',
      icon: <FaMobileAlt className="text-4xl" />,
      description: 'Cross-platform mobile applications',
      color: 'from-purple-500 to-pink-500',
      details: [
        'Flutter & Kotlin mobile applications',
        'Android & iOS cross-platform apps',
        'Smooth UI/UX with optimized performance',
        'Firebase integration & cloud services',
        'REST API connectivity',
        'App Store & Play Store deployment'
      ],
      tech: [<SiFlutter />, <SiFirebase />]
    },
    {
      id: 'backend',
      title: 'Database & Backend Solutions',
      icon: <FaDatabase className="text-4xl" />,
      description: 'Scalable backend architecture',
      color: 'from-green-500 to-emerald-400',
      details: [
        'MongoDB, MySQL, PostgreSQL design',
        'RESTful API & GraphQL development',
        'Secure backend architecture',
        'High-performance applications',
        'Database optimization',
        'Cloud database management'
      ],
      tech: [<SiMongodb />, <SiMysql />, <SiGraphql />]
    },
    {
      id: 'ai',
      title: 'AI & Machine Learning',
      icon: <FaBrain className="text-4xl" />,
      description: 'Intelligent system integration',
      color: 'from-yellow-500 to-orange-500',
      details: [
        'Python AI/ML algorithms',
        'Data analysis & predictive modeling',
        'Intelligent system integration',
        'Automation solutions',
        'Recommendation systems',
        'Business intelligence tools'
      ],
      tech: [<SiPython />]
    },
    {
      id: 'blockchain',
      title: 'Blockchain & Smart Contracts',
      icon: <FaEthereum className="text-4xl" />,
      description: 'Decentralized application development',
      color: 'from-gray-700 to-yellow-600',
      details: [
        'Ethereum blockchain development',
        'Smart contract programming',
        'Tokenization solutions',
        'On-chain/Off-chain integration',
        'Decentralized apps (dApps)',
        'Blockchain consulting'
      ],
      tech: [<FaEthereum />]
    },
    {
      id: 'consultation',
      title: 'Consultation & Management',
      icon: <FaProjectDiagram className="text-4xl" />,
      description: 'Technical guidance & project delivery',
      color: 'from-indigo-500 to-purple-400',
      details: [
        'Technical consultation for startups',
        'Project planning & software architecture',
        'Team collaboration & Agile methodology',
        'Timely project delivery',
        'Quality assurance & testing',
        'Post-deployment support'
      ],
      tech: [<FaUsers />, <FaChartLine />]
    }
  ];

  const activeService = services.find(service => service.id === activeTab) || services[0];

  return (
    <section id="services" className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services I Offer
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            End-to-end software engineering solutions with expertise in building robust, scalable, and user-friendly applications.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === service.id
                    ? `bg-gradient-to-r ${service.color} text-white shadow-lg transform -translate-y-1`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {service.icon}
                <span>{service.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Service Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Service Description */}
          <div className="space-y-8">
            <div className={`p-1 rounded-2xl bg-gradient-to-r ${activeService.color}`}>
              <div className="bg-white rounded-xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${activeService.color} bg-opacity-10`}>
                    {activeService.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">{activeService.title}</h2>
                    <p className="text-gray-600">{activeService.description}</p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {activeService.details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <FaCheckCircle className={`text-green-500 mt-1 flex-shrink-0`} />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="mt-8 pt-8 border-t">
                  <h4 className="font-bold text-gray-700 mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {activeService.tech.map((tech, index) => (
                      <div key={index} className="p-3 bg-gray-100 rounded-lg">
                        <span className="text-2xl text-gray-700">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Ready to Start Your Project?</h3>
                  <p className="text-gray-600">Let's discuss how I can help bring your ideas to life.</p>
                </div>
                <a
                  href="#contact"
                  className="group inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  <span>Get Started</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-3">
                <FaShieldAlt className="text-blue-500" />
                <span>Why Choose My Services</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="p-3 rounded-lg bg-blue-100">
                    <FaRocket className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Fast Delivery</h4>
                    <p className="text-gray-600">Timely project completion with agile methodology</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="p-3 rounded-lg bg-green-100">
                    <FaBolt className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">High Performance</h4>
                    <p className="text-gray-600">Optimized, scalable solutions for best results</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="p-3 rounded-lg bg-purple-100">
                    <FaLayerGroup className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Full-Stack Expertise</h4>
                    <p className="text-gray-600">End-to-end development from frontend to deployment</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="p-3 rounded-lg bg-yellow-100">
                    <FaSyncAlt className="text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Continuous Support</h4>
                    <p className="text-gray-600">Maintenance and updates after deployment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">My Process</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">1</div>
                  <div>
                    <h4 className="font-bold">Discovery & Planning</h4>
                    <p className="text-gray-300 text-sm">Understanding requirements and planning</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">2</div>
                  <div>
                    <h4 className="font-bold">Design & Development</h4>
                    <p className="text-gray-300 text-sm">Creating prototypes and building features</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">3</div>
                  <div>
                    <h4 className="font-bold">Testing & Deployment</h4>
                    <p className="text-gray-300 text-sm">Quality assurance and live deployment</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">4</div>
                  <div>
                    <h4 className="font-bold">Support & Maintenance</h4>
                    <p className="text-gray-300 text-sm">Ongoing support and updates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Services Grid */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Complete Service Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore all the services I offer for your digital transformation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 ${
                activeTab === service.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveTab(service.id)}
            >
              <div className={`p-8 rounded-t-2xl bg-gradient-to-r ${service.color}`}>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-bold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.details.slice(0, 3).map((detail, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" size={12} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex space-x-2">
                    {service.tech.map((tech, index) => (
                      <span key={index} className="text-gray-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="text-blue-600 hover:text-blue-700">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Banner */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <FaHandshake className="text-5xl mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing Together</h2>
            <p className="text-lg mb-8 opacity-90">
              Have a project in mind? Let's discuss how we can create innovative solutions for your business.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-colors"
            >
              <span>Start Your Project Now</span>
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;