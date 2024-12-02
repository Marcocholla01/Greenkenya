import React from 'react';
import { Navbar } from '../components/navigation/Navbar';
import { Footer } from '../components/navigation/Footer';
import { PageHeader } from '../components/ui/PageHeader';
import { Timeline } from '../components/sections/Timeline';
import { Values } from '../components/sections/Values';
import { Team } from '../components/sections/Team';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="About EcoGuard"
        description="Learn about our mission, values, and the team behind our environmental initiatives."
        image="https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
      />
      <Values />
      <Timeline />
      <Team />
      <Footer />
    </div>
  );
}