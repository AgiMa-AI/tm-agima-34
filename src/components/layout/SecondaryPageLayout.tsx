
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface SecondaryPageLayoutProps {
  title: string;
  description: string;
  backLink: string;
  backLabel: string;
  children: ReactNode;
  className?: string;
}

const SecondaryPageLayout = ({
  title,
  description,
  backLink,
  backLabel,
  children,
  className
}: SecondaryPageLayoutProps) => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="mb-4 pl-1 hover:bg-background/80">
            <Link to={backLink}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {backLabel}
            </Link>
          </Button>
          
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>
        
        <div className={className}>
          {children}
        </div>
      </div>
    </Layout>
  );
};

export default SecondaryPageLayout;
