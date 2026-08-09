import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { FaArrowLeft } from 'react-icons/fa';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between font-sans">
      <SEOHead
        title="404 — Page Not Found | Uttam Thapa"
        description="The requested route does not exist on Uttam Thapa's software engineering portfolio."
        canonicalUrl="https://www.uttamthapa.com/404"
      />
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-24 text-center space-y-6 max-w-2xl mx-auto">
        <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">
          ERROR 404
        </div>
        <h1 className="font-sans text-4xl sm:text-5xl font-bold text-white tracking-tight">
          Page Not Found
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          The requested URL path does not exist on this engineering portfolio. Please return to the homepage or explore selected projects.
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold text-xs transition-colors"
          >
            <FaArrowLeft />
            <span>Return to Portfolio Home</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};
