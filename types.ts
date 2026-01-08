export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  image: string;
  githubUrl: string;
  demoUrl: string;
  color: string; // Hex for the glow
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools';
  level: number; // 0-100
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
