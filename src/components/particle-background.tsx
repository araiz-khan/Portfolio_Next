'use client';
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './particle-background.css';
import { cn } from '@/lib/utils';

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
}

interface ParticleBackgroundProps {
  particleCount?: number;
  particleColor?: string;
  className?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 50,
  particleColor = '#ffffff',
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const finalParticleCount = isMobile ? Math.floor(particleCount / 2) : particleCount;

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < finalParticleCount; i++) {
      newParticles.push({
        id: i,
        size: gsap.utils.random(2, 8),
        x: gsap.utils.random(0, 100),
        y: gsap.utils.random(0, 100),
      });
    }
    setParticles(newParticles);
  }, [finalParticleCount]);

  useEffect(() => {
    if (particles.length > 0 && containerRef.current) {
      setIsLoaded(true);
      const particleElements = containerRef.current.children;
      gsap.to(containerRef.current, { opacity: 1, duration: 1, delay: 0.5 });
      gsap.to(particleElements, { opacity: 1, duration: 1, stagger: 0.02 });

      particles.forEach((particle, i) => {
        const pEl = particleElements[i];
        if (pEl) {
          const duration = gsap.utils.random(10, 30);
          const delay = gsap.utils.random(0, 15);
          
          const animateParticle = () => {
            const endX = gsap.utils.random(particle.x - 5, particle.x + 5);
            const endY = gsap.utils.random(particle.y - 5, particle.y + 5);
            
            gsap.to(pEl, {
              x: `${endX}vw`,
              y: `${endY}vh`,
              opacity: gsap.utils.random(0.1, 0.6),
              duration: duration,
              delay: delay,
              ease: 'power1.inOut',
              repeat: -1,
              yoyo: true,
              onRepeat: () => {
                gsap.to(pEl, {
                  opacity: 0,
                  duration: duration / 2,
                  ease: 'power1.inOut',
                  yoyo: true,
                  repeat: 1
                });
              }
            });
          };
          animateParticle();
        }
      });
    }
  }, [particles]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'particle-background',
        isLoaded && 'particle-background--loaded',
        className
      )}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            backgroundColor: particleColor,
            boxShadow: `0 0 10px ${particleColor}, 0 0 15px ${particleColor}`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
