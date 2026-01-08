import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-[#00f0ff] selection:text-black">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </main>
    </div>
  );
}

export default App;
