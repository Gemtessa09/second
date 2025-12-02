import React from 'react';
import { 
  FaCertificate, 
  FaAward, 
  FaTrophy, 
  FaMedal, 
  FaGraduationCap,
  FaUniversity,
  FaRocket,
  FaShieldAlt,
  FaCode,
  FaGlobe,
  FaCalendarAlt,
  FaDownload,
  FaExternalLinkAlt,
  FaStar
} from 'react-icons/fa';
import { 
  SiGoogle, 
  SiUdacity,
  SiPython,
  SiReact
} from 'react-icons/si';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Fundamentals of Web Programming & Android Development",
      issuer: "Udacity",
      icon: <SiUdacity className="text-4xl text-blue-500" />,
      date: "2023",
      description: "Comprehensive training in modern web development and mobile application programming",
      skills: ["HTML/CSS", "JavaScript", "Android", "Responsive Design"],
      color: "from-blue-500 to-cyan-400",
      featured: true
    },
    {
      id: 2,
      title: "Advanced Digital Skills Training",
      issuer: "Google Eshay Program",
      icon: <SiGoogle className="text-4xl text-green-500" />,
      date: "2023",
      description: "Advanced digital literacy and technical skills development program",
      skills: ["Digital Marketing", "Analytics", "Cloud Tools", "Productivity"],
      color: "from-green-500 to-emerald-400",
      featured: true
    },
    {
      id: 3,
      title: "Technology and Innovation Program",
      issuer: "STEM Power Ethiopia & UNESCO",
      icon: <FaGlobe className="text-4xl text-purple-500" />,
      date: "2022",
      description: "STEM education focusing on technology innovation and scientific principles",
      skills: ["STEM Education", "Innovation", "Research", "Technology"],
      color: "from-purple-500 to-pink-500",
      featured: false
    },
    {
      id: 4,
      title: "Educational and STEM Certification",
      issuer: "Ethiopian Ministry of Education",
      icon: <FaUniversity className="text-4xl text-red-500" />,
      date: "2022",
      description: "Certification in STEM education and pedagogical approaches",
      skills: ["Education", "STEM", "Teaching Methods", "Curriculum"],
      color: "from-red-500 to-orange-500",
      featured: false
    },
    {
      id: 5,
      title: "Peace and Development Training",
      issuer: "Ministry of Peace",
      icon: <FaGlobe className="text-4xl text-teal-500" />,
      date: "2022",
      description: "Training in peacebuilding, conflict resolution, and community development",
      skills: ["Peacebuilding", "Leadership", "Community Dev", "Conflict Resolution"],
      color: "from-teal-500 to-blue-400",
      featured: false
    },
    {
      id: 6,
      title: "Cybersecurity & Software Development",
      issuer: "INSA TECH",
      icon: <FaShieldAlt className="text-4xl text-indigo-500" />,
      date: "2023",
      description: "Intensive training in cybersecurity and professional software development",
      skills: ["Cybersecurity", "Networking", "Python", "System Security"],
      color: "from-indigo-500 to-purple-400",
      featured: true
    },
    {
      id: 7,
      title: "Advanced Coding and Software Engineering",
      issuer: "AASTU Talent Center",
      icon: <FaCode className="text-4xl text-yellow-500" />,
      date: "2023",
      description: "Advanced software engineering principles and coding best practices",
      skills: ["Algorithms", "Data Structures", "OOP", "Software Design"],
      color: "from-yellow-500 to-orange-400",
      featured: true
    }
  ];

  const categories = [
    { name: "All", count: certificates.length },
    { name: "Featured", count: certificates.filter(c => c.featured).length },
    { name: "Technology", count: 5 },
    { name: "Education", count: 3 },
    { name: "Professional", count: 4 }
  ];

  return (
    <section id="certificates" className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Certificates & Achievements
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Recognitions, certifications, and achievements earned through dedication and continuous learning
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <FaCertificate className="text-3xl text-blue-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-800">{certificates.length}</div>
            <div className="text-gray-600">Certificates</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <FaAward className="text-3xl text-purple-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-800">4</div>
            <div className="text-gray-600">Featured</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <FaUniversity className="text-3xl text-green-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-800">7</div>
            <div className="text-gray-600">Institutions</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <FaCalendarAlt className="text-3xl text-yellow-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-800">3</div>
            <div className="text-gray-600">Years</div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium">{category.name}</span>
              <span className="ml-2 text-sm text-gray-500">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                cert.featured ? 'ring-2 ring-yellow-400' : ''
              }`}
            >
              {/* Featured Badge */}
              {cert.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm">
                    <FaStar className="text-xs" />
                    <span>Featured</span>
                  </div>
                </div>
              )}

              {/* Certificate Header */}
              <div className={`p-8 bg-gradient-to-r ${cert.color}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{cert.issuer}</h3>
                      <div className="flex items-center space-x-2 text-white/80">
                        <FaCalendarAlt className="text-sm" />
                        <span className="text-sm">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                  <FaCertificate className="text-2xl text-white/50" />
                </div>
              </div>

              {/* Certificate Body */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-3">{cert.title}</h4>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                
                {/* Skills */}
                <div className="mb-6">
                  <h5 className="font-medium text-gray-700 mb-2">Skills Gained:</h5>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View Certificate
                  </button>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-500 hover:text-blue-600">
                      <FaDownload />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-green-600">
                      <FaExternalLinkAlt />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <FaTrophy className="text-5xl text-yellow-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Certificate of Achievement
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              This is to certify that <span className="font-bold text-blue-600">Gemtessa Deksisa Tolera</span> has successfully completed the following programs and training:
            </p>
            
            <div className="bg-white rounded-xl p-6 mb-6">
              <ul className="space-y-3 text-left">
                <li className="flex items-center space-x-3">
                  <FaCheck className="text-green-500" />
                  <span>Udacity – Fundamentals of Web Programming & Android Development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheck className="text-green-500" />
                  <span>Google Eshay Program – Advanced Digital Skills Training</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheck className="text-green-500" />
                  <span>STEM Power Ethiopia & UNESCO – Technology and Innovation Program</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheck className="text-green-500" />
                  <span>Ethiopian Ministry of Education – Educational and STEM Certification</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheck className="text-green-500" />
                  <span>Ministry of Peace – Peace and Development Training</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheck className="text-green-500" />
                  <span>INSA TECH – Cybersecurity & Software Development Training</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheck className="text-green-500" />
                  <span>AASTU Talent Center – Advanced Coding and Software Engineering</span>
                </li>
              </ul>
            </div>
            
            <p className="text-gray-700 italic">
              Awarded in recognition of dedication, skill, and commitment to continuous learning and excellence in the field of software engineering and technology.
            </p>
          </div>
        </div>

        {/* Download Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-shadow">
              <FaDownload />
              <span>Download All Certificates (PDF)</span>
            </button>
            
            <button className="inline-flex items-center justify-center space-x-3 px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors">
              <FaExternalLinkAlt />
              <span>View Verified Credentials</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Missing FaCheck component
const FaCheck = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>
);

export default Certificates;