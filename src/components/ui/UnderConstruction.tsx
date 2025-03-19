
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Construction } from 'lucide-react';

interface UnderConstructionProps {
  contactLink?: string;
  contactLabel?: string;
  message?: string;
}

const UnderConstruction = ({
  contactLink,
  contactLabel = "获取咨询",
  message = "该页面正在建设中，我们将尽快上线完整内容。"
}: UnderConstructionProps) => {
  return (
    <div className="bg-muted/30 rounded-lg p-8 md:p-10 text-center">
      <Construction className="h-12 w-12 mx-auto mb-4 text-muted-foreground/70" />
      <h2 className="text-2xl font-bold mb-2">页面建设中</h2>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        {message}
      </p>
      {contactLink && (
        <Button asChild className="px-6">
          <Link to={contactLink}>
            {contactLabel}
          </Link>
        </Button>
      )}
    </div>
  );
};

export default UnderConstruction;
