import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { fadeIn, fadeInUp } from '../utils/animations';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-br from-blue-400 to-transparent" />
        <div className="absolute right-0 bottom-0 h-full w-1/3 bg-gradient-to-tl from-purple-400 to-transparent" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTRtMC0xOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNG0xOCA5YzAtMS4xMDUtLjg5NS0yLTItMnMtMiAuODk1LTIgMiAuODk1IDIgMiAyIDItLjg5NSAyLTJtLTE4IDlDMTggMzQuMTA1IDE3LjEwNSAzNCAxNiAzNHMtMiAuODk1LTIgMiAuODk1IDIgMiAyIDItLjg5NSAyLTJtLTE4LTljMC0xLjEwNS0uODk1LTItMi0ycy0yIC44OTUtMiAyIC44OTUgMiAyIDIgMi0uODk1IDItMm0xOC0xOGMwLTEuMTA1LS44OTUtMi0yLTJzLTIgLjg5NS0yIDIgLjg5NSAyIDIgMiAyLS44OTUgMi0yTTM2IDUyYzAtMS4xMDUtLjg5NS0yLTItMnMtMiAuODk1LTIgMiAuODk1IDIgMiAyIDItLjg5NSAyLTJtLTE4LTljMC0xLjEwNS0uODk1LTItMi0ycy0yIC44OTUtMiAyIC44OTUgMiAyIDIgMi0uODk1IDItMiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-4xl"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Innovative Tech Consulting &<br />
            <span className="text-accent">AI Solutions</span> for Your Business
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
          >
            We help businesses in Kenya and across Africa leverage technology and artificial intelligence to drive growth, improve efficiency, and create exceptional customer experiences.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary px-8 py-3 text-lg"
              >
                Get Started
              </motion.button>
            </Link>
            
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg flex items-center"
              >
                Our Services
                <BsArrowRight className="ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Down arrow */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#features" className="text-white opacity-70 hover:opacity-100 transition-opacity">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}