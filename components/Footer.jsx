import Link from 'next/link';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    services: [
      { label: 'IT Consulting', href: '/services#it-consulting' },
      { label: 'AI Solutions', href: '/services#ai-solutions' },
      { label: 'Web Development', href: '/services#web-dev' },
      { label: 'Mobile Apps', href: '/services#mobile-apps' },
      { label: 'Cloud Services', href: '/services#cloud' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/about#team' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
    ],
    support: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/">
              <span className="text-2xl font-bold cursor-pointer">
                TechConsultAI<span className="text-accent">.ke</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-400">
              Innovative tech consulting and AI solutions for businesses in Kenya and across Africa.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.linkedin.com/company/techconsultai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="text-accent mt-1 mr-2" />
                <span className="text-gray-400">Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="text-accent mr-2" />
                <span className="text-gray-400">+254 722 648 834</span>
              </li>
              <li className="flex items-center">
                <FiMail className="text-accent mr-2" />
                <a href="mailto:kimanicharles911@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  kimanicharles911@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {currentYear} TechConsultAI.ke. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}