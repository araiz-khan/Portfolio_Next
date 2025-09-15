import MagicBento from '@/components/magic-bento';
import { bentoCardData } from '@/lib/data';


export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-background py-20 md:py-32 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div>
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
        </div>
        <MagicBento cardData={bentoCardData} enableStars={false} enableTilt={false} />
      </div>
    </section>
  );
}
