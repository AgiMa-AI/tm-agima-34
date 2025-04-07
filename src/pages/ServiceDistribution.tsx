
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDistributionHeader from '@/components/service-distribution/ServiceDistributionHeader';
import IndustryCategories, { industryCategories } from '@/components/service-distribution/IndustryCategories';
import IndustryFilters from '@/components/service-distribution/IndustryFilters';
import SearchBar from '@/components/service-distribution/SearchBar';
import EnterpriseClientCard from '@/components/service-distribution/EnterpriseClientCard';
import PromotionCard from '@/components/service-distribution/PromotionCard';
import PartnershipCard from '@/components/service-distribution/PartnershipCard';
import { mockEnterpriseClients } from '@/components/service-distribution/EnterpriseClientData';

const ServiceDistribution = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [industryFilter, setIndustryFilter] = useState<string | null>(null);
  const [displayedIndustries, setDisplayedIndustries] = useState<string[]>(['全部']);
  
  // Compute all available industries
  const allIndustries = ['全部'].concat(
    industryCategories.flatMap(category => 
      category.subIndustries ? category.subIndustries : [category.name]
    ).filter((value, index, self) => self.indexOf(value) === index)
  );
  
  useEffect(() => {
    if (!activeCategory || activeCategory === 'all') {
      setDisplayedIndustries(allIndustries);
    } else {
      const category = industryCategories.find(cat => cat.id === activeCategory);
      if (category && category.subIndustries) {
        setDisplayedIndustries(['全部', ...category.subIndustries]);
      } else {
        setDisplayedIndustries(allIndustries);
      }
    }
    
    setIndustryFilter('全部');
  }, [activeCategory, allIndustries]);
  
  const filteredClients = mockEnterpriseClients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          client.industry.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesIndustry = true;
    
    if (industryFilter && industryFilter !== '全部') {
      matchesIndustry = client.industry === industryFilter;
    } else if (activeCategory && activeCategory !== 'all') {
      const category = industryCategories.find(cat => cat.id === activeCategory);
      if (category && category.subIndustries) {
        matchesIndustry = category.subIndustries.includes(client.industry);
      }
    }
    
    return matchesSearch && matchesIndustry;
  });

  return (
    <Layout>
      <div className="container py-6">
        <h1 className="text-3xl font-bold mb-6">服务分布</h1>
        
        <ServiceDistributionHeader />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          
          <IndustryCategories 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
        </div>
        
        <IndustryFilters 
          displayedIndustries={displayedIndustries}
          industryFilter={industryFilter}
          setIndustryFilter={setIndustryFilter}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredClients.map((client) => (
            <EnterpriseClientCard key={client.id} client={client} />
          ))}
        </div>
        
        <PromotionCard />
        
        <PartnershipCard />
      </div>
    </Layout>
  );
};

export default ServiceDistribution;
