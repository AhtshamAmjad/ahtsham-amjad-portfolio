import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Github, Linkedin, Phone, GraduationCap, Play, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/AhtIsham- Resume .pdf';
    link.download = 'AhtIsham-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 transform rotate-12 scale-150"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center"> {/* Reduced gap from gap-12 to gap-8 */}
          {/* Left Column - Profile & Education */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start"
          >
            {/* Profile Picture - Made larger and more prominent */}
            <div className="mb-6"> {/* Reduced margin from mb-8 to mb-6 */}
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary-500 bg-gray-200 shadow-lg"> {/* Increased size from w-32 h-32 to w-40 h-40 */}
                <img
                  src="/Ahtasham.JPG"
                  alt="Ahtsham Amjad"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Social Icons - Centered under profile picture */}
            <div className="flex gap-4 mb-6 justify-center lg:justify-start"> {/* Reduced margin from mb-8 to mb-6 */}
              <motion.a
                href="https://github.com/AhtshamAmjad"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-700 hover:bg-primary-600 text-white transition-colors duration-300"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ahtsham-amjad-81486a15b/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-700 hover:bg-primary-600 text-white transition-colors duration-300"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:ahtshamamjad599@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-700 hover:bg-primary-600 text-white transition-colors duration-300"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="tel:+92307596838"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-700 hover:bg-primary-600 text-white transition-colors duration-300"
              >
                <Phone size={20} />
              </motion.a>
            </div>

            {/* Education Card */}
            <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-lg w-full max-w-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p className="font-medium">BS Information Technology</p>
                <p>University of the Punjab, PUCIT Lahore</p>
                <p>Lahore, Pakistan (2016-2020)</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Name, Title, Summary, Stats, Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            {/* Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="gradient-text">Ahtsham Amjad</span>
            </h1>

            {/* Title and Location Badges */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium">
                ISTQB® Certified SENIOR SQA ENGINEER
              </span>
              <div className="w-px h-6 bg-gray-400"></div>
              <span className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium">
                Lahore, Pakistan
              </span>
            </div>

            {/* Professional Summary */}
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
              ISTQB® Certified QA Engineer with a passion for enhancing QA processes and delivering seamless user experiences. Experienced in end-to-end testing of modern web applications. Proven ability to work independently, define testing strategies, and ensure high-quality software in fast-paced Agile teams.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-8 max-w-md">
              <div className="text-center">
                <motion.button
                  onClick={() => window.open('https://drive.google.com/file/d/1RJ82SNZpk7DAaRVQuPtU70-guDupKnqH/view?usp=sharing', '_blank')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  <Play className="w-4 h-4" />
                  Intro Video
                </motion.button>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">ISTQB®</div>
                <div className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
                  Certified
                  <motion.a
                    href="https://scr.istqb.org/?name=Muhammad%2BAhtasham%2BAmjad&number=23-CTFL-1085-PK&orderBy=relevancy&orderDirection&dateStart&dateEnd&expiryStart&expiryEnd&certificationBody&examProvider&certificationLevel&country&resultsPerPage=10"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 transition-colors duration-300"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </motion.button>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-300"
          >
            <ChevronDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 