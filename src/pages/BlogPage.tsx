import React from 'react';
import { Navbar } from '../components/navigation/Navbar';
import { Footer } from '../components/navigation/Footer';
import { PageHeader } from '../components/ui/PageHeader';
import { BlogGrid } from '../components/blog/BlogGrid';
import { BlogSidebar } from '../components/blog/BlogSidebar';
import { useBlogPosts } from '../hooks/useBlogPosts';

export function BlogPage() {
  const { posts, categories } = useBlogPosts();

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Latest News"
        description="Stay updated with our latest environmental initiatives and success stories."
        image="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <BlogGrid posts={posts} />
          </div>
          <BlogSidebar categories={categories} />
        </div>
      </div>
      <Footer />
    </div>
  );
}