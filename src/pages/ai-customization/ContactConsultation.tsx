
import React from 'react';
import Layout from '@/components/layout/Layout';
import ContactHeader from '@/components/ai-customization/contact/ContactHeader';
import ContactForm from '@/components/ai-customization/contact/ContactForm';
import ContactInfo from '@/components/ai-customization/contact/ContactInfo';
import ServiceProcess from '@/components/ai-customization/contact/ServiceProcess';

const ContactConsultation = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <ContactHeader />
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <ContactForm />
          </div>
          
          <div>
            <ContactInfo />
            <ServiceProcess />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactConsultation;
