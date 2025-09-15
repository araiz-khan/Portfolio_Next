'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, User, Mail, FolderGit, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AKIcon } from './ak-icon';
import { ThemeToggle } from './theme-toggle';

const navItems = [
  { href: '#about', label: 'About', icon: User },
  { href: '#services', label: 'Services', icon: Wrench },
  { href: '#projects', label: 'Projects', icon: FolderGit },
  { href: '#contact', label: 'Contact', icon: Mail },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    if(isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
    }
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMobileMenu();
  };


  const NavLink = ({ href, children, isMobile = false }: { href: string; children: React.ReactNode, isMobile?: boolean }) => (
    <Link
      href={href}
      onClick={(e) => handleNavClick(e, href)}
      className={cn(
        "font-medium transition-colors hover:text-primary relative group",
        isMobile ? 'text-lg' : 'text-sm',
      )}
    >
      <span>{children}</span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'border-b border-border/40 bg-background/80 backdrop-blur-lg' : 'bg-background'
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="#top" onClick={(e) => handleNavClick(e, '#top')} className={cn('flex items-center gap-2 transition-all duration-300 ml-5', !isScrolled && 'md:mt-8')}>
          <AKIcon
            className={cn(
              'transform-gpu transition-transform duration-300 ease-in-out',
              isScrolled ? 'scale-[0.45]' : 'md:scale-150'
            )}
          />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
          ))}
           <ThemeToggle />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="p-6">
                 <Link href="#top" onClick={(e) => handleNavClick(e, '#top')} className="flex items-center gap-2 mb-8">
                    <AKIcon className="h-8 w-8 text-2xl" />
                </Link>
                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <NavLink key={item.href} href={item.href} isMobile>
                      <div className="flex items-center gap-4">
                        <item.icon className="h-5 w-5 text-muted-foreground" />
                        {item.label}
                      </div>
                    </NavLink>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
