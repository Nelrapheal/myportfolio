import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, PERSONAL_INFO } from '../constants';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/Hide logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Active Section Logic
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-black/50 border-b border-[#00f0ff]/20"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            className="text-xl font-bold tracking-tighter text-white"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[#00f0ff]">&lt;</span>
            {PERSONAL_INFO.name.split(' ')[1]}
            <span className="text-[#00f0ff]">/&gt;</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 relative group ${
                  activeSection === item.href.substring(1) ? 'text-[#00f0ff]' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-[#00f0ff] transform origin-left transition-transform duration-300 ${
                  activeSection === item.href.substring(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-2xl font-bold text-white hover:text-[#00f0ff] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
