import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
          alt="Nature background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Protecting Our Planet,<br />
            Preserving Our Future
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join us in our mission to create a sustainable future through conservation,
            education, and community action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center">
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}