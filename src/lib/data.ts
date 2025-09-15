import type { Project, Service, BentoCardData } from './types';

export const services: Service[] = [
  {
    title: 'Web App Development',
    icon: 'LayoutTemplate',
    description: 'Building robust and scalable web applications tailored to your needs.',
  },
  {
    title: 'Mobile Development',
    icon: 'Smartphone',
    description: 'Building responsive and performant mobile applications for both iOS and Android.',
  },
  {
    title: 'Custom Development',
    icon: 'Code',
    description: 'Tailoring software solutions to meet your specific business needs and requirements.',
  },
  {
    title: 'SEO Optimization',
    icon: 'Rocket',
    description: 'Improving your website\'s visibility on search engines to attract more organic traffic.',
  }
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with features like product catalog, shopping cart, and secure checkout. Built with a modern tech stack to ensure scalability and a great user experience.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/seed/p1/600/400',
    imageHint: 'online store',
    liveUrl: '#',
    githubUrl: '#',
    industry: 'E-commerce',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A collaborative task management application designed for teams to organize, track, and manage their work. Features include real-time updates, kanban boards, and user authentication.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: 'https://picsum.photos/seed/p2/600/400',
    imageHint: 'kanban board',
    liveUrl: '#',
    githubUrl: '#',
    industry: 'Productivity SaaS',
  },
  {
    id: 'project-3',
    title: 'Portfolio Website Builder',
    description: 'A dynamic portfolio builder that allows users to create and customize their own professional websites. This project itself is an example of what can be built!',
    technologies: ['Next.js', 'ShadCN UI', 'Vercel'],
    imageUrl: 'https://picsum.photos/seed/p3/600/400',
    imageHint: 'website builder',
    liveUrl: '#',
    githubUrl: '#',
    industry: 'Creative Technology',
  },
];

export const bentoCardData: BentoCardData[] = [
  {
    color: '#060010',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with features like product catalog, shopping cart, and secure checkout.',
    label: 'Next.js',
    imageUrl: 'https://picsum.photos/seed/p1/600/400',
    imageHint: 'online store',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    color: '#060010',
    title: 'Task Management App',
    description: 'A collaborative task management application designed for teams to organize, track, and manage their work.',
    label: 'React',
    imageUrl: 'https://picsum.photos/seed/p2/600/400',
    imageHint: 'kanban board',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    color: '#060010',
    title: 'Portfolio Website Builder',
    description: 'A dynamic portfolio builder that allows users to create and customize their own professional websites.',
    label: 'Next.js',
    imageUrl: 'https://picsum.photos/seed/p3/600/400',
    imageHint: 'website builder',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    color: '#060010',
    title: 'Data Analytics Dashboard',
    description: 'A powerful dashboard for visualizing key business metrics and gaining actionable insights from your data.',
    label: 'Analytics',
    imageUrl: 'https://picsum.photos/seed/p4/600/400',
    imageHint: 'dashboard analytics',
    liveUrl: '#',
  },
  {
    color: '#060010',
    title: 'AI Content Generator',
    description: 'Leverage generative AI to create high-quality content for blogs, marketing, and more with just a few clicks.',
    label: 'GenAI',
    imageUrl: 'https://picsum.photos/seed/p5/600/400',
    imageHint: 'artificial intelligence',
    githubUrl: '#',
  },
  {
    color: '#060010',
    title: 'Cloud Deployment',
    description: 'Automated, secure, and scalable cloud deployment solutions to get your applications running efficiently.',
    label: 'DevOps',
    imageUrl: 'https://picsum.photos/seed/p6/600/400',
    imageHint: 'cloud infrastructure'
  }
];
