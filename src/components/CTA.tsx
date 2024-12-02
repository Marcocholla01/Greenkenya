import React from 'react';
import { Heart } from 'lucide-react';

export function CTA() {
  return (
    <div className="bg-green-600 py-16" id="join">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Heart className="h-12 w-12 text-white/90 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-white mb-4">
          Join Us in Making a Difference
        </h2>
        <p className="text-green-100 mb-8 max-w-2xl mx-auto">
          Your support helps us continue our vital work in environmental conservation
          and community development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Donate Now
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
            Become a Volunteer
          </button>
        </div>
      </div>
    </div>
  );
}