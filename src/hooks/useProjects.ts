import { useState } from 'react';
import { ProjectFilters, Project } from '../types';

export function useProjects() {
  const [filters, setFilters] = useState<ProjectFilters>({
    category: 'all',
    location: 'all',
    status: 'all',
  });

  // Mock data - in a real app, this would come from an API
  const projects: Project[] = [
    {
      id: 1,
      title: 'Amazon Rainforest Protection',
      category: 'Conservation',
      location: 'Brazil',
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1550686041-366ad85a1355',
      description: 'Protecting indigenous lands and preserving biodiversity in the Amazon.',
    },
    // Add more projects...
  ];

  return { projects, filters, setFilters };
}