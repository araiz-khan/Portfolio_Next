'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/types';

export default function ProjectCard({ project }: { project: Project }) {

  return (
    <>
      <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:shadow-accent/20">
        <CardHeader>
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={project.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <CardTitle className="mb-2 text-xl">{project.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start gap-4">
          <div className="flex w-full justify-start items-center">
            <div>
              {project.downloadUrl ? (
                <Button variant="ghost" size="sm" asChild>
                  <Link href={project.downloadUrl} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" /> Download
                  </Link>
                </Button>
              ) : project.liveUrl ? (
                <Button variant="ghost" size="sm" asChild>
                  <Link href={project.liveUrl} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              ) : null}
              {project.githubUrl && (
                <Button variant="ghost" size="sm" asChild>
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4" /> Source
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
