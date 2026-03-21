import { Github, Twitter, Linkedin, Instagram, Mail, Code2, Terminal, Monitor, Database } from 'lucide-react';

export const personalInfo = {
  name: "Thirupathi Reddy Kapa",
  role: "Software Engineer",
  // I build exceptional and accessible digital experiences for the web. Specialized in building pixel-perfect, interactive, and performant user interfaces.
  bio: "From building robots to managing cloud infrastructure — a software engineer who loves turning bold ideas into reality.",
  email: "thirupathireddykapa@gmail.com",
  socials: [
    { name: "GitHub", url: "https://github.com/thirupathireddykr", icon: Github },
    { name: "Twitter", url: "https://twitter.com", icon: Twitter },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/thirupathireddyk/", icon: Linkedin },
    { name: "Instagram", url: "https://www.instagram.com/thirupathireddy.kr/", icon: Instagram },
  ]
};

export const skills = [
  { name: "Java", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
];

export const experience = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    company: "TechNova",
    duration: "2021 - Present",
    description: "Led the frontend architecture for the flagship SaaS product, improving load times by 40% using Next.js and React Server Components.",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A high-performance modern e-commerce storefront with complex state management, custom cart logic, and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "AI Writing Assistant",
    description: "An AI-powered application that helps users write better content faster. Features real-time grammar checking and tone adjustment.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
    techStack: ["React", "OpenAI API", "Framer Motion", "Node.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Fintech Dashboard",
    description: "A dark-themed, data-heavy dashboard for monitoring crypto portfolios and market trends with real-time WebSocket updates.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    techStack: ["React", "Chart.js", "Tailwind CSS", "WebSockets"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 4,
    title: "Developer Blogging Platform",
    description: "A custom MDX-based blogging platform optimized for developers, featuring syntax highlighting, embedded live code editors, and SEO best practices.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop",
    techStack: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  }
];
