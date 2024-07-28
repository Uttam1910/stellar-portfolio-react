import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Home: React.FC = () => {
  useEffect(() => {
    const typed = new Typed('#typed-element', {
      strings: ['A Web Developer.', 'A Software Developer.', 'A Pythonist.', 'An Engineering Student.'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 lg:p-10 bg-gray-100 text-center">
      <section id="intro" className="max-w-4xl lg:ml-64">
        <h1 className="text-4xl mb-4">Hi, I'm Uttam</h1>
        <p className="text-lg mb-4"><span id="typed-element"></span></p>
        <p className="text-lg mb-8">A highly motivated and enthusiastic programmer with a passion for solving complex real-world problems. With a curious and analytical mind, I thrive in challenging environments and consistently deliver innovative solutions. My self-driven attitude and quick adaptability make me a valuable asset in any project or team.</p>
        
        <div className="social-links flex justify-center mb-8 space-x-4">
          <a href="https://www.linkedin.com/in/uttam-thapa-1798a925a/" target="_blank" rel="noopener noreferrer" className="text-teal-500 text-3xl hover:text-teal-400">
            <BsLinkedin />
          </a>
          <a href="https://github.com/uttam1910" target="_blank" rel="noopener noreferrer" className="text-teal-500 text-3xl hover:text-teal-400">
            <BsGithub />
          </a>
        </div>
        
        <div className="buttons flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4">
          <a href="/about" className="bg-teal-500 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-900 hover:text-teal-500 border border-teal-500">Read More</a>
          <a href="/contact" className="bg-teal-500 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-900 hover:text-teal-500 border border-teal-500">Contact Me</a>
        </div>
      </section>
    </main>
  );
};

export default Home;
