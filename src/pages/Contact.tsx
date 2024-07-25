import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        .then((result: { text: string }) => {
          console.log(result.text);
        }, (error: { text: string }) => {
          console.log(error.text);
        });
    }
  };

  return (
    <section id="contact" className="p-8">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" required />
        <label>Email</label>
        <input type="email" name="email" required />
        <label>Message</label>
        <textarea name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
