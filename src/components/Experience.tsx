import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Senior SQA Engineer",
      company: "Transax",
      location: "Remote",
      period: "Jan 2023 - Present",
      description: "Lead QA for Transax, combining test automation (Playwright, Cypress) with manual testing to ensure quality across financing forms, AI assistants, and dealership feature.",
      achievements: [
        "Implemented comprehensive test automation framework reducing testing time by 70%",
        "Established quality gates and metrics improving overall product quality by 40%",
        "Mentored junior QA engineers and conducted training sessions on automation best practices",
        "Trusted to independently manage the full QA lifecycle for large-scale Saas releases- from test planning to execution, defect triage, and stakeholder reporting" ,
        "Collaborated with DevOps team to integrate automated testing into CI/CD pipeline"
      ],
      technologies: ["PLaywright", "Cypress", "OpenReplay", "GIT", "Agile/Scrum", "JIRA"]
    },
    {
      title: "SQA Engnineer",
      company: "TechBazaar.",
      location: "Lahore, Pakistan",
      period: "2020 - 2022",
      description: "Contributed to a greenfield project at Tech Bazaar by designing test strategies, executing functional and regression testing, and leading a 3-member QA team.",
      achievements: [
        "Spearheaded QA efforts from the ground up, ensuring seamless delivery of the project’s first major release.",
        "Designed and implemented test coverage that reduced critical post-release bugs by 40%.",
        "Led and mentored a team of 3 QA engineers, fostering collaboration and upskilling through regular reviews and knowledge-sharing.",
        "Contributed to process improvement initiatives, streamlining communication between QA, development, and product teams"
      ],
      technologies: ["JIRA", "Postman", "TestRail", "JMeter", "Git", "Agile/Scrum"]
    },
    {
      title: "QA Engineer",
      company: "Eagle6",
      location: "Remote",
      period: "Nov 2020 -Jan 22",
      description: "Contributed to Eagle6’s cybersecurity initiative by implementing BDD test automation using Selenium with Cucumber (Java) and performing security-focused regression testing.",
      achievements: [
        "Developed and automated BDD test scenarios using Cucumber and Selenium in Java, improving test coverage and reusability across security-focused modules",
        "Proactively identified potential security vulnerabilities during regression testing, contributing to the stability and integrity of the cybersecurity solution",
        "Played a pivotal role in embedding BDD practices into the QA process, enhancing clarity, maintainability, and stakeholder visibility into test flows."
      ],
      technologies: ["Selenium", "Cucumber", "Java", "Gherkin", "Git", "JIRA", "Agile/Scrum"]
    },
    
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Progressive career growth in quality assurance with increasing responsibilities 
            and expertise in modern testing methodologies.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-600"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-900 z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className={`p-6 rounded-lg border transition-all duration-300 hover:shadow-lg card-hover ${
                    inView ? 'border-primary-200 bg-primary-50 dark:border-primary-700 dark:bg-dark-800' : 
                    'border-gray-200 dark:border-dark-700'
                  }`}>
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {experience.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Building size={16} />
                          <span>{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                            <span className="text-primary-600 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 