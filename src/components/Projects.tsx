import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Projects() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Latest Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the impact we're making through our various environmental initiatives
            around the world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            image="https://images.unsplash.com/photo-1550686041-366ad85a1355"
            title="Amazon Rainforest Protection"
            category="Conservation"
            description="Protecting indigenous lands and preserving biodiversity in the Amazon."
          />
          <ProjectCard
            image="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51"
            title="Clean Water Initiative"
            category="Water Resources"
            description="Providing clean water access to communities in need."
          />
          <ProjectCard
            image="https://images.unsplash.com/photo-1466611653911-95081537e5b7"
            title="Renewable Energy Projects"
            category="Sustainability"
            description="Implementing solar power solutions in rural communities."
          />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  image,
  title,
  category,
  description,
}: {
  image: string;
  title: string;
  category: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <span className="text-sm text-green-600 font-medium">{category}</span>
        <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="text-green-600 font-medium inline-flex items-center hover:text-green-700">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}