import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { services } from '@/lib/data';
import type { Icon as LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';


// A map to dynamically render icons
import { LayoutTemplate, Smartphone, Code, Rocket } from 'lucide-react';
const iconMap: { [key: string]: LucideIcon } = {
  LayoutTemplate,
  Smartphone,
  Code,
  Rocket,
};

const iconColors = [
  'text-chart-1',
  'text-chart-2',
  'text-chart-3',
  'text-chart-4',
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div>
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            What I Offer
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="fade-in-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <Card className="transform text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/20 h-full">
                  <CardHeader className="items-center">
                    {Icon && <Icon className={cn('h-12 w-12', iconColors[i % iconColors.length])} />}
                    <CardTitle className="mt-4 text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
