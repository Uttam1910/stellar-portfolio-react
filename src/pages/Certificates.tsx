import React from 'react';
import { FaDownload as FaDownloadIcon, FaExternalLinkAlt as FaExternalLinkAltIcon, FaCertificate as FaCertificateIcon } from 'react-icons/fa';

// ✅ Fix icon typing for TypeScript
const FaDownload = FaDownloadIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const FaExternalLinkAlt = FaExternalLinkAltIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const FaCertificate = FaCertificateIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;

// Array of certificate sections
const certificateSections = [
  {
    category: 'Internships Certificates',
    certificates: [
      {
        title: 'Web Development Internship',
        issuer: 'Internpe',
        date: 'June 2024',
        file: '/Certificates/certificate6.pdf', 
      },
      {
        title: 'Software Development Internship',
        issuer: 'Prodigy InfoTech',
        date: 'September 2024',
        file: '/Certificates/prodigyinfotech.pdf',
      },
    ],
  },
  {
    category: 'Offer Letters',
    certificates: [
      {
        title: 'Web Development',
        issuer: 'Internpe',
        date: 'June 2024',
        file: '/Certificates/offer.png',
      },
      {
        title: 'Software Development Offer Letter',
        issuer: 'Prodigy InfoTech',
        date: 'September 2024',
        file: '/Certificates/prodigy.pdf',
      },
    ],
  },
  {
    category: 'Hackathon Certificates',
    certificates: [
      {
        title: 'Recursion',
        issuer: 'RGIT Codecell and Cess',
        date: 'March 2024',
        file: '/Certificates/Recursion.png',
      },
      {
        title: 'Ideathon',
        issuer: 'RGIT',
        date: 'Feb 2024',
        file: '/Certificates/Idea.png',
      },
    ],
  },
  {
    category: 'Courses',
    certificates: [
      {
        title: 'FULL STACK WEB DEVELOPMENT',
        issuer: 'pwskills',
        date: '3rd July 2024',
        file: '/Certificates/webdev.pdf',
      },
      {
        title: 'BACKEND DEVELOPMENT COURSE',
        issuer: 'pwskills',
        date: '24 March 2024',
        file: '/Certificates/certificate1.pdf',
      },
      {
        title: 'Google Cloud career readiness Associate Cloud Engineer track',
        issuer: 'Google Cloud',
        date: '8 April 2024',
        file: '/Certificates/certificate2.pdf',
      },
    ],
  },
  {
    category: 'Others',
    certificates: [
      {
        title: 'FOUNDATIONS OF STOCK TRADING',
        issuer: 'pwskills',
        date: 'June 2024',
        file: '/Certificates/Stock.pdf',
      },
    ],
  },
  {
    category: 'Letters of Recommendation',
    certificates: [
      {
        title: 'Letter of Recommendation from ProdigyInfoTech',
        issuer: 'ProdigyInfoTech',
        date: 'Oct 2024',
        file: '/Certificates/LOR.pdf',
      },
    ],
  },
];

const Certificates: React.FC = () => {
  return (
    <main className="flex-1 min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-delayed"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      {/* Main content - centered */}
      <section className="relative z-10 flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="w-full max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <p className="text-teal-400 font-mono text-sm sm:text-base opacity-70">
              <span className="text-gray-500">&lt;</span>certificates
              <span className="text-gray-500">/&gt;</span>
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              My <span className="text-teal-400">Certificates</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Certificates and achievements from internships, courses, and hackathons
            </p>
          </div>

          {/* Certificate Sections */}
          <div className="space-y-8">
            {certificateSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="animate-fade-in-delay" style={{ animationDelay: `${sectionIndex * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-6">
                  <FaCertificate className="text-teal-400 text-2xl" />
                  <h2 className="text-3xl font-bold text-white border-b-2 border-teal-500/50 pb-2">
                    {section.category}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.certificates.map((certificate, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 rounded-lg p-6 hover:border-teal-500/40 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 transform hover:scale-105"
                    >
                      <h3 className="text-lg font-bold text-white mb-2">{certificate.title}</h3>
                      <p className="text-teal-400 font-semibold mb-2">{certificate.issuer}</p>
                      <p className="text-gray-400 text-sm mb-4 flex items-center">
                        <i className="fas fa-calendar-alt mr-2"></i>
                        {certificate.date}
                      </p>
                      <div className="flex flex-wrap gap-3 mt-4">
                        <a
                          href={certificate.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-2 bg-teal-500/20 hover:bg-teal-500/30 text-teal-400 rounded-lg transition-all duration-300 border border-teal-500/30 hover:border-teal-500/50 text-sm"
                        >
                          <FaExternalLinkAlt className="mr-2 w-3.5 h-3.5" />
                          View
                        </a>
                        <a
                          href={certificate.file}
                          download
                          className="inline-flex items-center px-3 py-2 bg-teal-500/20 hover:bg-teal-500/30 text-teal-400 rounded-lg transition-all duration-300 border border-teal-500/30 hover:border-teal-500/50 text-sm"
                        >
                          <FaDownload className="mr-2 w-3.5 h-3.5" />
                          Download
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Certificates;
