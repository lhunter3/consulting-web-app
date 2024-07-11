import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitMessage('');
  
      // Basic form validation
      if (!formData.name || !formData.email || !formData.message) {
        setSubmitMessage('Please fill in all fields.');
        setIsSubmitting(false);
        return;
      }
  
      try {
        // Simulating an API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Here you would typically send the formData to your backend API
        // const response = await fetch('/api/send-email', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(formData)
        // });
        // if (!response.ok) throw new Error('Failed to send email');
  
        setSubmitMessage('Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    };
  
    return (
      <section id='contact' className="md:py-32 py-16 bg-white">
        <div className="max-w-5xl  px-small px-large ">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl leading-none font-semibold tracking-tight mb-4 text-primary-bg ">Contact <span className='text-underline-static'>Us</span></h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary-400 focus:border-transparent"
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
      </section>
    );
  };

  export default Contact;