'use client';

import { motion } from 'framer-motion';
import { Download, ArrowLeft, Mail, Phone, MapPin, ExternalLink, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Resume() {
  const handleDownload = () => {
    window.open('/resumee/Resume Vivnovation.pdf', '_blank');
  };

  const focus = [
    'Expanding expertise in AI-driven web applications and coupon prediction systems.',
    'Experimenting with integrating machine learning into real-world user-facing products.',
    'Enhancing UI/UX skills to design more intuitive and conversion-focused platforms.',
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      school: 'Chandigarh University',
      duration: '2023 – 2027',
      details: 'Current CGPA: 7.5',
    },
    {
      degree: 'Intermediate (CBSE)',
      school: 'M.K. DAV Public School, Jharkhand',
      duration: '2021 – 2022',
      details: 'Score: 75%',
    },
    {
      degree: 'Matriculation (ICSE)',
      school: 'Sacred Heart School, Jharkhand',
      duration: '2019 – 2020',
      details: 'Score: 70%',
    },
  ];

  const projectsAchievements = [
    {
      title: 'Dual-Segment E-Commerce Platform (Patent Published)',
      points: [
        'Engineered a dual-mode shopping platform combining affiliate and budget-focused experiences to improve buyer targeting and conversion.',
        'Published university-verified patent for this innovation (2024).',
      ],
    },
    {
      title: 'Shaker Bottle with Integrated Mechanism (Patent Filed)',
      points: [
        'Designed a dual-compartment shaker focusing on hygiene, sustainability, and convenience.',
        'Validated design by real-world user trials.',
      ],
    },
    {
      title: 'Hand-Gesture Recognition Airbrush (AI + CV)',
      points: [
        'Built a gesture-controlled visualization tool achieving 95%+ recognition accuracy at 30 FPS.',
        'Targeted healthcare visualization applications.',
      ],
    },
    {
      title: 'Coupon Prediction & AI Workflow Bot (In Progress)',
      points: [
        'Developing an ML-based system predicting active coupon codes based on seasonal trends and website behavior.',
      ],
    },
  ];

  const ventures = [
    {
      title: 'Freelance Web Developer',
      duration: '2024 – Present',
      details:
        'Built and deployed responsive websites for small businesses and startups, focusing on scalability and user experience.',
    },
    {
      title: 'Book & Product Reviewer',
      duration: '2019 – Present',
      details:
        'Reviewed 200+ books and products in collaboration with publishers, authors, and companies — refining analytical & outreach skills.',
    },
    {
      title: 'Dropshipping Business',
      duration: '2021 – Present',
      details:
        'Managed product sourcing, marketing, and customer support for an e-commerce store, gaining hands-on business experience.',
    },
  ];

  const leadership = [
    {
      role: 'TPP & Academic CR (2023 – Present)',
      details:
        'Served as communication bridge between faculty and 60+ students, coordinating academics and placement preparation.',
    },
    {
      role: 'Core Member – YOC Operations Team',
      details:
        'Managed event logistics and cross-team collaboration, enhancing operational efficiency for large events.',
    },
    {
      role: 'Event Coordinator – DSW & DACA',
      details:
        'Organized flagship events such as FAP, Tashan Nites, CU Fest, and Freshers, improving student engagement and campus experience.',
    },
  ];

  const certifications = [
    'Cloud Computing (Elite) – IIT Kharagpur (NPTEL, 2025)',
    'Meta Front-End Development – Coursera (2024)',
    'SQL: A Practical Introduction – IBM (Coursera)',
    'Introduction to Psychology – Yale University (Coursera)',
    'Software Engineering Job Simulation – J.P. Morgan Chase (Forage)',
  ];

  const skills = {
    Languages: ['C++', 'Python', 'Java'],
    'Web Development': ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
    'Tools & Others': ['Git', 'Figma', 'REST APIs', 'AI/ML Tools'],
    'Soft Skills': ['Strategic Planning', 'Communication', 'Team Leadership'],
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-800/50 backdrop-blur-lg border-b border-slate-700 sticky top-0 z-50"
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Portfolio</span>
            </motion.div>
          </Link>

          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full hover-glow"
          >
            <Download size={18} />
            <span>Download PDF</span>
          </motion.button>
        </div>
      </motion.header>

      {/* Personal Info */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold mb-4">
          Harsh Kumar
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-xl text-gray-300 mb-6">
          Computer Science Student & Web Developer
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap justify-center gap-6 text-gray-400">
          <div className="flex items-center space-x-2"><Mail size={16} /><span>27harshraj2005@gmail.com</span></div>
          <div className="flex items-center space-x-2"><Phone size={16} /><span>+91 7091326656</span></div>
          <div className="flex items-center space-x-2"><MapPin size={16} /><span>Jharkhand, India</span></div>
          <div className="flex items-center space-x-2">
            <Linkedin size={16} />
            <a href="https://www.linkedin.com/in/i-am-harsh" target="_blank" rel="noopener noreferrer" className="hover:underline">
              linkedin.com/in/i-am-harsh
            </a>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 space-y-16">

        {/* Professional Summary */}
        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl font-bold gradient-text mb-6">Professional Summary</h2>
          <div className="glass rounded-xl p-6">
            <p className="text-gray-300 leading-relaxed">
              3rd-year CSE student at Chandigarh University. Patent-published innovator and hands-on web developer with leadership roles in TPP CR and university event coordination. Passionate about AI, practical tech solutions, and leadership growth.
            </p>
          </div>
        </motion.section>

        {/* Technical Skills */}
        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl font-bold gradient-text mb-6">Technical Skills</h2>
          <div className="glass rounded-xl p-6 grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="text-white font-semibold mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-700 text-sm text-gray-300 rounded-full">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Projects & Achievements */}
        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl font-bold gradient-text mb-6">Technical Projects & Key Achievements</h2>
          <div className="glass rounded-xl p-6 space-y-8">
            {projectsAchievements.map((item, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <ul className="space-y-2 ml-5">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Professional Experience & Ventures */}
        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl font-bold gradient-text mb-6">Professional Experience & Ventures</h2>
          <div className="glass rounded-xl p-6 space-y-6">
            {ventures.map((v, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold text-white">{v.title}</h3>
                <p className="text-gray-400">{v.duration}</p>
                <p className="text-gray-300">{v.details}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Leadership & Campus Involvement */}
        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl font-bold gradient-text mb-6">Leadership & Campus Involvement</h2>
          <div className="glass rounded-xl p-6 space-y-6">
            {leadership.map((l, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold text-white">{l.role}</h3>
                <p className="text-gray-300">{l.details}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl font-bold gradient-text mb-6">Certifications</h2>
          <div className="glass rounded-xl p-6">
            <ul className="space-y-2 ml-5">
              {certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Currently Exploring */}
        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl font-bold gradient-text mb-6">Currently Exploring</h2>
          <div className="glass rounded-xl p-6">
            <ul className="space-y-2 ml-5">
              {focus.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl font-bold gradient-text mb-6">Education</h2>
          <div className="glass rounded-xl p-6 space-y-6">
            {education.map((edu, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-lg gradient-text font-semibold">{edu.school}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-gray-400">{edu.duration}</p>
                  <p className="text-gray-300">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
