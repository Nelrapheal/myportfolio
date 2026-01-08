import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, SKILLS } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Purple Blob */}
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#b000ff]/10 blur-[100px] rounded-full" 
        />
        
        {/* Animated Blue Blob */}
        <motion.div 
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-0 left-[-100px] w-80 h-80 bg-[#00f0ff]/10 blur-[80px] rounded-full" 
        />

        {/* Tech Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
                 backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, 
                 backgroundSize: '24px 24px' 
             }} 
        />

        {/* Floating Particles for Depth */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#39ff14] rounded-full mix-blend-screen"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -50 + "%"],
              x: [null, `${(Math.random() - 0.5) * 30}%`],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          {/* Bio Side */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-[#00f0ff]" />
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About Me</h2>
            </div>
            
            <div className="p-6 border border-[#333] bg-white/5 backdrop-blur-sm rounded-lg relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00f0ff] to-[#b000ff]" />
              <p className="text-gray-300 leading-relaxed text-lg">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            <div className="mt-8 flex gap-4">
               <div className="flex flex-col">
                  <span className="text-4xl font-bold text-white">03+</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wider">Years Exp.</span>
               </div>
               <div className="w-[1px] h-12 bg-gray-800" />
               <div className="flex flex-col">
                  <span className="text-4xl font-bold text-white">20+</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wider">Projects</span>
               </div>
            </div>
          </div>

          {/* Skills Visualization Side */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-[#39ff14]">#</span> Primary Skills
            </h3>
            
            <div className="space-y-6">
              {SKILLS.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-[#00f0ff]">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full rounded-full ${
                        skill.category === 'Frontend' ? 'bg-[#00f0ff]' : 
                        skill.category === 'Backend' ? 'bg-[#b000ff]' : 'bg-[#39ff14]'
                      } shadow-[0_0_10px_currentColor]`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
