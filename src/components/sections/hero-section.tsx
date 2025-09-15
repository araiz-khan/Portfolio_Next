'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Threads from '../threads';
import { useTheme } from 'next-themes';

export default function HeroSection() {
  const { theme } = useTheme();

  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Primary color for dark theme (light threads) and dark color for light theme (dark threads)
  const threadColor = theme === 'dark' ? [0.9, 0.9, 0.9] : [0.1, 0.1, 0.1];


  return (
    <section id="hero" className="relative w-full overflow-hidden bg-background transition-colors duration-300">
        <div className="absolute inset-0 z-0">
             <Threads
                color={threadColor}
                amplitude={1}
                distance={0}
                enableMouseInteraction={true}
            />
        </div>
      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <p className="font-body text-lg font-semibold text-primary/80">Hi, I'm Araiz Khan</p>
              <h1 className="text-4xl font-bold tracking-tighter !leading-tight sm:text-5xl md:text-6xl xl:text-7xl">
                I Build Modern Web Experiences
              </h1>
              <p className="max-w-xl text-muted-foreground md:text-xl">
                As a dedicated software developer, I specialize in crafting elegant, high-performance web solutions that deliver exceptional user experiences. I transform complex challenges into intuitive and efficient applications that not only meet but exceed user expectations.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
          
        </div>
      </div>
      <Link
          href="#about"
          onClick={handleScrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20"
          aria-label="Scroll down"
        >
        <ChevronDown className="h-8 w-8 text-primary" />
      </Link>
    </section>
  );
}
