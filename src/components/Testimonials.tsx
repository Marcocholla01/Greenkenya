import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <div className="py-24 bg-green-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What People Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our supporters and community members about their experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Working with EcoGuard has been an incredible experience. Their dedication to environmental conservation is truly inspiring."
            author="John Smith"
            role="Volunteer"
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
          />
          <TestimonialCard
            quote="The impact they've made in our community through their water conservation project has been remarkable."
            author="Maria Garcia"
            role="Community Leader"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
          />
          <TestimonialCard
            quote="Their commitment to sustainable practices and education has created lasting change in our region."
            author="James Wilson"
            role="Partner Organization"
            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
          />
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
  image,
}: {
  quote: string;
  author: string;
  role: string;
  image: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <Quote className="h-8 w-8 text-green-600 mb-4" />
      <p className="text-gray-600 mb-6">{quote}</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}