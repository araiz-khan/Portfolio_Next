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
    description: 'A full-stack e-commerce solution.',
    label: 'Next.js',
    imageUrl: 'https://picsum.photos/seed/p1/600/400',
    imageHint: 'online store'
  },
  {
    color: '#060010',
    title: 'Task Management App',
    description: 'A collaborative task management app.',
    label: 'React',
    imageUrl: 'https://picsum.photos/seed/p2/600/400',
    imageHint: 'kanban board'
  },
  {
    color: '#060010',
    title: 'Portfolio Website Builder',
    description: 'A dynamic portfolio builder.',
    label: 'Next.js',
    imageUrl: 'https://picsum.photos/seed/p3/600/400',
    imageHint: 'website builder'
  },
  {
    color: '#060010',
    title: 'Data Analytics Dashboard',
    description: 'Visualize your key business metrics.',
    label: 'Analytics',
    imageUrl: 'https://picsum.photos/seed/p4/600/400',
    imageHint: 'dashboard analytics'
  },
  {
    color: '#060010',
    title: 'AI Content Generator',
    description: 'Leverage AI to create content.',
    label: 'GenAI',
    imageUrl: 'https://picsum.photos/seed/p5/600/400',
    imageHint: 'artificial intelligence'
  },
  {
    color: '#060010',
    title: 'Cloud Deployment',
    description: 'Secure and scalable cloud solutions.',
    label: 'DevOps',
    imageUrl: 'https://picsum.photos/seed/p6/600/400',
    imageHint: 'cloud infrastructure'
  }
];
