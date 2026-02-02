import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Target, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const expertiseAreas = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Test Strategy & Planning",
      description: "Expert in defining and executing QA strategies for web and enterprise applications, translating business requirements into actionable test plans."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Test Automation & Tools",
      description: "Hands-on with Cypress, Selenium, Cucumber, Postman, REST APIs, and building scalable automation frameworks."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership & Collaboration",
      description: "Led QA teams, mentored junior testers, and collaborated with cross-functional teams using Agile/Scrum."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Quality Management & Reporting",
      description: "Established quality processes, metrics, and reporting for continuous improvement and compliance."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            ISTQB® Certified QA Engineer with a passion for enhancing QA processes and delivering seamless user experiences. Experienced in end-to-end testing of modern web applications. Proven ability to work independently, define testing strategies, and ensure high-quality software in fast-paced Agile teams.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Professional Summary
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Over 5 years of experience in software quality assurance, specializing in test automation, manual testing, and quality management across diverse industries and technologies.
              </p>
              <p>
                Led QA efforts for enterprise-level applications, implemented scalable automation frameworks, and ensured compliance with industry standards.
              </p>
              <p>
                Adept at collaborating with developers, product owners, and stakeholders to deliver high-quality software and seamless user experiences.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {[
                  "Reduced testing time by 70% through automation implementation (Cypress, Selenium)",
                  "Improved test coverage from 60% to 95% by designing test plans and automation suites tailored to complex business workflows",
                  "Led and mentored QA teams  driving collaboration, improving test practices, and ensuring quality across cross-functional Agile teams.",
                  "Implemented CI/CD pipelines and BDD frameworks for efficient releases",
                  "Contributed to AI-driven QA initiatives and early-stage SDLC activities by actively participating in kickoff reviews and impact analysis"
                ].map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Expertise Areas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
              Areas of Expertise
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-6"
            >
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`p-6 rounded-lg border transition-all duration-300 hover:shadow-lg ${
                    inView ? 'card-hover' : ''
                  } ${
                    inView ? 'border-primary-200 bg-primary-50 dark:border-primary-700 dark:bg-dark-800' : 
                    'border-gray-200 dark:border-dark-700'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900 text-primary-600">
                      {area.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        {area.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default  About; 