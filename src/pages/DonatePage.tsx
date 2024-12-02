import React from 'react';
import { Navbar } from '../components/navigation/Navbar';
import { Footer } from '../components/navigation/Footer';
import { PageHeader } from '../components/ui/PageHeader';
import { DonationForm } from '../components/donation/DonationForm';
import { DonationImpact } from '../components/donation/DonationImpact';

export function DonatePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Support Our Cause"
        description="Your donation helps us continue our vital environmental conservation work."
        image="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <DonationForm />
          <DonationImpact />
        </div>
      </div>
      <Footer />
    </div>
  );
}