import React from 'react';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

// Array of certificate sections
const certificateSections = [
  {
    category: 'Internships Certificates',
    certificates: [
      {
        title: 'Web Development Internship',
        issuer: 'Interpe',
        date: 'june 2024',
        file: '/certificates/certificate6.pdf', // Public file path
      },
      // {
      //   title: 'Frontend Development with HTML, CSS, and JS',
      //   issuer: 'Codecademy',
      //   date: 'May 2023',
      //   file: '/certificates/certificate4.png',
      // },
    ],
  },
  {
    category: 'Offer Letters',
    certificates: [
      {
        title: 'Web development',
        issuer: 'Internpe',
        date: 'June 2024',
        file: '/certificates/offer.png',
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
        file: '/certificates/recursion.png',
      },

      {
        title: 'Ideathon',
        issuer: 'RGIT',
        date: 'Feb 2024',
        file: '/certificates/idea.png',
      },
    ],
  },
  // {
  //   category: 'Workshops & Seminars',
  //   certificates: [
  //     {
  //       title: 'Python for Data Science',
  //       issuer: 'DataCamp',
  //       date: 'April 2023',
  //       file: '/certificates/certificate5.png',
  //     },
  //   ],
  // },
  {
    category: 'Courses',
    certificates: [
      {
        title: 'FULL STACK WEB DEVELOPMENT',
        issuer: 'pwskills',
        date: '3rd July 2024',
        file: '/certificates/webdev.pdf',
      },

      {
        title: 'BACKEND DEVELOPMENT COURSE',
        issuer: 'pwskills',
        date: '24 March 2024',
        file: '/certificates/certificate1.pdf',
      },

      {
        title: 'Google Cloud career readiness Associate Cloud Engineer track',
        issuer: 'Google Cloud',
        date: '8 April 2024',
        file: '/certificates/certificate2.pdf',
      },
    ],
  },
  // {
  //   category: 'Others',
  //   certificates: [
  //     {
  //       title: 'Other Certificate Example',
  //       issuer: 'Random Issuer',
  //       date: 'January 2023',
  //       file: '/certificates/certificate7.pdf',
  //     },
  //   ],
  // },

  {
    category: 'Others',
    certificates: [
      {
        title: 'FOUNDATIONS OF STOCK TRADING',
        issuer: 'pwskills',
        date: 'June 2024',
        file: '/certificates/stock.pdf',
      },
    ],
  },
];

const Certificates: React.FC = () => {
  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <section id="certificates" className="bg-white shadow-md rounded-lg p-6 lg:ml-64 mx-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Certificates</h1>

        {certificateSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-2 border-blue-500 pb-2">
              {section.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.certificates.map((certificate, index) => (
                <div
                  key={index}
                  className="certificate-item border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-700">{certificate.title}</h3>
                  <p className="text-gray-500">{certificate.issuer}</p>
                  <p className="text-gray-600"><i className="fas fa-calendar-alt mr-2"></i>{certificate.date}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <a
                      href={certificate.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      View Certificate
                    </a>

                    <a
                      href={certificate.file}
                      download
                      className="text-green-600 hover:text-green-800 flex items-center"
                    >
                      <FaDownload className="mr-2" />
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Certificates;
