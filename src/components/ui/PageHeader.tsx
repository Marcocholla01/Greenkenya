import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  image: string;
}

export function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <div className="relative py-24 bg-gray-900">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">{description}</p>
      </div>
    </div>
  );
}