import ProjectCard from '@/components/project-card';
import { projects } from '@/lib/data';
import MagicBento from '../magic-bento';
import { bentoCardData } from '@/lib/data';

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-secondary py-20 md:py-32 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of my work.
          </p>
        </div>
        <MagicBento 
          cardData={bentoCardData}
          enableStars={false}
          enableSpotlight={false}
          enableBorderGlow={true}
          textAutoHide={true}
          enableTilt={true}
          enableMagnetism={false}
          clickEffect={true}
        />
      </div>
    </section>
  );
}
