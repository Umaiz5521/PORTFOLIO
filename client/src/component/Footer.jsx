import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 text-white py-12 mt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="max-w-6xl mx-auto text-center space-y-8 px-4">
        {/* Footer Header */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>

        {/* Footer Description */}
        <p className="text-gray-300 text-base max-w-2xl mx-auto">
          A passionate web developer focused on creating clean and performant websites. 
          Let's build something amazing together.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-white hover:text-gray-400 text-sm sm:text-base"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:text-gray-400 text-2xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-gray-400 text-2xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white hover:text-gray-400 text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-gray-400 text-2xl" />
          </a>
        </div>

        {/* Additional Links Section */}
        <div className="mt-6">
          <p className="text-gray-400 text-sm">
            Built with love using React & Tailwind CSS
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
