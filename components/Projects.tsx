'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Scroll progress for this section only (doesn't block page scroll)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 20%'], // starts when section comes into view
  });

  // Smooth the progress so movement feels fluid
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.3,
  });

  // Horizontal movement mapped to smoothed progress
  const x = useTransform(smoothProgress, [0, 1], [0, -700]);

  const projects = [
    {
      title: 'Dual Channel E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com/Dev-harshhh/ecommerce',
      demo: 'https://ecommerce-demo.com',
    },
    {
      title: 'Quiz Application',
      description:
        'A fun and interactive quiz application built with React and TypeScript, featuring multiple-choice questions, timers, and score tracking.',
      image:
        'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Chart.js', 'OpenWeather API', 'CSS Grid'],
      github: 'https://github.com/Dev-harshhh/quiz-app-SIP/tree/main',
      demo: 'https://weather-demo.com',
    },
    {
      title: 'AI Enabled Gesture Air Brush',
      description:
        'An innovative air brush tool that uses AI to enhance digital art creation with real-time feedback and suggestions.',
      image:
        'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'OpenAI API', 'TensorFlow.js', 'CSS Modules'],
      github: 'https://github.com/Dev-harshhh/Hand_Gesture_Writing',
      demo: 'https://ai-chat-demo.com',
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website with smooth animations, dark mode support, and optimized performance.',
      image:
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Next.js', 'Framer Motion', 'Tailwind', 'TypeScript'],
      github: 'https://github.com/Dev-harshhh/Portfolio_website',
      demo: 'https://portfolio-demo.com',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </motion.div>

        {/* Horizontal animated row, but page scroll is untouched */}
        <div className="w-full">
          <motion.div
            style={{ x }}
            className="flex space-x-8 will-change-transform"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-2xl overflow-hidden group hover-glow flex-shrink-0 w-80"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700 text-xs text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Dev-harshhh"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 border border-gray-600 px-6 py-3 rounded-full text-white hover:bg-gray-800 transition-all duration-300"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
