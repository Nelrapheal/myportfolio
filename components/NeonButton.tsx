import React from 'react';
import { motion } from 'framer-motion';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
}

export const NeonButton: React.FC<NeonButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  href
}) => {
  const baseClasses = "relative px-8 py-3 font-bold text-sm tracking-widest uppercase transition-all duration-300 group overflow-hidden border";
  
  const primaryClasses = "border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black shadow-[0_0_10px_#00f0ff50] hover:shadow-[0_0_20px_#00f0ff]";
  const secondaryClasses = "border-[#b000ff] text-[#b000ff] hover:bg-[#b000ff] hover:text-black shadow-[0_0_10px_#b000ff50] hover:shadow-[0_0_20px_#b000ff]";

  const content = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 h-full w-full scale-0 rounded-sm transition-all duration-300 group-hover:scale-100 group-hover:bg-opacity-100" />
    </motion.button>
  );

  if (href) {
    return <a href={href} className="inline-block">{content}</a>;
  }

  return content;
};
