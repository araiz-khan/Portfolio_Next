'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import './magic-bento.css';

interface Card {
  color?: string;
  title: string;
  description: string;
  label?: string;
  imageUrl?: string;
  imageHint?: string;
  liveUrl?: string;
  githubUrl?: string;
  downloadUrl?: string;
  width?: number;
  height?: number;
}

interface MagicBentoProps {
  cardData: Card[];
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  textAutoHide?: boolean;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
}

const MagicBento: React.FC<MagicBentoProps> = ({
  cardData,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  textAutoHide = true,
  enableTilt = true,
  enableMagnetism = false,
  clickEffect = true,
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const { toast } = useToast();
  const [isMobile, setIsMobile] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    setIsMobile(typeof window !== 'undefined' && window.innerWidth < 768);
  }, []);

  // Generate stars
  useEffect(() => {
    if (!enableStars || !gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('.card');
    cards.forEach((card) => {
      const starsContainer = card.querySelector('.stars-container');
      if (starsContainer) return; // Already generated

      const container = document.createElement('div');
      container.className = 'stars-container';
      container.style.cssText = 'position: absolute; inset: 0; pointer-events: none; z-index: 1;';
      
      // Generate 20 stars per card
      for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.cssText = `
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          opacity: ${Math.random() * 0.5 + 0.3};
          animation: twinkle ${Math.random() * 3 + 2}s ease-in-out infinite;
          animation-delay: ${Math.random() * 2}s;
        `;
        container.appendChild(star);
      }
      
      card.appendChild(container);
    });
  }, [enableStars, cardData]);

  return (
    <div className="card-grid bento-section" ref={gridRef}>
      {cardData.map((card, index) => {
        const baseClassName = `card group ${textAutoHide ? 'card--text-autohide' : ''} ${
          enableBorderGlow ? 'card--border-glow' : ''
        }`;

        const backgroundColor = isDark ? (card.color || '#060010') : 'hsl(var(--card))';

        const cardProps = {
          className: baseClassName,
          style: {
            backgroundColor: backgroundColor,
            '--glow-x': '50%',
            '--glow-y': '50%',
            '--glow-intensity': '0',
            '--glow-radius': '300px',
          } as React.CSSProperties,
        };

        return (
          <div key={index} {...cardProps}>
            {card.imageUrl && (
              <img
                src={card.imageUrl}
                alt={card.title || 'Project image'}
                className={cn(
                  'absolute inset-0 h-full w-full object-cover transition-opacity duration-300',
                  isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                )}
                loading="lazy"
              />
            )}

            <div className="card__header">
              {card.label && <span className="card__label">{card.label}</span>}
            </div>

            <div className="card__content">
              <h2 className="card__title">{card.title}</h2>
              <p className="card__description">{card.description}</p>
              <div className="card__buttons mt-4 flex gap-2">
                {card.downloadUrl ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    className={isDark ? 'text-white hover:bg-white/10 hover:text-white' : 'text-foreground hover:bg-black/10 hover:text-foreground'}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (card.downloadUrl && card.downloadUrl !== '#') {
                        window.open(card.downloadUrl, '_blank');
                      }
                    }}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Download
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    className={isDark ? 'text-white hover:bg-white/10 hover:text-white' : 'text-foreground hover:bg-black/10 hover:text-foreground'}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (card.liveUrl && card.liveUrl !== '#') {
                        window.open(card.liveUrl, '_blank');
                      } else {
                        toast({
                          title: 'Live Demo Coming Soon',
                          description: 'This project is currently in development. Check back later!',
                        });
                      }
                    }}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Button>
                )}
                {card.githubUrl && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className={isDark ? 'text-white hover:bg-white/10 hover:text-white' : 'text-foreground hover:bg-black/10 hover:text-foreground'}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (card.githubUrl && card.githubUrl !== '#') {
                        window.open(card.githubUrl, '_blank');
                      } else {
                        toast({
                          title: 'Source Code Coming Soon',
                          description: 'The source code for this project will be available soon!',
                        });
                      }
                    }}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> GitHub
                  </Button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MagicBento;
