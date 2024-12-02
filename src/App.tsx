import React from 'react';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { DonatePage } from './pages/DonatePage';

export default function App() {
  // For now, we'll just show the HomePage
  // Later we can add routing to switch between pages
  return <HomePage />;
}