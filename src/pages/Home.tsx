import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Home: React.FC = () => {
  useEffect(() => {
    const typed = new Typed('#typed-element', {
      strings: ['A Pythonist.', 'A Software Developer.', 'A Web Designer.', 'An Engineering Student.'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main className="flex-1 p-10 flex flex-col items-center justify-center text-center overflow-y-auto">
      <section id="intro" className="max-w-4xl">
        <h1 className="text-4xl mb-4">Hi, I'm Uttam</h1>
        <p className="text-lg mb-4"><span id="typed-element"></span></p>
        <p className="text-lg mb-8">Self-driven, quick starter, passionate programmer with a curious mind who enjoys solving complex and challenging real-world problems.</p>
        
        <div className="social-links flex justify-center mb-8 space-x-4">
          <a href="https://www.linkedin.com/in/uttam-thapa-1798a925a/" target="_blank" className="text-teal-500 text-3xl hover:text-teal-400">
            <BsLinkedin />
          </a>
          <a href="https://github.com/uttam1910" target="_blank" className="text-teal-500 text-3xl hover:text-teal-400">
            <BsGithub />
          </a>
        </div>
        
        <div className="buttons flex justify-center space-x-4">
          <a href="/about" className="btn bg-teal-500 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-900 hover:text-teal-500 border border-teal-500">Read More</a>
          <a href="/contact" className="btn bg-teal-500 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-900 hover:text-teal-500 border border-teal-500">Contact Me</a>
        </div>
      </section>
    </main>
  );
};

export default Home;


