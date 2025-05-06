import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiSmartphone, FiCpu, FiCloud, FiLayout, FiBarChart, FiShield, FiGlobe } from 'react-icons/fi';
import { fadeIn, fadeInUp } from '../utils/animations';
import Link from 'next/link';

export default function Services() {
  const mainServices = [
    {
      id: 'it-consulting',
      icon: <FiDatabase size={36} className="text-primary" />,
      title: 'IT Consulting',
      description: 'Strategic technology advisory to optimize your business operations and drive digital transformation.',
      features: [
        'IT Strategy Development',
        'Digital Transformation Roadmaps',
        'Technology Assessment',
        'Process Optimization',
        'Vendor Selection & Management',
        'IT Governance & Compliance'
      ]
    },
    {
      id: 'ai-solutions',
      icon: <FiCpu size={36} className="text-primary" />,
      title: 'AI Solutions',
      description: 'Custom artificial intelligence solutions to automate processes, gain insights, and enhance decision-making.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision Systems',
        'Predictive Analytics',
        'AI Strategy & Implementation',
        'Chatbots & Virtual Assistants'
      ]
    },
    {
      id: 'web-dev',
      icon: <FiCode size={36} className="text-primary" />,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance.',
      features: [
        'Custom Web Applications',
        'E-commerce Platforms',
        'Progressive Web Apps',
        'Content Management Systems',
        'API Development & Integration',
        'Website Optimization'
      ]
    },
    {
      id: 'mobile-apps',
      icon: <FiSmartphone size={36} className="text-primary" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications designed for seamless user experiences across devices.',
      features: [
        'iOS App Development',
        'Android App Development',
        'Cross-Platform Solutions',
        'Mobile UI/UX Design',
        'App Performance Optimization',
        'App Store Submission'
      ]
    },
    {
      id: 'cloud',
      icon: <FiCloud size={36} className="text-primary" />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure, migration, and management to reduce costs and improve reliability.',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Serverless Architecture',
        'DevOps Implementation',
        'Multi-Cloud Strategy',
        'Cloud Security & Compliance'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <FiLayout size={28} className="text-primary" />,
      title: 'UI/UX Design',
      description: 'User-centered design services focused on creating intuitive, engaging, and accessible digital experiences.',
    },
    {
      icon: <FiBarChart size={28} className="text-primary" />,
      title: 'Data Analytics',
      description: 'Comprehensive data analytics solutions to transform your raw data into actionable business insights.',
    },
    {
      icon: <FiShield size={28} className="text-primary" />,
      title: 'Cybersecurity',
      description: 'Robust security services to protect your systems, data, and users from evolving cyber threats.',
    },
    {
      icon: <FiGlobe size={28} className="text-primary" />,
      title: 'IoT Solutions',
      description: 'End-to-end Internet of Things solutions connecting devices, people, and systems for smarter operations.',
    }
  ];

  const industries = [
    'Banking & Financial Services',
    'Healthcare & Life Sciences',
    'Retail & E-commerce',
    'Manufacturing & Supply Chain',
    'Education & EdTech',
    'Hospitality & Tourism',
    'Transportation & Logistics',
    'Energy & Utilities',
    'Agriculture & AgriTech',
    'Government & Public Sector'
  ];

  return (
    <Layout 
      title="Services" 
      description="Explore our comprehensive range of technology consulting and AI solutions for businesses in Kenya and across Africa."
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
              Our <span className="text-accent">Services</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-200 mb-8"
            >
              Comprehensive technology and AI solutions tailored to your business needs
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of technology services designed to help businesses innovate, grow, and succeed in the digital age.
            </p>
          </div>

          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div 
                id={service.id}
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={index % 2 === 1 ? 'lg:col-start-2' : ''}
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-3 bg-primary bg-opacity-10 rounded-full">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-bold">{service.title}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-4">What we offer:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg className="h-5 w-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={`bg-gray-200 h-80 rounded-lg flex items-center justify-center ${
                    index % 2 === 1 ? 'lg:col-start-1' : ''
                  }`}
                >
                  <div className="p-8 bg-white bg-opacity-80 rounded-lg text-center">
                    <div className="text-6xl text-primary mb-4">{service.icon}</div>
                    <h4 className="text-xl font-semibold">{service.title}</h4>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Supporting services to complement our core offerings and provide comprehensive solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="mb-4 p-3 bg-primary bg-opacity-10 rounded-full w-fit">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work across diverse industries, bringing specialized expertise and tailored solutions to each sector.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white p-4 rounded-lg shadow-sm text-center border border-gray-100 hover:border-primary hover:shadow-md transition-all"
              >
                <span className="text-gray-700">{industry}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Talk to our experts about your specific business challenges. We'll help you find the right technology solutions.
          </p>
          <Link href="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}