'use client';

import { motion } from 'framer-motion';

interface ScrollSectionProps {
  title: string;
  content: string;
}

export default function ScrollSection({ title, content }: ScrollSectionProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center"
      >
        <span className="gradient-text">{title}</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg max-w-xl"
      >
        {content}
      </motion.p>
    </section>
  );
}
