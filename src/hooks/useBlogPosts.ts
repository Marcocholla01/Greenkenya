import { useState } from 'react';
import { BlogPost, Category } from '../types';

export function useBlogPosts() {
  // Mock data - in a real app, this would come from an API
  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'Successful Reforestation Project in Amazon',
      date: 'Mar 15, 2024',
      category: 'Conservation',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      description: 'Our team successfully planted 50,000 trees in the Amazon rainforest.',
    },
    // Add more posts...
  ];

  const categories: Category[] = [
    { id: 1, name: 'Conservation', count: 12 },
    { id: 2, name: 'Water Resources', count: 8 },
    { id: 3, name: 'Sustainability', count: 15 },
    // Add more categories...
  ];

  return { posts, categories };
}