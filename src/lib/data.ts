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
    title: 'AI-Powered Recipe Generator',
    description: 'A web app that generates unique recipes based on user-provided ingredients, using generative AI. Features saving, and sharing.',
    technologies: ['Next.js', 'TypeScript', 'Genkit', 'Firebase'],
    imageUrl: 'https://picsum.photos/seed/food-app/600/400',
    imageHint: 'recipe application',
    liveUrl: '#',
    githubUrl: '#',
    industry: 'Food Tech',
  },
  {
    id: 'project-2',
    title: 'Real-time Stock Dashboard',
    description: 'A dashboard displaying real-time stock market data with interactive charts and a personalized watchlist. Built with a focus on low-latency data streaming.',
    technologies: ['React', 'WebSockets', 'Tailwind CSS', 'Recharts'],
    imageUrl: 'https://picsum.photos/seed/stock-dashboard/600/400',
    imageHint: 'stock charts',
    liveUrl: '#',
    githubUrl: '#',
    industry: 'FinTech',
  },
  {
    id: 'project-3',
    title: 'Fitness Tracker Mobile App',
    description: 'A cross-platform mobile app for tracking workouts, setting fitness goals, and visualizing progress over time. Includes social features to connect with friends.',
    technologies: ['React Native', 'GraphQL', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/seed/fitness-app/600/400',
    imageHint: 'fitness application',
    liveUrl: '#',
    githubUrl: '#',
    industry: 'Health & Fitness',
  },
];

export const bentoCardData: BentoCardData[] = [
  {
    color: '#060010',
    title: 'AI Recipe Generator',
    description: 'Generates unique recipes from ingredients you have at home using generative AI.',
    label: 'GenAI',
    imageUrl: '/images/your-project-image-1.png',
    imageHint: 'recipe application',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    color: '#060010',
    title: 'Real-time Stock Dashboard',
    description: 'Interactive dashboard for tracking stock prices and market trends in real-time.',
    label: 'FinTech',
    imageUrl: 'https://picsum.photos/seed/stock-dashboard/600/400',
    imageHint: 'stock charts',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    color: '#060010',
    title: 'Fitness Tracker App',
    description: 'A mobile app to log workouts, track progress, and connect with a fitness community.',
    label: 'Mobile',
    imageUrl: 'https://picsum.photos/seed/fitness-app/600/400',
    imageHint: 'fitness application',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    color: '#060010',
    title: 'Interactive Travel Planner',
    description: 'A web platform for planning trips with collaborative itineraries and map integrations.',
    label: 'Travel',
    imageUrl: 'https://picsum.photos/seed/travel-planner/600/400',
    imageHint: 'travel map',
    liveUrl: '#',
  },
  {
    color: '#060010',
    title: 'Customer Support Chatbot',
    description: 'An AI-powered chatbot to automate customer service and answer FAQs on e-commerce sites.',
    label: 'AI Chatbot',
    imageUrl: 'https://picsum.photos/seed/chatbot/600/400',
    imageHint: 'support chatbot',
    githubUrl: '#',
  },
  {
    color: '#060010',
    title: 'Serverless Video Processor',
    description: 'A cloud-native solution for automatically transcoding and watermarking uploaded videos.',
    label: 'Cloud',
    imageUrl: 'https://picsum.photos/seed/video-processing/600/400',
    imageHint: 'cloud processing'
  }
];
