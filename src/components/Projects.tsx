import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Globe, Database, Shield, Users } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Transax",
      category: "B2B SaaS",
      icon: <Briefcase className="w-5 h-5" />,
      domain: "Trailer financing & dealership CRM",
      description: "A cloud-based platform handling vehicle/trailer finance workflows, lead intake, and dealership operations.",
      keyFeatures: [
        "Multi-step financing forms",
        "AI-powered assistant (Ben AI)",
        "Multi-location dealer support",
        "Mobile-responsive UX",
        "Lead routing"
      ],
      technologies: ["Playwright", "Cypress", "Postman", "JIRA", "TestRail", "OpenReplay", "Git", "OpenAI API", "Agile/Scrum"]
    },
    {
      title: "Tech Bazaar",
      category: "E-commerce",
      icon: <Globe className="w-5 h-5" />,
      domain: "Tech retail e-commerce, POS & marketplace SaaS",
      description: "An integrated cloud solution combining POS, ERP, CRM, and an online marketplace to digitally transform tech retailers' operations.",
      keyFeatures: [
        "Inventory/sales management",
        "Vendor onboarding",
        "ERP/CRM integration",
        "AI‑driven reporting",
        "Custom seller stores",
        "Product search & filters"
      ],
      technologies: ["Postman", "JMeter", "TestRail", "JIRA", "Agile/Scrum"]
    },
    {
      title: "Eagle6",
      category: "Cybersecurity",
      icon: <Shield className="w-5 h-5" />,
      domain: "Cybersecurity & model-driven visualization",
      description: "A visual cybersecurity platform emphasizing structured data modeling and risk analysis through visual dashboards.",
      keyFeatures: [
        "Security-focused regression testing",
        "BDD‑style Gherkin test scenarios",
        "Automated tests using Selenium + Cucumber",
        "Detailed documentation and reporting"
      ],
      technologies: ["Selenium", "Cucumber (Java)", "Gherkin", "JIRA", "Git", "Agile/Scrum"]
    },
    {
      title: "Team Builder",
      category: "Healthcare",
      icon: <Users className="w-5 h-5" />,
      domain: "Healthcare staff scheduling SaaS",
      description: "A predictive scheduling platform built for ambulatory care, optimising staffing based on volume data to reduce payroll overhead and improve operational efficiency.",
      keyFeatures: [
        "AI‑driven staffing recommendations",
        "Real‑time availability updates",
        "Call‑out management",
        "Digital wallet for same‑day pay (Tonight)",
        "Forecasting tool (Tomorrow)"
      ],
      technologies: ["Web-based SaaS", "Predictive analytics", "Machine learning", "Digital wallet integration", "Workforce systems"]
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A selection of my recent SQA and automation projects, including B2B SaaS, e-commerce, cybersecurity, and healthcare platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-dark-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover h-full flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  {/* Header with Category and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    <div className="text-gray-400">
                      {project.icon}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>

                  {/* Domain */}
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {project.domain}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.keyFeatures.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                          <span className="text-primary-600 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mt-auto">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
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
    </section>
  );
};

export default Projects; 