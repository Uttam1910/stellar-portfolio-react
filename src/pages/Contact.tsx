import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

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

  return (
    <div className="container mx-auto p-4">
      <main className="p-4 lg:ml-64">
        <section id="contact" className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h1 className="text-center text-3xl mb-6 text-gray-800">Contact</h1>
          <div className="text-center mb-6">
            <p className="text-gray-700">You can reach out to me via the following platforms:</p>
            <div className="flex justify-center space-x-6 mt-4 flex-wrap">
              <a href="https://www.linkedin.com/in/uttam-thapa-1798a925a/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 flex items-center space-x-2">
                <i className="fab fa-linkedin"></i> <span>LinkedIn</span>
              </a>
              <a href="https://github.com/uttam1910" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 flex items-center space-x-2">
                <i className="fab fa-github"></i> <span>GitHub</span>
              </a>
              <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 flex items-center space-x-2">
                <i className="fab fa-twitter"></i> <span>Twitter</span>
              </a>
              <a href="mailto:ut224365@gmail.com" className="text-gray-800 hover:text-blue-600 flex items-center space-x-2">
                <i className="fas fa-envelope"></i> <span>Email</span>
              </a>
            </div>
          </div>
          <form id="contact-form" onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="form-group mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send'}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Contact;
