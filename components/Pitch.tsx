'use client';

import { useEffect } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css'; // You can choose other themes like 'white', 'league', etc.

export default function RevealPresentation() {
  useEffect(() => {
    // Ensure Reveal.js is only initialized in the browser
    if (typeof window !== 'undefined') {
      const deck = new Reveal();
      deck.initialize();
    }
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