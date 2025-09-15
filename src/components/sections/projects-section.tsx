import ProjectCard from '@/components/project-card';
import { projects } from '@/lib/data';

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-secondary py-20 md:py-32 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div>
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="fade-in-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
