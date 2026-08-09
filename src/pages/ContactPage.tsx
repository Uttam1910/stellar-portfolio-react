import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { SEOHead } from '../components/SEOHead';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.uttamthapa.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://www.uttamthapa.com/contact"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <SEOHead
        title="Contact Uttam Thapa — Full-Stack Software Engineer"
        description="Get in touch with Uttam Thapa for full-stack software engineering opportunities, backend development, AI projects, or technical inquiries."
        canonicalUrl="https://www.uttamthapa.com/contact"
        jsonLd={breadcrumbJsonLd}
      />
      <Header />

      <main className="flex-1 pt-2 sm:pt-4 pb-12">
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};
