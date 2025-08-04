import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      category: "Testing Methodologies",
      skills: [
        "Manual Testing",
        "Automated Testing", 
        "Functional Testing",
        "API Testing",
        "Smoke Testing",
        "Sanity Testing",
        "Regression Testing",
        "Exploratory Testing",
        "User Acceptance Testing"
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        "JIRA",
        "CRM Platforms",
        "Bug Tracking Systems",
        "Test Management Tools"
      ]
    },
    {
      category: "Test Automation",
      skills: [
        "Cypress",
        "JavaScript",
        "Playwright",
        "Selenium",
        "BDD"
      ]
    },
    {
      category: "Technical Proficiencies",
      skills: [
        "Test Case Development",
        "Test Plan Creation",
        "Defect Management",
        "Cross-Browser Testing"
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            ISTQB® Certified with a strong foundation in software testing, automation, and quality management. Proficient in modern testing tools, frameworks, and Agile/Scrum methodologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className={`p-6 rounded-lg border transition-all duration-300 hover:shadow-lg card-hover ${
                inView ? 'border-primary-200 bg-primary-50 dark:border-primary-700 dark:bg-dark-800' : 
                'border-gray-200 dark:border-dark-700'
              }`}
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.button
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors duration-300"
                  >
                    {skill}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Additional Skills & Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "ISTQB® - CTFL Certification (2023)",
              "Agile/Scrum Methodologies",
              "Cross-browser & Responsive Testing",
              "Team Leadership & Mentoring",
              "Test Planning & Documentation",
              "Security & Compliance Testing",
              "API & Mobile Testing",
              "Collaboration: JIRA, Notion, Slack"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center p-4 rounded-lg bg-gray-100 dark:bg-dark-700 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-300"
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 