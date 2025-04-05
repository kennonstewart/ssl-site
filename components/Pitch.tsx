'use client';

import { useEffect } from 'react';
import 'reveal.js/dist/reveal.css';

export default function RevealPresentation() {
  useEffect(() => {
    // Dynamically import Reveal.js to ensure it's only loaded in the browser
    async function initializeReveal() {
      if (typeof window !== 'undefined') {
        const Reveal = (await import('reveal.js')).default;
        const deck = new Reveal();
        deck.initialize();
      }
    }

    initializeReveal();
  }, []);
  return (
    <div className="reveal">
      <div className="slides">
        <section>
          <h2>Second Street Lab Co.</h2>
          <p>AI Built in Midtown Detroit</p>
        </section>
        <section>
          <h2>What We Do</h2>
          <p>We specialize in data analytics, machine learning, and automation.</p>
        </section>
        <section>
          <h2>Join Us</h2>
          <p>Tap in to Detroit's Data Ecosystem.</p>
        </section>
      </div>
    </div>
  );
}