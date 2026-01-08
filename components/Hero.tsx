import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { NeonButton } from './NeonButton';

export const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = PERSONAL_INFO.title;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Moving Background Grid */}
      <motion.div 
        initial={{ backgroundPosition: "0px 0px" }}
        animate={{ backgroundPosition: "64px 64px" }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"
      />

      {/* Cyberpunk Scanline */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-[#00f0ff]/10 to-transparent h-[20px] w-full blur-sm"
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Particles (Enhanced) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#00f0ff] rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.2,
              scale: Math.random() * 0.8 + 0.2,
            }}
            animate={{
              y: [null, Math.random() * -100 + "%"], // Move upwards generally
              x: [null, `${(Math.random() - 0.5) * 50}%`], // Sway horizontally
              opacity: [0, 0.8, 0], // Fade in and out
            }}
            transition={{
              duration: Math.random() * 10 + 15, // Varying speeds (15-25s)
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              filter: `blur(${Math.random() * 2}px)`, // Depth of field effect
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#00f0ff] tracking-widest uppercase text-sm mb-4 font-bold"
        >
          Hello World, I am
        </motion.p>
        
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter"
        >
          <span className="relative inline-block">
            {PERSONAL_INFO.name}
            <span className="absolute -inset-1 animate-pulse bg-[#00f0ff]/20 blur-xl"></span>
          </span>
        </motion.h1>

        <motion.div 
          className="h-10 md:h-16 mb-8 text-2xl md:text-4xl font-mono text-gray-400"
        >
          <span>&gt; </span>
          {displayText}
          <span className="animate-blink">_</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <NeonButton href="#projects" variant="primary">View Projects</NeonButton>
          <NeonButton href="#contact" variant="secondary">Contact Me</NeonButton>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-[#00f0ff]/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-[#00f0ff] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
