'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Front End Engineer',
      company: 'Breadfast',
      period: 'November 2024 - Present',
      location: 'Egypt',
      highlights: [
        'Develop and maintain scalable React applications using modern JavaScript frameworks',
        'Collaborate with UX/UI designers to implement responsive and user-friendly interfaces',
        'Integrate RESTful APIs endpoints to enhance application functionality',
        'Led the front end development for Fintech Management System from planning to production',
        'Participated in revamping legacy dashboard and migrate from WordPress to React',
        'Worked in multiple tech squads (Supply Chain, Shopping App)',
      ],
    },
    {
      title: 'Senior Support Engineer',
      company: 'Breadfast',
      period: 'February 2024 - November 2024',
      location: 'Egypt',
      highlights: [
        'Acting as the team expert and delegate of the direct manager',
        'Developed a React.js dashboard as a solution for a daily critical issue',
        'Provided exceptional technical support, decreasing customer complaints',
        'Developed and conducted training sessions for newly hired support engineers',
      ],
    },
    {
      title: 'Freelance Web Developer',
      company: 'Upwork',
      period: 'October 2023 - Present',
      location: 'Worldwide',
      highlights: [
        'Achieved Upwork Rising Talent badge and +$2000 USD earnings',
        'Delivered custom websites and web applications for variety of clients across industries',
        'Built responsive, user-friendly, and performance-optimized solutions',
        'Projects ranged from landing pages to e-commerce platforms and dynamic dashboards',
      ],
    },
    {
      title: 'Software Support Engineer',
      company: 'Breadfast',
      period: 'October 2022 - February 2024',
      location: 'Cairo, Egypt',
      highlights: [
        'Provided exceptional technical support to clients',
        'Improved efficiency by 50% through new troubleshooting methods',
        'Reduced support ticket volume by 50% with proactive measures',
        'Led to a 15% reduction in critical bugs',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-purple-500/30"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900"></div>

              <div className="ml-8 md:ml-0 md:w-[calc(100%-2rem)]">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <Briefcase className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div className="flex flex-col justify-start align-middle">
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-purple-400 text-start font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start">
                        <span className="text-purple-400 mr-2">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
