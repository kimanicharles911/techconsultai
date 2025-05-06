import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function TeamMember({ 
  name, 
  role, 
  image = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='200' height='200'%3E%3Crect width='24' height='24' fill='%23e5e7eb' /%3E%3Ccircle cx='12' cy='8' r='4' fill='%239ca3af' /%3E%3Cpath d='M5 19.5C5 16.5 8 16 11.5 16 15 16 19 16.5 19 19.5V20H5v-.5z' fill='%239ca3af' /%3E%3C/svg%3E",
  bio, 
  linkedin,
  twitter
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div className="relative mb-4 w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-full">
        <div 
          className="w-full h-full bg-gray-200 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-accent mb-3">{role}</p>
      
      <p className="text-gray-600 text-center mb-4 max-w-sm">{bio}</p>
      
      <div className="flex space-x-3">
        {linkedin && (
          <motion.a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="bg-[#0077b5] text-white p-2 rounded-full"
          >
            <FaLinkedin size={16} />
          </motion.a>
        )}
        
        {twitter && (
          <motion.a 
            href={twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="bg-[#1da1f2] text-white p-2 rounded-full"
          >
            <FaTwitter size={16} />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}