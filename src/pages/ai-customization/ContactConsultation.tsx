
import React from 'react';
import SecondaryPageLayout from '@/components/layout/SecondaryPageLayout';
import ContactHeader from '@/components/ai-customization/contact/ContactHeader';
import ContactForm from '@/components/ai-customization/contact/ContactForm';
import ContactInfo from '@/components/ai-customization/contact/ContactInfo';
import ServiceProcess from '@/components/ai-customization/contact/ServiceProcess';

const ContactConsultation = () => {
  return (
    <SecondaryPageLayout
      title="专属定制咨询"
      description="获取定制化AI解决方案的专业咨询"
      backLink="/ai-customization"
      backLabel="返回AI定制服务"
    >
      <ContactHeader />
      
      <div className="grid md:grid-cols-3 gap-8 mt-6">
        <div className="md:col-span-2">
          <ContactForm />
        </div>
        
        <div>
          <ContactInfo />
          <ServiceProcess />
        </div>
      </div>
    </SecondaryPageLayout>
  );
};

export default ContactConsultation;
