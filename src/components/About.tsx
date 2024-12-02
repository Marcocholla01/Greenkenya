import React from 'react';
import { Shield, Heart, TreePine } from 'lucide-react';

export function About() {
  return (
    <div className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Committed to Environmental Protection Since 1990
            </h2>
            <p className="text-gray-600 mb-8">
              For over three decades, we've been at the forefront of environmental conservation,
              working tirelessly to protect our planet's precious resources and create a
              sustainable future for generations to come.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ValueCard
                icon={<Shield className="h-6 w-6 text-green-600" />}
                title="Our Mission"
                description="Protect and preserve Earth's biodiversity"
              />
              <ValueCard
                icon={<Heart className="h-6 w-6 text-green-600" />}
                title="Our Vision"
                description="A world where nature and humanity thrive together"
              />
              <ValueCard
                icon={<TreePine className="h-6 w-6 text-green-600" />}
                title="Our Impact"
                description="Creating lasting change through action"
              />
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
              alt="Conservation work"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-lg">
              <p className="text-4xl font-bold">30+</p>
              <p className="text-sm">Years of Impact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-4">
      <div className="mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}