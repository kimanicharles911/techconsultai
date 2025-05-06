import Layout from '../components/Layout';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiSmartphone, FiCpu, FiCloud } from 'react-icons/fi';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      id: 'it-consulting',
      icon: <FiDatabase size={28} className="text-primary" />,
      title: 'IT Consulting',
      description: 'Strategic technology advisory to optimize your business operations and drive digital transformation.',
      tag: 'Popular',
    },
    {
      id: 'ai-solutions',
      icon: <FiCpu size={28} className="text-primary" />,
      title: 'AI Solutions',
      description: 'Custom artificial intelligence solutions to automate processes, gain insights, and enhance decision-making.',
    },
    {
      id: 'web-dev',
      icon: <FiCode size={28} className="text-primary" />,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance.',
    },
    {
      id: 'mobile-apps',
      icon: <FiSmartphone size={28} className="text-primary" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications designed for seamless user experiences across devices.',
    },
    {
      id: 'cloud',
      icon: <FiCloud size={28} className="text-primary" />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure, migration, and management to reduce costs and improve reliability.',
    },
  ];


  return (
    <Layout 
      title="Home" 
      description="TechConsultAI.ke offers innovative tech consulting and AI solutions for businesses in Kenya and across Africa."
    >
      <Hero />
      
      <FeatureSection />
      
      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive range of technology services to help businesses innovate, grow, and succeed in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard 
                key={service.id}
                id={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                tag={service.tag}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary px-8 py-3"
              >
                View All Services
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Partner with us to leverage the power of technology and AI for your business growth.
          </p>
          <Link href="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg"
            >
              Get Started Today
            </motion.button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}