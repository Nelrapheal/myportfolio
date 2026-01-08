import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#b000ff]">Projects</span></h2>
          <div className="w-24 h-1 bg-[#00f0ff] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-xl border border-gray-800 bg-[#121212] transition-all duration-300 hover:border-opacity-0">
                {/* Glow Effect behind */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00f0ff] to-[#b000ff] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20" />
                
                {/* Image Area */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 z-10 transition-opacity group-hover:opacity-0" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  {/* Floating Tech Badges */}
                  <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                     {project.tech.slice(0,3).map(t => (
                        <span key={t} className="px-2 py-1 text-xs font-bold bg-black/70 backdrop-blur-md text-[#00f0ff] border border-[#00f0ff]/30 rounded">
                           {t}
                        </span>
                     ))}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 relative z-20 bg-[#121212]">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00f0ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4">
                    <a 
                      href={project.demoUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-[#00f0ff]/10 border border-gray-700 hover:border-[#00f0ff] text-white rounded transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-white/5 text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
