'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to horizontal translation
  // Assuming each card is ~400px wide with gaps, we need to move ~2400px total for 6 cards
  const x = useTransform(scrollYProgress, [0, 1], [0, -2400]);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com/johndoe/ecommerce',
      demo: 'https://ecommerce-demo.com',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
      github: 'https://github.com/johndoe/taskapp',
      demo: 'https://taskapp-demo.com',
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics with data visualization.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Chart.js', 'OpenWeather API', 'CSS Grid'],
      github: 'https://github.com/johndoe/weather',
      demo: 'https://weather-demo.com',
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media management platform with analytics, scheduling, and multi-platform posting capabilities.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Vue.js', 'Firebase', 'Chart.js', 'Tailwind'],
      github: 'https://github.com/johndoe/social-dashboard',
      demo: 'https://social-demo.com',
    },
    {
      title: 'AI Chat Application',
      description: 'An intelligent chat application with natural language processing, real-time messaging, and AI-powered responses.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'OpenAI API', 'Socket.io', 'MongoDB'],
      github: 'https://github.com/johndoe/ai-chat',
      demo: 'https://ai-chat-demo.com',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations, dark mode support, and optimized performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Next.js', 'Framer Motion', 'Tailwind', 'TypeScript'],
      github: 'https://github.com/johndoe/portfolio',
      demo: 'https://portfolio-demo.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Horizontal Scroll Container */}
        <div ref={containerRef} className="h-[120vh] relative">
          <div className="sticky top-20 h-screen flex items-center overflow-hidden">
            <motion.div
              style={{ x }}
              className="flex space-x-8 will-change-transform"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass rounded-2xl overflow-hidden group hover-glow flex-shrink-0 w-80"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>
                    
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/johndoe"
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