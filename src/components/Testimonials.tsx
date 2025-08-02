import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Working with this SQA engineer was transformative for our development process. The automation framework they implemented reduced our testing time by 70% and significantly improved our release quality. Their expertise in both technical and strategic aspects of quality assurance is exceptional.",
      project: "E-commerce Platform Automation"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Engineering Manager",
      company: "InnovateSoft Inc.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "This QA professional brought a level of expertise that elevated our entire development team. Their ability to mentor junior testers while implementing cutting-edge automation solutions has been invaluable. The quality improvements we've seen are remarkable.",
      project: "Mobile Banking App Testing"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Product Manager",
      company: "StartupFlow",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The testing strategy and automation framework developed for our healthcare platform exceeded all expectations. Their attention to compliance requirements and security testing ensured we met all regulatory standards. Highly recommend!",
      project: "Healthcare Portal Testing"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "DevOps Lead",
      company: "Digital Solutions Ltd.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The integration of automated testing into our CI/CD pipeline was seamless. This SQA engineer's understanding of both testing and DevOps practices made the implementation smooth and effective. Our deployment confidence has increased significantly.",
      project: "CI/CD Integration"
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "QA Director",
      company: "Enterprise Systems",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "As a fellow QA professional, I can attest to the exceptional quality of work. The test automation frameworks are robust, maintainable, and well-documented. Their leadership skills in managing QA teams are equally impressive.",
      project: "Enterprise Testing Framework"
    },
    {
      id: 6,
      name: "Robert Kim",
      position: "Technical Lead",
      company: "IoT Solutions",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The IoT testing platform developed for our connected devices was innovative and comprehensive. Their ability to understand complex IoT protocols and create effective testing strategies was crucial to our product's success.",
      project: "IoT Device Testing Platform"
    }
  ];

  const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={`${
              index < rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300 dark:text-gray-600'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Feedback from colleagues, clients, and team members highlighting the impact 
            and value delivered through quality assurance expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className={`p-6 rounded-lg border transition-all duration-300 hover:shadow-lg card-hover h-full ${
                inView ? 'border-primary-200 bg-primary-50 dark:border-primary-700 dark:bg-dark-800' : 
                'border-gray-200 dark:border-dark-700'
              }`}>
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>

                {/* Rating */}
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Project */}
                <div className="mb-6">
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    Project: {testimonial.project}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "95%", label: "Client Satisfaction" },
            { number: "8+", label: "Years Experience" },
            { number: "100%", label: "On-time Delivery" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 