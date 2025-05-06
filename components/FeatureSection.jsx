import { motion } from 'framer-motion';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FiServer, FiUsers, FiTrendingUp, FiShield } from 'react-icons/fi';
import { staggerContainer, listItem } from '../utils/animations';

export default function FeatureSection() {
  const features = [
    {
      icon: <FiServer size={24} className="text-primary" />,
      title: 'Cutting-Edge Technology',
      description: 'We leverage the latest technologies to build scalable, robust, and future-proof solutions tailored to your business needs.',
      benefits: [
        'Cloud-native architecture',
        'Microservices approach',
        'Containerized deployments',
        'Serverless computing',
      ],
    },
    {
      icon: <FiUsers size={24} className="text-primary" />,
      title: 'Expert Consultation',
      description: 'Our team of experienced consultants works closely with you to understand your unique challenges and create strategic technology roadmaps.',
      benefits: [
        'Technology assessment',
        'Digital transformation',
        'IT strategy development',
        'Process optimization',
      ],
    },
    {
      icon: <FiTrendingUp size={24} className="text-primary" />,
      title: 'AI-Powered Solutions',
      description: 'Harness the power of artificial intelligence to gain insights, automate processes, and create personalized experiences for your customers.',
      benefits: [
        'Machine learning models',
        'Natural language processing',
        'Computer vision systems',
        'Predictive analytics',
      ],
    },
    {
      icon: <FiShield size={24} className="text-primary" />,
      title: 'Security & Compliance',
      description: 'We prioritize security at every step, ensuring your systems and data are protected while maintaining regulatory compliance.',
      benefits: [
        'Security audits',
        'Compliance assessments',
        'Risk management',
        'Data protection',
      ],
    },
  ];

  return (
    <section id="features" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">TechConsultAI.ke</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise, industry knowledge, and innovative thinking to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className="card hover:border-l-4 hover:border-primary transition-all"
            >
              <div className="mb-6 p-3 bg-primary bg-opacity-10 rounded-full w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              
              <motion.ul 
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
                viewport={{ once: true }}
                className="space-y-2"
              >
                {feature.benefits.map((benefit, idx) => (
                  <motion.li 
                    key={idx} 
                    variants={listItem}
                    className="flex items-center text-gray-700"
                  >
                    <BsCheckCircleFill className="text-accent mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}