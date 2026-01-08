import { Project, Skill, NavItem, SocialLink } from './types';
import { Code2, Database, Layout, Server, Terminal, Cpu } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Olafisoye Nelson",
  title: "Frontend Developer",
  tagline: "Forging Neon Interfaces on Obsidian Logic",
  bio: "I bridge the gap between futuristic UI design and robust backend logic. With a specialized focus on React ecosystems and Python-driven backends, I build web applications that look like 2077 but perform like a well-oiled machine."
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Spendly',
    description: 'A futuristic financial tracking dashboard for managing personal expenses and analyzing budgets with real-time data visualization.',
    tech: ['React', 'TypeScript', 'Node.js', 'Recharts', 'MongoDB'],
    features: ['Real-time expense tracking', 'Visual budget analytics', 'Recurring transaction automation'],
    image: 'https://picsum.photos/800/600?grayscale',
    githubUrl: '#',
    demoUrl: '#',
    color: '#00f0ff' // Electric Blue
  },
  {
    id: '2',
    title: 'LecClean',
    description: 'An AI-powered document processor that transforms unstructured, messy PDFs into clean, readable, and structured study materials.',
    tech: ['Python', 'Flask', 'OpenAI API', 'React', 'Tailwind'],
    features: ['AI Text Extraction', 'Smart Formatting', 'Auto-Summarization'],
    image: 'https://picsum.photos/800/601?grayscale',
    githubUrl: '#',
    demoUrl: '#',
    color: '#b000ff' // Neon Purple
  }
];

export const SKILLS: Skill[] = [
  { name: 'HTML5/CSS3', category: 'Frontend', level: 95, icon: 'Layout' },
  { name: 'JavaScript/ES6+', category: 'Frontend', level: 90, icon: 'Code2' },
  { name: 'React/Next.js', category: 'Frontend', level: 88, icon: 'Cpu' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 92, icon: 'Layout' },
  { name: 'Python', category: 'Backend', level: 80, icon: 'Terminal' },
  { name: 'Express.js', category: 'Backend', level: 75, icon: 'Server' },
  { name: 'MongoDB', category: 'Backend', level: 70, icon: 'Database' },
];

export const SOCIALS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
  { name: 'Email', url: 'mailto:hello@example.com', icon: 'Mail' },
];