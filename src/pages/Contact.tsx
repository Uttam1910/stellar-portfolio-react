import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin as FaLinkedinIcon, FaGithub as FaGithubIcon, FaEnvelope as FaEnvelopeIcon, FaTwitter as FaTwitterIcon, FaCheckCircle as FaCheckCircleIcon, FaDownload as FaDownloadIcon } from 'react-icons/fa';

// ✅ TypeScript-safe casts for react-icons
const FaLinkedin = FaLinkedinIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const FaGithub = FaGithubIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const FaEnvelope = FaEnvelopeIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const FaTwitter = FaTwitterIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const FaCheckCircle = FaCheckCircleIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const FaDownload = FaDownloadIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = 'service_buykzno';
    const templateID = 'template_abvk0hf';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

    // @ts-ignore
    emailjs.init(publicKey);

    // Using `as any` to avoid TypeScript error
    (emailjs.send as any)(
      serviceID,
      templateID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: `Message: ${formData.message}\n\nEmail: ${formData.email}`,
      },
      publicKey
    ).then((response: { status: number; text: string }) => {
      console.log('Mail sent successfully:', response.status, response.text);
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setIsSending(false);
      setTimeout(() => setShowSuccess(false), 5000);
    }).catch((error: { text: string }) => {
      console.error('Error sending email:', error);
      alert('Error sending email: ' + error.text);
      setIsSending(false);
    });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/uttam-thapa-1798a925a/',
      icon: FaLinkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/uttam1910',
      icon: FaGithub,
      color: 'hover:text-gray-300'
    },
    {
      name: 'Email',
      url: 'mailto:ut224365@gmail.com',
      icon: FaEnvelope,
      color: 'hover:text-red-400'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/your-profile',
      icon: FaTwitter,
      color: 'hover:text-blue-400'
    }
  ];

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
        <div className="w-full max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <p className="text-teal-400 font-mono text-sm sm:text-base opacity-70">
              <span className="text-gray-500">&lt;</span>contact
              <span className="text-gray-500">/&gt;</span>
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              Get In <span className="text-teal-400">Touch</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Feel free to reach out to me via the following platforms or send me a message
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-6 flex-wrap animate-fade-in-delay">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-800/60 to-gray-800/40 border border-teal-500/20 text-teal-400 ${social.color} transition-all duration-300 transform hover:scale-110 active:scale-95 hover:border-teal-500/50 relative group overflow-hidden`}
                  aria-label={social.name}
                >
                  <span className="absolute inset-0 bg-teal-500 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10 rounded-full"></span>
                  <Icon className="w-6 h-6 relative z-10 group-hover:text-white transition-colors duration-300" />
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-800/40 backdrop-blur-sm border border-teal-500/20 rounded-lg p-6 lg:p-8 animate-fade-in-delay-2 hover:border-teal-500/40 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="hidden lg:flex flex-col justify-between p-4 pr-6 border-r border-teal-500/10">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Let's talk</h3>
                  <p className="text-gray-300">I’m open to full-time positions, freelance work, and project collaborations. Share a brief and I’ll reply within 24 hours.</p>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-gray-400 mb-3">Quick contacts</p>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-300">Email: <a href="mailto:ut224365@gmail.com" className="text-teal-400">ut224365@gmail.com</a></li>
                    <li className="text-sm text-gray-300">LinkedIn: <a href="https://www.linkedin.com/in/uttam-thapa-1798a925a/" target="_blank" rel="noopener noreferrer" className="text-teal-400">/uttam-thapa</a></li>
                    <li className="text-sm text-gray-300">Response: <span className="text-teal-400">~24 hours</span></li>
                  </ul>

                  {/* New: availability, resume and tech badges */}
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-200 mb-2">Availability</p>
                    <p className="text-sm text-gray-400">Open to: <span className="text-teal-400 font-medium">Full-time</span>, <span className="text-teal-400 font-medium">Freelance</span>, <span className="text-teal-400 font-medium">Mentorship</span></p>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-lg font-bold text-white mb-2">Hire Me</h4>
                    <p className="text-sm text-gray-300 mb-3">Looking to build a product, iterate on an idea, or bring a web app to production? I help teams and founders ship fast, maintain quality, and scale reliably.</p>

                    <ul className="text-sm text-gray-300 space-y-1 mb-3">
                      <li>• Full-stack product development</li>
                      <li>• Prototype & MVP delivery</li>
                      <li>• Performance & accessibility improvements</li>
                    </ul>

                    <a href="#contact-form" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-gray-900 rounded-md font-semibold hover:scale-105 transition-transform duration-200">
                      <span>Start a project</span>
                    </a>

                  </div>
                </div>
              </div>
              <div className="p-2 lg:p-0">
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3 animate-fade-in">
                <FaCheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-gray-300 font-semibold mb-2 group-hover:text-teal-400 transition-colors duration-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-teal-500/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400/60 focus:ring-2 focus:ring-teal-500/10 transition-all duration-300 hover:border-teal-500/30"
                  placeholder="Your Name"
                />
              </div>
              <div className="group">
                <label htmlFor="email" className="block text-gray-300 font-semibold mb-2 group-hover:text-teal-400 transition-colors duration-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-teal-500/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400/60 focus:ring-2 focus:ring-teal-500/10 transition-all duration-300 hover:border-teal-500/30"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="group">
                <label htmlFor="message" className="block text-gray-300 font-semibold mb-2 group-hover:text-teal-400 transition-colors duration-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-teal-500/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400/60 focus:ring-2 focus:ring-teal-500/10 transition-all duration-300 resize-none hover:border-teal-500/30"
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-gray-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none active:scale-95 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></span>
                <span className="relative z-10">{isSending ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
            </div>
          </div>
          </div>

          {/* Quick info */}
          <div className="text-center animate-fade-in-delay-3">
            <p className="text-gray-400 text-sm">
              Response time: Usually within <span className="text-teal-400 font-semibold">24 hours</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
