'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './particle-background.css';
import { cn } from '@/lib/utils';

interface ParticleBackgroundProps {
  particleCount?: number;
  particleColor?: string;
  className?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 50,
  particleColor = '#ffffff',
  className
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const finalParticleCount = isMobile ? Math.floor(particleCount / 2) : particleCount;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < finalParticleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      container.appendChild(particle);
      particles.push(particle);

      const size = gsap.utils.random(3, 10);
      const duration = gsap.utils.random(10, 30);
      const delay = gsap.utils.random(0, 15);
      const startX = gsap.utils.random(0, 100);
      const startY = gsap.utils.random(0, 100);

      gsap.set(particle, {
        width: size,
        height: size,
        x: `${startX}vw`,
        y: `${startY}vh`,
        backgroundColor: particleColor,
        opacity: 0,
        boxShadow: `0 0 15px ${particleColor}, 0 0 25px ${particleColor}`,
      });

      const animateParticle = (p: HTMLDivElement) => {
        const endX = gsap.utils.random(startX - 10, startX + 10);
        const endY = gsap.utils.random(startY - 10, startY + 10);

        gsap.to(p, {
          x: `${endX}vw`,
          y: `${endY}vh`,
          opacity: gsap.utils.random(0.1, 0.6),
          duration: duration,
          delay: delay,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true,
          onRepeat: () => {
             gsap.to(p, {
                opacity: 0,
                duration: duration / 2,
                ease: 'power1.inOut',
                yoyo: true,
                repeat: 1
            });
          }
        });
      };
      
      animateParticle(particle);
    }
    
    return () => {
      particles.forEach(particle => {
        gsap.killTweensOf(particle);
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
      });
    };
  }, [finalParticleCount, particleColor]);

  return <div ref={containerRef} className={cn("particle-background", className)} />;
};

export default ParticleBackground;
