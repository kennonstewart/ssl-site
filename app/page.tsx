'use client';

import ScrollSection from '@/components/ScrollSection';
import { sections } from '@/data/sections';

export default function Home() {
  return (
    <main className="w-full bg-transparent">
      {sections.map((section, index) => (
        <ScrollSection key={index} title={section.title} content={section.content} />
      ))}
    </main>
  );
}
