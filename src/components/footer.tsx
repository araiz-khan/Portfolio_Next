'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { AKIcon } from './ak-icon';

function StackOverflowIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 32 37"
      fill="currentColor"
    >
        <path d="M29.237 36.338H2.733V23.585h3.958v8.804h18.588v-8.804h3.958v12.753zM7.962 19.632l19.492 4.365 1.05-3.83-19.49-4.365-1.052 3.83zm2.526-7.005L28.09 18.57l2.103-3.32-17.602-5.943-2.103 3.32zm5.257-6.52L24.12 11.05l3.155-2.613-11.38-8.125-3.155 2.613zm10.932-5.46L15.3 6.965l3.958 1.838 11.38-8.126-3.958-1.838zM2.733 19.632h26.504V15.67H2.733v3.962z"></path>
    </svg>
  );
}


export default function Footer() {
  const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);


  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background transition-colors duration-300">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <div className="flex items-center gap-2">
           <Link href="#top" onClick={scrollToTop}>
            <AKIcon className="h-8 w-8 text-2xl" />
          </Link>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="rounded-full" asChild>
            <Link href="https://github.com/araizkhan" target="_blank"><Github className="h-5 w-5" /></Link>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full" asChild>
            <Link href="https://linkedin.com/in/araiz-khan" target="_blank"><Linkedin className="h-5 w-5" /></Link>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full" asChild>
            <Link href="https://twitter.com/araiz_khan" target="_blank"><Twitter className="h-5 w-5" /></Link>
          </Button>
           <Button variant="outline" size="icon" className="rounded-full" asChild>
            <Link href="https://stackoverflow.com/users/22490048/araiz-khan" target="_blank">
              <StackOverflowIcon className="h-5 w-5" />
            </Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Araiz Khan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
