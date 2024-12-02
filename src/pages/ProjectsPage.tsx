import React from 'react';
import { Navbar } from '../components/navigation/Navbar';
import { Footer } from '../components/navigation/Footer';
import { PageHeader } from '../components/ui/PageHeader';
import { ProjectGrid } from '../components/projects/ProjectGrid';
import { ProjectFilters } from '../components/projects/ProjectFilters';
import { useProjects } from '../hooks/useProjects';

export function ProjectsPage() {
  const { projects, filters, setFilters } = useProjects();

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Our Projects"
        description="Explore our environmental initiatives and their impact across the globe."
        image="https://images.unsplash.com/photo-1466611653911-95081537e5b7"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProjectFilters filters={filters} onChange={setFilters} />
        <ProjectGrid projects={projects} />
      </div>
      <Footer />
    </div>
  );
}