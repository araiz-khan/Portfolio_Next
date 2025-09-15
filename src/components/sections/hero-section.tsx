'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import TextType from '../TextType';
import TiltedCard from '../TiltedCard';
import Image from 'next/image';
import { Card } from '../ui/card';

export default function HeroSection() {

  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-background transition-colors duration-300">
      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center space-y-6">
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
          <div className="hidden items-center justify-center md:flex">
            <TiltedCard
                containerHeight="400px"
                cardHeight="400px"
                cardWidth="400px"
                showTooltip={false}
                scaleOnHover={1.05}
                className="bg-card"
            >
                <div className="relative w-full h-full rounded-3xl overflow-hidden">
                    <Image
                        src="https://picsum.photos/seed/hero/600/600"
                        alt="Abstract hero image"
                        fill
                        className="object-cover"
                        data-ai-hint="abstract design"
                    />
                </div>
            </TiltedCard>
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
