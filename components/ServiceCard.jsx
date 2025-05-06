import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { cardHover } from '../utils/animations';

export default function ServiceCard({ 
  icon, 
  title, 
  description, 
  link = '/services',
  tag,
  id
}) {
  return (
    <motion.div 
      id={id}
      whileHover={{ scale: 1.03 }}
      className="card flex flex-col h-full"
    >
      {tag && (
        <span className="bg-accent text-white text-xs px-3 py-1 rounded-full absolute -top-3 right-4">
          {tag}
        </span>
      )}
      
      <div className="mb-6 p-4 bg-primary bg-opacity-10 rounded-full w-fit">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      
      <Link href={`${link}${id ? '#' + id : ''}`}>
        <motion.div 
          whileHover={cardHover}
          className="inline-flex items-center text-primary font-medium mt-auto"
        >
          Learn More <BsArrowRight className="ml-2" />
        </motion.div>
      </Link>
    </motion.div>
  );
}