'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);
 const isInView = useInView(ref, { once: true });


  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center">
                  <img
                    src="/about/harsh-1.jpg"
                    alt="Harsh"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">
              CSE Student & Innovation Entrepreneur
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Currently pursuing B.Tech in Computer Science at Chandigarh University (Batch 2027), focusing on AI/ML, web development, and innovative tech solutions. I hold a published patent in e-commerce innovation and am actively working on new ideas like solar energy sharing, driven by a passion to transform bold concepts into real-world impact.
            </p>
           <p className="text-gray-300 leading-relaxed">
            Outside academics, I love bringing people and ideas together — whether it&apos;s 
            leading events, collaborating on projects, or brainstorming startup concepts. 
            I&apos;m equally passionate about fitness, travel, and exploring politics, culture, 
            and philosophy. For me, innovation isn&apos;t just about code — it&apos;s about curiosity, 
            leadership, and creating impact that lasts.
          </p>

            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Patents</h4>
                <p className="text-3xl font-bold gradient-text">2+</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Major Projects</h4>
                <p className="text-3xl font-bold gradient-text">5+</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Hackathons</h4>
                <p className="text-3xl font-bold gradient-text">5+</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;