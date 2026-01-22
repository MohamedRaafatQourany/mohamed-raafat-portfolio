'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title:"Dr. Badr Al Shibani",
      link:"https://drbadr.com/",
      technologies:['Wordpress']
    },
    {
      title: 'BD Media',
      link: 'https://bdmedia.me',
      technologies: ['Wordpress'],
    },
    {
      title: 'Raafat Consults',
      link: 'https://raafatconsults.com',
      technologies: ['Next.js', 'React', 'CSS'],
    },
    {
      title: 'Sash and Company',
      link: 'https://sashandcompany.com',
      technologies: ['Wordpress', 'API Integration'],
    },
    {
      title: 'Roastmaster 9000',
      link: 'https://roastmaster9000.com',
      technologies: ['Wordpress'],
    },
    {
      title: 'Gulf EF',
      link: 'https://gulf-ef.com',
      technologies: ['Next.js', 'React', 'Tailwind CSS'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-lg hover:bg-purple-500 transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/mohamedraafatqourany"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-full hover:bg-purple-600 transition-all duration-300 border border-white/20"
          >
            <Github className="w-5 h-5 mr-2" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
