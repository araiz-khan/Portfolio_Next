export type Service = {
  title: string;
  icon: string;
  description: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  imageHint: string;
  liveUrl?: string;
  githubUrl?: string;
  industry: string;
};
