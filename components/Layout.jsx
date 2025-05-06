import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from './SEO';

export default function Layout({ children, title, description }) {
  return (
    <>
      <SEO title={title} description={description} />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-grow"
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </>
  );
}