'use client';

import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

export function ClientAnimatedCursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      innerStyle={{
        backgroundColor: 'hsl(var(--primary))'
      }}
      outerStyle={{
        border: '3px solid hsl(var(--primary))'
      }}
    />
  );
}
