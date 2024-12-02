import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

export function Team() {
  return (
    <div className="py-24 bg-white" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated individuals working tirelessly to protect our environment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <TeamMember
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            name="Sarah Johnson"
            role="Executive Director"
            linkedin="#"
            twitter="#"
          />
          <TeamMember
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            name="David Chen"
            role="Conservation Director"
            linkedin="#"
            twitter="#"
          />
          <TeamMember
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            name="Emily Rodriguez"
            role="Program Manager"
            linkedin="#"
            twitter="#"
          />
          <TeamMember
            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            name="Michael Lee"
            role="Research Lead"
            linkedin="#"
            twitter="#"
          />
        </div>
      </div>
    </div>
  );
}

function TeamMember({
  image,
  name,
  role,
  linkedin,
  twitter,
}: {
  image: string;
  name: string;
  role: string;
  linkedin: string;
  twitter: string;
}) {
  return (
    <div className="text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-gray-600 mb-3">{role}</p>
      <div className="flex justify-center space-x-3">
        <a
          href={linkedin}
          className="text-gray-400 hover:text-blue-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href={twitter}
          className="text-gray-400 hover:text-blue-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}