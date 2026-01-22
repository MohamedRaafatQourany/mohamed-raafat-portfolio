'use client';

import { motion } from 'framer-motion';
import { Code2, Sparkles, Zap } from 'lucide-react';

export default function About() {
  const skills = [
    'React.js', 'TypeScript', 'Next.js', 'JavaScript',
    'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design',
    'RESTful APIs', 'Git', 'UI/UX Design', 'Framer Motion',"Nodejs","Datadog"
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Software Engineer specializing in React.js and TypeScript, currently working at Breadfast 
              on scalable, production-level web applications and dashboards.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Experienced in building responsive UIs, integrating RESTful APIs, and migrating legacy 
              systems to modern React architectures.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Background in support and operations adds strong problem-solving skills and a 
              business-oriented mindset. Also working as a freelance web developer, delivering 
              high-quality, performance-focused solutions for global clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center mb-3">
                <Code2 className="w-6 h-6 text-purple-400 mr-3" />
                <h4 className="text-xl font-bold text-white">4+ Years</h4>
              </div>
              <p className="text-gray-300">Professional Experience</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center mb-3">
                <Sparkles className="w-6 h-6 text-purple-400 mr-3" />
                <h4 className="text-xl font-bold text-white">Rising Talent</h4>
              </div>
              <p className="text-gray-300">Upwork Badge & $2000+ Earnings</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center mb-3">
                <Zap className="w-6 h-6 text-purple-400 mr-3" />
                <h4 className="text-xl font-bold text-white">Location</h4>
              </div>
              <p className="text-gray-300">Cairo, Egypt</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30 hover:bg-purple-600/30 transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
