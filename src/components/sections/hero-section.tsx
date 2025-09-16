'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import TextType from '../TextType';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import ParticleBackground from '../particle-background';

gsap.registerPlugin(ScrollToPlugin);


export default function HeroSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [particleColor, setParticleColor] = useState<string>('#888888');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Using CSS variables to fetch theme colors
      const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
      const foregroundColor = getComputedStyle(document.documentElement).getPropertyValue('--foreground').trim();
      
      if (theme === 'dark') {
         setParticleColor(`hsl(${primaryColor})`);
      } else {
        setParticleColor(`hsl(${foregroundColor})`);
      }
    }
  }, [theme, mounted]);


  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      gsap.to(window, { scrollTo: aboutSection, duration: 1, ease: 'power2.inOut' });
    }
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-background transition-colors duration-300">
       {mounted && (
        <ParticleBackground
          particleColor={particleColor}
          className="absolute inset-0 z-0 h-full w-full"
        />
      )}
      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-12 md:grid-cols-1">
          <div className="flex flex-col justify-center space-y-6 text-center">
            <div className="space-y-4">
              <p className="font-body text-lg font-semibold text-primary/80">Hi, I'm Araiz Khan</p>
              <TextType
                as="h1"
                text={[
                  "I Build Modern Web Experiences",
                  "I Engineer Scalable Solutions",
                  "I Create Beautiful Interfaces",
                  "I Solve Complex Problems"
                ]}
                className="text-4xl font-bold tracking-tighter !leading-tight sm:text-5xl md:text-6xl xl:text-7xl"
                typingSpeed={50}
                deletingSpeed={25}
                pauseDuration={2000}
                loop={true}
              />
              <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
                As a dedicated software developer, I specialize in crafting elegant, high-performance web solutions that deliver exceptional user experiences. I transform complex challenges into intuitive and efficient applications that not only meet but exceed user expectations.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
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
