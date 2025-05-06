import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { fadeIn, fadeInUp } from '../utils/animations';

export default function Contact() {
  const contactInfo = [
    {
      icon: <FiMapPin className="text-primary text-2xl" />,
      title: 'Our Location',
      details: [
        'Large House, 3rd Floor',
        'Waiyaki Way, Nairobi, Kenya'
      ]
    },
    {
      icon: <FiPhone className="text-primary text-2xl" />,
      title: 'Phone Numbers',
      details: [
        '+254 722 648 834 (Main)',
        '+254 727 501 860 (Support)'
      ]
    },
    {
      icon: <FiMail className="text-primary text-2xl" />,
      title: 'Email Addresses',
      details: [
        'kimanicharles911@gmail.com',
        'gmfadhili@gmail.com'
      ]
    },
    {
      icon: <FiClock className="text-primary text-2xl" />,
      title: 'Working Hours',
      details: [
        'Monday - Friday: 8:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 1:00 PM'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What industries do you specialize in?',
      answer: 'We work across diverse industries including banking, healthcare, retail, manufacturing, education, hospitality, and more. Our team brings specialized expertise and tailored technology solutions to each sector.'
    },
    {
      question: 'Do you work with both startups and established companies?',
      answer: 'Yes, we partner with businesses of all sizes - from early-stage startups to established enterprises. We tailor our approach to meet your specific needs, goals, and budget.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary depending on the complexity and scope of work. A small website may take 4-6 weeks, while a complex enterprise solution could take several months. We provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally after launch. Our team can provide technical support, updates, and enhancements as needed.'
    }
  ];

  return (
    <Layout 
      title="Contact Us" 
      description="Get in touch with TechConsultAI.ke for all your technology consulting and AI solution needs."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Contact <span className="text-accent">Us</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-200 mb-8"
            >
              Have questions or ready to start your next project? Get in touch with our team.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  {info.icon}
                  <h3 className="text-xl font-semibold ml-3">{info.title}</h3>
                </div>
                <div className="text-gray-600">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="mb-1">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you as soon as possible. We're here to answer any questions you may have about our services.
              </p>
              
              <ContactForm />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Location</h2>
              <p className="text-gray-600 mb-8">
                Visit our office in Nairobi or contact us through any of our communication channels. We look forward to hearing from you!
              </p>
              
              <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
                {/* This would be replaced with an actual map */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-500">Interactive Map Placeholder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Partner with us to leverage the power of technology and AI for your business growth.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Contact Us Now
          </motion.button>
        </div>
      </section>
    </Layout>
  );
}