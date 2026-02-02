import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-dark-950 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Ahtsham Amjad
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Senior Software Quality Assurance Engineer with expertise in test automation, 
              quality management, and ensuring software excellence across diverse platforms.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/ahtsham-amjad-81486a15b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                LinkedIn
              </a>
              <a href="https://github.com/AhtshamAmjad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                GitHub
              </a>
              <a href="mailto:ahtshamamjad592@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Email
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Test Automation</span>
              </li>
              <li>
                <span className="text-gray-400">API Testing</span>
              </li>
              <li>
                <span className="text-gray-400">Performance & Load Testing</span>
              </li>
              <li>
                <span className="text-gray-400">Mobile Testing</span>
              </li>
              <li>
                <span className="text-gray-400">Quality Management & Leadership</span>
              </li>
              <li>
                <span className="text-gray-400">Ai & Chatboat Testing</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} SQA Portfolio. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-primary-600 hover:bg-primary-700 transition-colors duration-300"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 