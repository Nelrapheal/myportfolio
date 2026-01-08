import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Layout, Server, Terminal, Cpu, Globe, Layers } from 'lucide-react';

// Enhanced Tech interface with relationships
interface TechItem {
  name: string;
  icon: any;
  color: string;
  related: string[];
}

const techs: TechItem[] = [
  { name: 'React', icon: Cpu, color: '#00f0ff', related: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js'] },
  { name: 'TypeScript', icon: Code2, color: '#3178c6', related: ['React', 'Next.js', 'Node.js', 'Express'] },
  { name: 'Next.js', icon: Globe, color: '#ffffff', related: ['React', 'TypeScript', 'Tailwind'] },
  { name: 'Tailwind', icon: Layout, color: '#38bdf8', related: ['React', 'Next.js'] },
  { name: 'Node.js', icon: Server, color: '#39ff14', related: ['Express', 'MongoDB', 'React', 'TypeScript'] },
  { name: 'Python', icon: Terminal, color: '#ffde57', related: ['MongoDB'] },
  { name: 'MongoDB', icon: Database, color: '#4db33d', related: ['Node.js', 'Express', 'Python'] },
  { name: 'Express', icon: Layers, color: '#ffffff', related: ['Node.js', 'MongoDB', 'TypeScript'] },
];

export const TechStack: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [lines, setLines] = useState<{ x1: number; y1: number; x2: number; y2: number; color: string }[]>([]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseEnter = (tech: TechItem, index: number) => {
    setHoveredTech(tech.name);
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const startRect = itemRefs.current[index]?.getBoundingClientRect();
    
    if (!startRect) return;

    // Calculate start center relative to container
    const x1 = startRect.left - containerRect.left + startRect.width / 2;
    const y1 = startRect.top - containerRect.top + startRect.height / 2;

    const newLines = tech.related.map((relatedName) => {
      const relatedIndex = techs.findIndex(t => t.name === relatedName);
      if (relatedIndex === -1) return null;

      const endRect = itemRefs.current[relatedIndex]?.getBoundingClientRect();
      if (!endRect) return null;

      // Calculate end center relative to container
      const x2 = endRect.left - containerRect.left + endRect.width / 2;
      const y2 = endRect.top - containerRect.top + endRect.height / 2;

      return { x1, y1, x2, y2, color: tech.color };
    }).filter(Boolean) as { x1: number; y1: number; x2: number; y2: number; color: string }[];

    setLines(newLines);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
    setLines([]);
  };

  return (
    <section id="stack" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background circuit lines */}
      <div className="absolute inset-0 opacity-10" 
           style={{ 
               backgroundImage: `radial-gradient(circle at 2px 2px, #333 1px, transparent 0)`, 
               backgroundSize: '40px 40px' 
           }} 
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Technology <span className="text-[#39ff14]">Constellation</span></h2>
          <p className="text-gray-400">The tools I use to build the future.</p>
        </motion.div>

        <div className="relative" ref={containerRef}>
          {/* SVG Overlay for Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <AnimatePresence>
              {lines.map((line, i) => (
                <motion.line
                  key={i}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke={line.color}
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{ filter: `drop-shadow(0 0 5px ${line.color})` }}
                />
              ))}
            </AnimatePresence>
          </svg>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {techs.map((tech, index) => (
              <motion.div
                key={tech.name}
                ref={(el) => (itemRefs.current[index] = el)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onMouseEnter={() => handleMouseEnter(tech, index)}
                onMouseLeave={handleMouseLeave}
                className={`p-6 bg-[#111] border rounded-lg flex flex-col items-center justify-center gap-4 transition-all duration-300 relative overflow-hidden cursor-crosshair
                  ${hoveredTech === tech.name ? 'border-opacity-100' : 'border-gray-800 border-opacity-50'}
                `}
                style={{
                  borderColor: hoveredTech === tech.name ? tech.color : undefined,
                  boxShadow: hoveredTech === tech.name ? `0 0 20px ${tech.color}40` : 'none'
                }}
              >
                {/* Glow Background */}
                <div 
                  className="absolute inset-0 opacity-0 transition-opacity duration-300"
                  style={{ 
                    opacity: hoveredTech === tech.name ? 0.1 : 0,
                    background: `radial-gradient(circle at center, ${tech.color}, transparent)`
                  }}
                />
                
                <motion.div
                  animate={hoveredTech === tech.name ? { scale: 1.1, filter: `drop-shadow(0 0 10px ${tech.color})` } : { scale: 1, filter: 'drop-shadow(0 0 0px transparent)' }}
                >
                  <tech.icon 
                    size={40} 
                    className="text-gray-500 transition-colors duration-300" 
                    style={{ color: hoveredTech === tech.name ? tech.color : undefined }}
                  />
                </motion.div>
                
                <span 
                  className="font-mono text-sm transition-colors duration-300"
                  style={{ color: hoveredTech === tech.name ? '#fff' : '#9ca3af' }}
                >
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
