import React from 'react';
import { motion } from 'framer-motion';
import { SOCIALS } from '../constants';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { NeonButton } from './NeonButton';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#050505] relative border-t border-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Initialize <span className="text-[#b000ff]">Contact</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ready to collaborate on the next big thing? Send a transmission across the network.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Social Links */}
          <div className="space-y-8">
             <h3 className="text-xl text-white font-mono mb-4 border-l-4 border-[#00f0ff] pl-4">Direct Channels</h3>
             <div className="space-y-4">
                {SOCIALS.map((social) => {
                   const Icon = social.name === 'GitHub' ? Github : social.name === 'LinkedIn' ? Linkedin : Mail;
                   return (
                      <a 
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-[#111] border border-gray-800 rounded hover:border-[#00f0ff] hover:shadow-[0_0_15px_#00f0ff30] transition-all group"
                      >
                         <div className="p-2 bg-black rounded text-[#00f0ff] group-hover:text-white transition-colors">
                            <Icon size={20} />
                         </div>
                         <span className="text-gray-300 group-hover:text-white font-medium">{social.name}</span>
                      </a>
                   )
                })}
             </div>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
             <h3 className="text-xl text-white font-mono mb-4 border-l-4 border-[#b000ff] pl-4">Send Message</h3>
             
             <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-[#111] border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-[#b000ff] transition-colors rounded-sm"
                />
             </div>
             
             <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-[#111] border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-[#b000ff] transition-colors rounded-sm"
                />
             </div>
             
             <div className="relative group">
                <textarea 
                  rows={4} 
                  placeholder="Message Protocol..." 
                  className="w-full bg-[#111] border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-[#b000ff] transition-colors rounded-sm resize-none"
                />
             </div>

             <NeonButton variant="secondary" className="w-full flex justify-center items-center gap-2">
                Send Transmission <Send size={16} />
             </NeonButton>
          </form>
        </div>
        
        <div className="mt-24 text-center text-gray-600 text-sm font-mono">
           <p>© 2077 Olafisoye Nelson. System Online.</p>
        </div>
      </div>
    </section>
  );
};
