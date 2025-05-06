import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiMail, FiMessageSquare, FiPhone, FiCheckCircle } from 'react-icons/fi';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = () => {
    const newErrors = {};
    
    // Validate name
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Validate email
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Validate message
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formState.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        
        // Reset success message after some time
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
      
      {isSubmitted ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 p-4 rounded-lg text-green-700 flex items-center mb-6"
        >
          <FiCheckCircle className="mr-2 text-xl" />
          <span>
            Thank you for your message! We'll get back to you shortly.
          </span>
        </motion.div>
      ) : null}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Your Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 rounded-lg border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                placeholder="Margaret Wangari"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                placeholder="youremail@example.com"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              Phone Number (Optional)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiPhone className="text-gray-400" />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="+254 700 123 456"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-gray-700 mb-2">
              Subject
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMessageSquare className="text-gray-400" />
              </div>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="How can we help?"
              />
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formState.message}
            onChange={handleChange}
            className={`w-full px-3 py-2 rounded-lg border ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
            placeholder="Please describe how we can assist you..."
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        
        <div className="flex justify-end">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
            className={`btn btn-primary px-6 py-3 flex items-center ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <FiSend className="ml-2" />
          </motion.button>
        </div>
      </form>
    </div>
  );
}