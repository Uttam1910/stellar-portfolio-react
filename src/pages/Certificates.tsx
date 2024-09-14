import React from 'react';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const certificates = [
  {
    title: 'Web Development Bootcamp',
    issuer: 'Udemy',
    date: 'August 2023',
    link: 'https://www.udemy.com/certificate/123456',
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: 'July 2023',
    link: 'https://www.freecodecamp.org/certification/123456',
  },
  {
    title: 'React Developer Certification',
    issuer: 'Coursera',
    date: 'June 2023',
    link: 'https://www.coursera.org/certificate/123456',
  },
  {
    title: 'Frontend Development with HTML, CSS, and JS',
    issuer: 'Codecademy',
    date: 'May 2023',
    link: 'https://www.codecademy.com/certificate/123456',
  },
  {
    title: 'Python for Data Science',
    issuer: 'DataCamp',
    date: 'April 2023',
    link: 'https://www.datacamp.com/certificate/123456',
  },
  {
    title: 'AI and Machine Learning Fundamentals',
    issuer: 'Stanford Online',
    date: 'March 2023',
    link: 'https://online.stanford.edu/certificates/123456',
  },
];

const Certificates: React.FC = () => {
  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <section id="certificates" className="bg-white shadow-md rounded-lg p-6 lg:ml-64 mx-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Certificates</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="certificate-item border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-700">{certificate.title}</h2>
              <p className="text-gray-500">{certificate.issuer}</p>
              <p className="text-gray-600"><i className="fas fa-calendar-alt mr-2"></i>{certificate.date}</p>
              <div className="mt-4 flex justify-between items-center">
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  View Certificate
                </a>
                <a
                  href={certificate.link} // replace this with a direct download link if available
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
      </section>
    </main>
  );
};

export default Certificates;
