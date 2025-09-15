import Image from 'next/image';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Download,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About Me
            </h2>
            <div
            className="flex items-center justify-center py-4 md:hidden"
            >
                <Image
                    src="https://picsum.photos/seed/avatar/400/400"
                    alt="Profile Avatar"
                    width={200}
                    height={200}
                    className="rounded-full object-cover shadow-lg"
                    data-ai-hint="professional portrait"
                />
            </div>
            <p className="text-muted-foreground md:text-lg">
              I am a results-oriented software developer with a passion for
              creating elegant and efficient solutions. With a strong foundation
              in modern web technologies, I thrive on tackling complex
              challenges and turning ideas into reality. I am a lifelong
              learner, constantly exploring new tools and techniques to push the
              boundaries of what&apos;s possible.
            </p>
            <p className="text-muted-foreground md:text-lg">
              When I&apos;m not coding, I enjoy hiking, photography, and
              exploring new coffee shops.
            </p>
            <div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 pt-8"
            >
              <div className="flex items-center gap-4">
                <User className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-semibold">Araiz Khan</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:araizkhaan@gmail.com"
                    className="font-semibold hover:underline"
                  >
                    araizkhaan@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+923393939399" className="font-semibold hover:underline">
                    +92 339 3939399
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold">Lahore, Pakistan</p>
                </div>
              </div>
            </div>
            <div className="pt-8 flex items-center gap-4">
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <Link href="https://github.com/araiz-khan" target="_blank">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <Link href="https://www.linkedin.com/in/araiz-khan/" target="_blank">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <Link href="https://x.com/araiz_exe" target="_blank">
                    <Twitter className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <Link href="https://stackoverflow.com/users/21872928/araiz-khan" target="_blank">
                    <StackOverflowIcon className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <Button asChild>
                <Link href="/Araiz-Khan-CV.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Link>
              </Button>
            </div>
          </div>
          <div
            className="hidden items-center justify-center md:flex"
          >
            <Image
              src="https://picsum.photos/seed/avatar/400/400"
              alt="Profile Avatar"
              width={400}
              height={400}
              className="rounded-full object-cover shadow-lg"
              data-ai-hint="professional portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
