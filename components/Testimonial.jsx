import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonial({ quote, name, position, company }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card relative"
    >
      <FaQuoteLeft className="text-primary opacity-20 text-4xl absolute -top-4 -left-2" />
      
      <p className="text-gray-700 mb-6 italic">
        "{quote}"
      </p>
      
      <div className="flex items-center mt-auto">
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-600">{position}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
}