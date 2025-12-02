import React, { useState } from 'react';
import { 
  FaCode, 
  FaMobileAlt, 
  FaDatabase, 
  FaUniversity, 
  FaHospital,
  FaUserMd,
  FaCalculator,
  FaQrcode,
  FaExternalLinkAlt,
  FaGithub,
  FaStar,
  FaRocket,
  FaCheckCircle,
  FaFilter,
  FaArrowRight
} from 'react-icons/fa';
import { 
  SiReact, 
  SiFlutter, 
  SiNodedotjs, 
  SiPhp,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiAndroid
} from 'react-icons/si';

const MyWork = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Haramaya University PCS Management System",
      description: "A MERN stack PCS Management System built for Haramaya University to digitalize student personal case services. It enables secure student registration, case reporting, counselor review, and appointment scheduling. With role-based access, real-time updates, and a modern dashboard, it improves communication and streamlines PCS operations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop",
      tech: [
        { name: "HTML", icon: <FaCode className="text-orange-500" /> },
        { name: "CSS", icon: <FaCode className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaCode className="text-yellow-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Express", icon: <SiNodedotjs className="text-gray-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
        { name: "React", icon: <SiReact className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-500" /> }
      ],
      category: "delivered",
      featured: true,
      status: "Delivered Project",
      statusIcon: <FaCheckCircle className="text-green-500" />,
      github: "https://github.com",
      live: "https://example.com",
      type: "web"
    },
    {
      id: 2,
      title: "School Management System",
      description: "A full-stack School Management System for managing student records, class schedules, attendance, grades, and staff information. Built with modern web technologies to ensure efficiency, scalability, and seamless administration of academic and administrative tasks.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop",
      tech: [
        { name: "HTML", icon: <FaCode className="text-orange-500" /> },
        { name: "CSS", icon: <FaCode className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaCode className="text-yellow-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Express", icon: <SiNodedotjs className="text-gray-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
        { name: "React", icon: <SiReact className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-500" /> }
      ],
      category: "delivered",
      featured: true,
      status: "Delivered Project",
      statusIcon: <FaCheckCircle className="text-green-500" />,
      github: "https://github.com",
      live: "https://example.com",
      type: "web"
    },
    {
      id: 3,
      title: "Hospital Management System",
      description: "A full-stack hospital management system for handling patient records, appointments, billing, and staff management. Built with modern web technologies to ensure efficiency and scalability.",
      image: "https://images.unsplash.com/photo-1516549655669-df565bcb5f3d?w=500&auto=format&fit=crop",
      tech: [
        { name: "HTML", icon: <FaCode className="text-orange-500" /> },
        { name: "CSS", icon: <FaCode className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaCode className="text-yellow-400" /> },
        { name: "PHP", icon: <SiPhp className="text-purple-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> }
      ],
      category: "delivered",
      featured: false,
      status: "Delivered Project",
      statusIcon: <FaCheckCircle className="text-green-500" />,
      github: "https://github.com",
      live: "https://example.com",
      type: "web"
    },
    {
      id: 4,
      title: "Smart ID System",
      description: "A secure smart ID system for campus facilities, including QR code authentication and access control. Developed with Java, image processing, and database integration.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&auto=format&fit=crop",
      tech: [
        { name: "Java", icon: <SiFlutter className="text-red-500" /> },
        { name: "JDBC", icon: <FaDatabase className="text-blue-500" /> },
        { name: "QR Code", icon: <FaQrcode className="text-purple-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> }
      ],
      category: "featured",
      featured: true,
      status: "Featured Project",
      statusIcon: <FaStar className="text-yellow-500" />,
      github: "https://github.com",
      live: "https://example.com",
      type: "mobile"
    },
    {
      id: 5,
      title: "Doctor's Book Appointment System",
      description: "An online appointment booking system for clinics and service centers, allowing users to schedule, manage, and receive notifications for appointments.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&auto=format&fit=crop",
      tech: [
        { name: "HTML", icon: <FaCode className="text-orange-500" /> },
        { name: "CSS", icon: <FaCode className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaCode className="text-yellow-400" /> },
        { name: "PHP", icon: <SiPhp className="text-purple-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> }
      ],
      category: "featured",
      featured: true,
      status: "Featured Project",
      statusIcon: <FaStar className="text-yellow-500" />,
      github: "https://github.com",
      live: "https://example.com",
      type: "web"
    },
    {
      id: 6,
      title: "Scientific Calculator",
      description: "A feature-rich scientific calculator application built with Flutter for Android. Supports trigonometry, powers, roots, and both degree and radian modes.",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=500&auto=format&fit=crop",
      tech: [
        { name: "Flutter", icon: <SiFlutter className="text-blue-500" /> },
        { name: "Android", icon: <SiAndroid className="text-green-500" /> },
        { name: "Dart", icon: <FaCode className="text-blue-400" /> },
        { name: "Kotlin", icon: <SiFlutter className="text-purple-500" /> },
        { name: "Java", icon: <SiReact className="text-red-500" /> }
      ],
      category: "development",
      featured: false,
      status: "In Development",
      statusIcon: <FaRocket className="text-blue-500" />,
      github: "https://github.com",
      live: "https://example.com",
      type: "mobile"
    },
    {
      id: 7,
      title: "CTF Exam Platform",
      description: "A Capture The Flag (CTF) examination platform for cybersecurity training and competitions. Features challenges, scoring system, and real-time leaderboards.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop",
      tech: [
        { name: "React", icon: <SiReact className="text-blue-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Express", icon: <SiNodedotjs className="text-gray-400" /> },
        { name: "Cyber Security", icon: <FaCode className="text-red-500" /> }
      ],
      category: "featured",
      featured: true,
      status: "Featured Project",
      statusIcon: <FaStar className="text-yellow-500" />,
      github: "https://github.com",
      live: "https://example.com",
      type: "web"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'featured', label: 'Featured', count: projects.filter(p => p.featured).length },
    { id: 'delivered', label: 'Delivered', count: projects.filter(p => p.category === 'delivered').length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.type === 'web').length },
    { id: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.type === 'mobile').length }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    if (activeFilter === 'delivered') return project.category === 'delivered';
    if (activeFilter === 'web') return project.type === 'web';
    if (activeFilter === 'mobile') return project.type === 'mobile';
    return true;
  });

  const displayProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="work" className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Projects
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Showcasing innovative projects that blend creativity with technical expertise
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600">{projects.length}</div>
            <div className="text-gray-600">Total Projects</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600">{projects.filter(p => p.featured).length}</div>
            <div className="text-gray-600">Featured</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600">{projects.filter(p => p.category === 'delivered').length}</div>
            <div className="text-gray-600">Delivered</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600">{projects.filter(p => p.type === 'web').length}</div>
            <div className="text-gray-600">Web Apps</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FaFilter className="text-sm" />
              <span>{filter.label}</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 mb-12">
          {displayProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="md:flex">
                {/* Project Image */}
                <div className="md:w-2/5 relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {project.statusIcon}
                      <span>{project.status}</span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="md:w-3/5 p-6 md:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <div className="inline-flex items-center space-x-1 bg-gradient-to-r from-yellow-50 to-orange-50 text-yellow-700 px-3 py-1 rounded-full text-sm">
                          <FaStar className="text-yellow-500" />
                          <span>Featured</span>
                        </div>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <a 
                        href={project.github}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                        title="GitHub"
                      >
                        <FaGithub className="text-gray-700" />
                      </a>
                      <a 
                        href={project.live}
                        className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt className="text-blue-600" />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-700 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <div 
                          key={index}
                          className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg"
                        >
                          {tech.icon}
                          <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {project.type === 'web' ? (
                        <>
                          <FaCode className="text-blue-500" />
                          <span className="text-sm text-gray-600">Web Application</span>
                        </>
                      ) : (
                        <>
                          <FaMobileAlt className="text-green-500" />
                          <span className="text-sm text-gray-600">Mobile Application</span>
                        </>
                      )}
                    </div>
                    <a 
                      href={project.live}
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <span>Live Demo</span>
                      <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 3 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-xl transition-all"
            >
              <span>{showAll ? 'Show Less Projects' : `Show All ${filteredProjects.length} Projects`}</span>
              <FaArrowRight className={showAll ? 'rotate-180' : ''} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyWork;