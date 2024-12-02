import React from 'react';
import { Navbar } from '../components/navigation/Navbar';
import { Footer } from '../components/navigation/Footer';
import { PageHeader } from '../components/ui/PageHeader';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';

export function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Contact Us"
        description="Get in touch with us to learn more about our initiatives or how you can help."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <Footer />
    </div>
  );
}