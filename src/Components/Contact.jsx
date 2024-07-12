import React, { useState } from 'react';
import { Phone } from 'lucide-react';

const Contact = () => {
  const initialFormData = {
    name: '',
    email: '',
    service: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitMessage('Your message has been sent!');
      setFormData(initialFormData);
    } catch (error) {
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary-400 focus:border-transparent placeholder-gray-400";

  return (
    <div id='contact' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:my-32 my-16">
      <div className="flex flex-col lg:flex-row justify-between items-stretch">
        <div className="lg:w-[calc(50%-1px)] mb-8 lg:mb-0">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-none font-semibold tracking-tight mb-4 text-primary-bg">
            Contact <span className='text-underline-static'>Us</span>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className={inputClass}
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={inputClass}
              required
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={inputClass}
              required
            >
              <option value="" disabled>Select a Service</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-app">Mobile App Development</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="consulting">IT Consulting</option>
              <option value="other">Other</option>
            </select>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              className={inputClass}
              required
            ></textarea>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="relative overflow-hidden group bg-transparent text-text-accent px-4 py-2 rounded-lg max-w-max border border-text-accent hover:bg-text-accent hover:text-white hover:border-transparent transition duration-300 ease-in-out"
            >
              <span className="absolute inset-0 bg-text-accent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></span>
              <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
          {submitMessage && <p className="mt-4 text-center text-primary-400">{submitMessage}</p>}
        </div>
        
        <div className="hidden lg:block  mx-32 w-1 rounded-xl bg-primary-bg opacity-15 shadow-xl self-stretch"></div>
        
        <div className="lg:w-[calc(50%-1px)] ">
          <div className="h-full flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Phone className="mr-2" />Phone Us
            </h3>
            <p className="my-2">Want an immediate response? Call us at:</p>
            <a href="tel:+11234567890" className="text-xl font-bold text-primary-bg hover:text-text-accent transition duration-300">
              +1 (123) 456-7890
            </a>
            <p className="my-2 text-sm text-gray-600">
              Our customer service team is available:
              <br />Monday - Friday: 9am - 5pm AST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;