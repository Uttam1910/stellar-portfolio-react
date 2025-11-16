import React, { useEffect, useMemo, useState } from 'react';
import Typed from 'typed.js';
import { BsLinkedin as BsLinkedinIcon, BsGithub as BsGithubIcon } from 'react-icons/bs';
import { Link } from 'react-router-dom';

// ✅ TypeScript-safe casting for react-icons
const BsLinkedin = BsLinkedinIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const BsGithub = BsGithubIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;

const Home: React.FC = React.memo(() => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const typedStrings = useMemo(
    () => [
      'A Full Stack Developer.',
      'A Software Developer.',
      'A Web Developer.',
      'A Pythonist.',
    ],
    []
  );

  useEffect(() => {
    const typed = new Typed('#typed-element', {
      strings: typedStrings,
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, [typedStrings]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="flex-1 min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white relative overflow-hidden">
      {/* Animated background elements - subtle and modern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-delayed"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-teal-500/3 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-cyan-500/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      {/* Main content - centered in available space */}
      <section
        id="intro"
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 lg:py-20"
      >
        <div className="w-full max-w-4xl mx-auto text-center space-y-8">
          {/* Greeting */}
          <div className="animate-fade-in">
            <p className="text-teal-400 font-mono text-sm sm:text-base mb-4 opacity-70">
              <span className="text-gray-500">&lt;</span>greeting
              <span className="text-gray-500">/&gt;</span>
            </p>
          </div>

          {/* Main heading */}
          <div className="animate-slide-up space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="text-teal-400 animate-float">Hi,</span>
              <br />
              <span className="text-white bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">I'm Uttam</span>
              <span className="text-teal-400 animate-blink">_</span>
            </h1>
          </div>

          {/* Typed text */}
          <div className="animate-fade-in-delay">
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium">
              <span className="text-gray-300">I'm </span>
              <span
                id="typed-element"
                className="text-teal-400 font-semibold bg-teal-500/20 px-3 py-1 rounded-md border border-teal-500/30 hover:border-teal-500/60 transition-all duration-300 hover:shadow-glow"
              ></span>
            </p>
          </div>

          {/* Description */}
          <div className="animate-fade-in-delay-2 space-y-4 max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed transition-all duration-300 hover:text-gray-200">
              A highly motivated and enthusiastic programmer with a passion for solving
              complex real-world problems. With a curious and analytical mind, I thrive in
              challenging environments and consistently deliver innovative solutions.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed transition-all duration-300 hover:text-gray-200">
              My self-driven attitude and quick adaptability make me a valuable asset in any
              project or team.
            </p>
          </div>

          {/* Social links */}
          <div className="flex justify-center items-center gap-6 pt-4 animate-fade-in-delay-3">
            <a
              href="https://www.linkedin.com/in/uttam-thapa-1798a925a/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 hover:border-teal-500/50 transition-all duration-300 transform hover:scale-110 active:scale-95 hover-lift"
              aria-label="LinkedIn Profile"
            >
              <span className="absolute inset-0 bg-teal-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
              <BsLinkedin className="text-teal-400 text-2xl sm:text-3xl group-hover:text-white transition-colors duration-300 relative z-10" />
            </a>
            <a
              href="https://github.com/uttam1910"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 hover:border-teal-500/50 transition-all duration-300 transform hover:scale-110 active:scale-95 hover-lift"
              aria-label="GitHub Profile"
            >
              <span className="absolute inset-0 bg-teal-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
              <BsGithub className="text-teal-400 text-2xl sm:text-3xl group-hover:text-white transition-colors duration-300 relative z-10" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6 animate-fade-in-delay-4">
            <Link
              to="/about"
              className="group relative px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-gray-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/50 min-w-[160px] text-center active:scale-95 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Read More
                <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </Link>
            <Link
              to="/contact"
              className="group relative px-8 py-3 bg-transparent border-2 border-teal-500 text-teal-400 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-teal-500 min-w-[160px] text-center active:scale-95 overflow-hidden"
            >
              <span className="absolute inset-0 bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Contact Me
                <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
});

Home.displayName = 'Home';

export default Home;