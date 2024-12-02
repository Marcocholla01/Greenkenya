import React from 'react';
import { Navbar } from '../components/navigation/Navbar';
import { Hero } from '../components/sections/Hero';
import { Stats } from '../components/sections/Stats';
import { About } from '../components/sections/About';
import { Initiatives } from '../components/sections/Initiatives';
import { Projects } from '../components/sections/Projects';
import { Team } from '../components/sections/Team';
import { Testimonials } from '../components/sections/Testimonials';
import { Blog } from '../components/sections/Blog';
import { CTA } from '../components/sections/CTA';
import { Footer } from '../components/navigation/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Initiatives />
      <Projects />
      <Team />
      <Testimonials />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
}