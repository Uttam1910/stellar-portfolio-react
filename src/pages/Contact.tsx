import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin as FaLinkedinIcon, FaGithub as FaGithubIcon, FaEnvelope as FaEnvelopeIcon, FaTwitter as FaTwitterIcon } from 'react-icons/fa';

// ✅ TypeScript-safe casts for react-icons
const FaLinkedin = FaLinkedinIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const FaGithub = FaGithubIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const FaEnvelope = FaEnvelopeIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const FaTwitter = FaTwitterIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

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
      alert('Mail sent successfully');
      setFormData({ name: '', email: '', message: '' });
      setIsSending(false);
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
                  className={`w-14 h-14 flex items-center justify-center rounded-full bg-gray-800/50 border border-teal-500/20 text-teal-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:border-teal-500/50`}
                  aria-label={social.name}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 rounded-lg p-8 animate-fade-in-delay-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-teal-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-500/50 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-teal-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-500/50 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-teal-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-500/50 transition-all duration-300 resize-none"
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full px-8 py-3 bg-teal-500 hover:bg-teal-600 text-gray-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
