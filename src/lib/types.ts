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

export interface BentoCardData {
  color?: string;
  title?: string;
  description?: string;
  label?: string;
  imageUrl?: string;
  imageHint?: string;
  textAutoHide?: boolean;
  disableAnimations?: boolean;
  liveUrl?: string;
  githubUrl?: string;
}
