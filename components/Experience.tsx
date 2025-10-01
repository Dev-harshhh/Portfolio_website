'use client';

import { motion } from "framer-motion";

const achievements = [
  {
    title: "Class Representative (CR)",
    year: "2023-Present",
    details:
      "Led academic coordination and communication for 500+ students. Acted as the bridge between management and students, ensuring smooth information flow.",
    icon: "🎓",
  },
  {
    title: "TPP CR",
    year: "2024-Present",
    details:
      "Led placement drives, ensured seamless execution of interviews and career-focused initiatives by DCPD.",
    icon: "🎗️",
  },
  {
    title: "Book & Product Reviews",
    year: "2019-Present",
    details:
      "Partnered with authors, publishers, and brands for book and product reviews. Managed outreach and collaborations independently.",
    icon: "💡",
  },
  {
    title: "Patent Applicant",
    year: "2025-Present",
    details:
      "Filed a patent for a digital commerce, integrating affiliate systems with buyer segmentation and chatbot-driven product recommendation — currently under university review.",
    icon: "📄",
  },
  {
    title: "YOC Core Team",
    year: "2025-26",
    details:
      "Directed logistics for major campus events. Managed 1000+ participants.",
    icon: "🎙️",
  },
  {
    title: "Event Coordinator",
    year: "2023-25",
    details:
      "Organized and managed multiple campus events under DACA & DSW including CU Fests, Orientations, Freshers. Ensured safety, discipline, and high-quality execution.",
    icon: "🎤",
  },
  {
    title: "Hackathon Enthusiast",
    year: "2024-25",
    details:
      "Participated in multiple hackathons, focused on solving Real Life problems via innovative projects on AI/ML, Web-Dev, and many more.",
    icon: "💻",
  },
  {
    title: "Inventions & Innovations",
    year: "2023-Present",
    details:
      "Designed and conceptualized several innovative solutions including, solar energy sharing system, an ergonomic shaker bottle, an efficient transport idea focused on sustainability and connectivity.",
    icon: "🧑🏻‍🔧",
  },
];

export default function AchievementsLeadership() {
  return (
    <section id="achievements" className="py-16 bg-slate-900/60">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          Achievements & Leadership
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((ach, idx) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-slate-800/80 rounded-xl shadow-lg p-5 flex flex-col gap-2
                         hover:shadow-blue-400 hover:scale-105 hover:z-10 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{ach.icon}</span>
                <span className="font-semibold text-lg text-blue-300">{ach.title}</span>
                <span className="ml-auto text-xs text-gray-400">{ach.year}</span>
              </div>
              <div className="text-gray-300 text-sm">{ach.details}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
