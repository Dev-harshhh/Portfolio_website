'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const softSkillIcons = {
  "Resilient Decision-Making": "🧭",
  "Cross-Domain Curiosity": "🌐",
  "Vision-to-Execution": "💡",
  "People-Centric Leadership": "🤝",
};

const fullStackSkills = [
  { name: "HTML5", logo: "/skills/HTML5_Badge.svg" },
  { name: "Next.js", logo: "/skills/Nextjs-logo.svg" },
  { name: "CSS3", logo: "/skills/CSS3_logo.svg" },
  { name: "Node.js", logo: "/skills/nodejs.png" },
  { name: "JavaScript", logo: "/skills/Unofficial_JavaScript_logo_2 copy.svg" },
  { name: "Express.js", logo: "/skills/express.webp" },
  { name: "React.js", logo: "/skills/react_logo_dark.svg" },
  { name: "MongoDB", logo: "/skills/Mongodb-svgrepo-com.svg" },
  { name: "Tailwind", logo: "/skills/Tailwind_CSS_Logo.svg" },
];

const aiMlSkills = [
  { name: "Python", logo: "/skills/Python-logo-notext.svg" },
  { name: "NumPy", logo: "/skills/Numpy-svgrepo-com.svg" },
  { name: "Pandas", logo: "/skills/Pandas_mark.svg" },
  { name: "Scikit-learn", logo: "/skills/Scikit_learn_logo_small.svg" },
  { name: "OpenCV", logo: "/skills/OpenCV_logo_black.svg" },
  { name: "TensorFlow", logo: "/skills/Tensorflow_logo.svg" },
];

const leadershipDescriptions = [
  "Class Representative (CR) — Managing academics, coordination, and communication since 1st semester.",
  "TPP CR — Leading placement-related activities and coordination.",
  "Core Member – YOC Operations Team — Driving event execution and team management.",
  "Event Coordinator (CU Fest, Freshers, Orientation, Tashan Nites, FAPs) — Handling event logistics and crowd management.",
];

const softSkillsDescriptions = [
  {
    name: "Resilient Decision-Making",
    description: "Staying adaptive and composed under pressure.",
  },
  {
    name: "Cross-Domain Curiosity",
    description: "Connecting tech, culture, and politics for fresh perspectives.",
  },
  {
    name: "Vision-to-Execution",
    description: "Turning bold ideas into real projects & patents.",
  },
  {
    name: "People-Centric Leadership",
    description: "Leading with empathy while driving results.",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const [showScrollbar, setShowScrollbar] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [300, -300]);

  const handleScrollStart = () => {
    setShowScrollbar(true);
    if (scrollTimeout) clearTimeout(scrollTimeout);
    setScrollTimeout(setTimeout(() => setShowScrollbar(false), 2000));
  };

  useEffect(
    () => () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
    },
    [scrollTimeout]
  );

  return (
    <section id="skills" ref={ref} className="py-20 bg-slate-900/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies and expertise I use to bring ideas to life</p>
        </motion.div>

        {/* Scrolling container */}
        <div
          ref={scrollRef}
          className={`overflow-x-auto overflow-y-hidden pb-6 transition-all duration-300 scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-blue-500 ${
            showScrollbar ? "opacity-100" : "opacity-100"
          }`}
          style={{ scrollBehavior: "smooth" }}
          onScroll={handleScrollStart}
          onMouseEnter={handleScrollStart}
          onTouchStart={handleScrollStart}
        >
          <motion.div style={{ x }} className="flex gap-8 min-w-max">
            {/* Full Stack Development Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass bg-slate-800/75 rounded-xl p-6 min-w-[320px] max-w-[320px] flex-shrink-0
              shadow-lg transition-shadow duration-300 hover:shadow-[0_0_32px_8px_rgba(26,90,118,0.5)] hover:scale-105 hover:z-10"
            >
              <h3 className="text-xl font-semibold text-gray-300 mb-6 border-b border-slate-700 pb-2">
                Full Stack Development
              </h3>
              <div className="grid grid-cols-2 gap-x-3 gap-y-3 mb-6 justify-items-center">
                {fullStackSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center w-full bg-slate-700/40 rounded-full px-3 py-2 min-h-[40px] cursor-default select-none
                   hover:bg-slate-600/60 transition-colors duration-200 text-sm text-gray-200 font-medium"
                    title={skill.name}
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 object-contain rounded-full mr-2"
                      loading="lazy"
                    />
                    <span className="truncate">{skill.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center space-x-2 items-center">
                <span
                  className="w-4 h-4 rounded-full bg-blue-500"
                  aria-label="Skill level: Intermediate"
                ></span>
                <span className="text-gray-300 uppercase tracking-wide text-xs font-semibold select-none">
                  Intermediate
                </span>
              </div>
            </motion.div>

            {/* AI & Machine Learning Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass bg-slate-800/75 rounded-xl p-6 min-w-[320px] max-w-[320px] flex-shrink-0
              shadow-lg transition-shadow duration-300 hover:shadow-[0_0_32px_8px_rgba(26,90,118,0.5)] hover:scale-105 hover:z-10"
            >
              <h3 className="text-xl font-semibold text-gray-300 mb-6 border-b border-slate-700 pb-2">
                AI & Machine Learning (Beginner & Growing)
              </h3>
              <div className="grid grid-cols-2 gap-x-3 gap-y-3 mb-6 justify-items-center">
                {aiMlSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center w-full bg-slate-700/40 rounded-full px-3 py-2 min-h-[40px] cursor-default select-none
                   hover:bg-slate-600/60 transition-colors duration-200 text-sm text-gray-200 font-medium"
                    title={skill.name}
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 object-contain rounded-full mr-2"
                      loading="lazy"
                    />
                    <span className="truncate">{skill.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center space-x-2 items-center">
                <span
                  className="w-4 h-4 rounded-full bg-blue-300"
                  aria-label="Skill level: Beginner & Growing"
                ></span>
                <span className="text-gray-300 uppercase tracking-wide text-xs font-semibold select-none">
                  Beginner & Growing
                </span>
              </div>
            </motion.div>

            {/* Leadership & Management Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="glass bg-slate-800/75 rounded-xl p-6 min-w-[320px] max-w-[320px] flex-shrink-0
              shadow-lg transition-shadow duration-300 hover:shadow-[0_0_32px_8px_rgba(26,90,118,0.5)] hover:scale-105 hover:z-10"
            >
              <h3 className="text-xl font-semibold text-gray-300 mb-6 border-b border-slate-700 pb-2">
                Leadership & Management
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-3">
                {leadershipDescriptions.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </motion.div>

            {/* Soft Skills Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="glass bg-slate-800/75 rounded-xl p-6 min-w-[320px] max-w-[320px] flex-shrink-0
              shadow-lg transition-shadow duration-300 hover:shadow-[0_0_32px_8px_rgba(26,90,118,0.5)] hover:scale-105 hover:z-10"
            >
              <h3 className="text-xl font-semibold text-gray-300 mb-6 border-b border-slate-700 pb-2">
                Soft Skills
              </h3>
              <div className="space-y-4 text-gray-300">
                {softSkillsDescriptions.map(({ name, description }) => (
                  <div key={name} className="flex items-start gap-3">
                    <span className="text-2xl leading-none">
                      {softSkillIcons[name]}
                    </span>
                    <p className="text-sm leading-snug">{description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Instruction */}
        <div className="flex justify-center mt-4">
          <div className="text-gray-400 text-sm flex items-center gap-2 select-none">
            <span>←</span>
            <span>Scroll to explore all skills</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
