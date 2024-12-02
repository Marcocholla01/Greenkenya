import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export function Blog() {
  return (
    <div className="py-24 bg-gray-50" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest environmental initiatives and success stories.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlogCard
            image="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
            title="Successful Reforestation Project in Amazon"
            date="Mar 15, 2024"
            description="Our team successfully planted 50,000 trees in the Amazon rainforest."
          />
          <BlogCard
            image="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1"
            title="Clean Water Initiative Reaches Milestone"
            date="Mar 10, 2024"
            description="Providing clean water access to 100 communities across Africa."
          />
          <BlogCard
            image="https://images.unsplash.com/photo-1466611653911-95081537e5b7"
            title="Solar Power Project Launch"
            date="Mar 5, 2024"
            description="New solar installation bringing renewable energy to rural areas."
          />
        </div>
      </div>
    </div>
  );
}

function BlogCard({
  image,
  title,
  date,
  description,
}: {
  image: string;
  title: string;
  date: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          {date}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="text-green-600 font-medium inline-flex items-center hover:text-green-700">
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}