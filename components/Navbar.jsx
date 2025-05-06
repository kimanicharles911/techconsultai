import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => router.pathname === path;

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white bg-opacity-90 py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-primary cursor-pointer">
            TechConsultAI<span className="text-accent">.ke</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              <span 
                className={`${
                  isActive(link.href) 
                    ? 'text-primary font-medium border-b-2 border-primary' 
                    : 'text-gray-700 hover:text-primary'
                } cursor-pointer transition-colors font-medium`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              Get Started
            </motion.button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-primary focus:outline-none p-2 bg-gray-100 rounded-md"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link href={link.href} key={link.href}>
                  <span 
                    className={`${
                      isActive(link.href) 
                        ? 'text-primary font-medium' 
                        : 'text-gray-700 hover:text-primary'
                    } block cursor-pointer transition-colors py-2 font-medium text-lg`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <Link href="/contact">
                <span 
                  className="btn btn-primary w-full text-center block mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}