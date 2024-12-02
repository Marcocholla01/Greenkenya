import React from 'react';
import { Leaf, Droplets, SunMedium } from 'lucide-react';

export function Initiatives() {
  return (
    <div className="py-16 bg-white" id="initiatives">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Initiatives</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We focus on key environmental challenges through targeted programs
            and community engagement.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InitiativeCard
            icon={<Leaf className="h-8 w-8" />}
            title="Reforestation"
            description="Leading massive tree-planting campaigns to restore forests and combat climate change."
          />
          <InitiativeCard
            icon={<Droplets className="h-8 w-8" />}
            title="Water Conservation"
            description="Protecting water resources and ensuring clean water access for communities."
          />
          <InitiativeCard
            icon={<SunMedium className="h-8 w-8" />}
            title="Renewable Energy"
            description="Promoting sustainable energy solutions and reducing carbon emissions."
          />
        </div>
      </div>
    </div>
  );
}

function InitiativeCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-green-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
      <div className="text-green-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}