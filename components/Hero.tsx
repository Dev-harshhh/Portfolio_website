'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  // Simplified animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: [0.25, 0.1, 0.25, 1] as const

      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      
      {/* Simplified background gradient - removed heavy parallax */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10" />
      
      {/* Optimized animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: [0, 0, 1, 1] as const
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: [0, 0, 1, 1] as const

          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-xl"
        />
      </div>

      {/* Main content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="space-y-8">
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
          >
            H! I&apos;m{' '}
            <span className="gradient-text">
              Harsh
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            A passionate CSE student with a maker&apos;s mindset — passionate
            about building, experimenting, and launching tech that matters.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg hover-glow transition-all duration-300"
            >
              Get In Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
            >
              View My Work
            </motion.button>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-6 pt-8"
          >
            <motion.a
              href="https://github.com/Dev-harshhh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/i-am-harsh/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:27harshraj2005@gmail.com"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
