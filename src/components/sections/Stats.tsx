import React from 'react';
import { TreePine, Users, Globe2 } from 'lucide-react';

export function Stats() {
  return (
    <div className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            icon={<TreePine className="h-8 w-8 text-green-600" />}
            number="1M+"
            label="Trees Planted"
          />
          <StatCard
            icon={<Users className="h-8 w-8 text-green-600" />}
            number="50K"
            label="Volunteers Worldwide"
          />
          <StatCard
            icon={<Globe2 className="h-8 w-8 text-green-600" />}
            number="100+"
            label="Conservation Projects"
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <div className="text-3xl font-bold text-gray-900 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}