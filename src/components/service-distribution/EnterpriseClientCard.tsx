
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChevronRight } from 'lucide-react';
import { getIndustryIcon } from './IndustryCategories';

export interface EnterpriseClient {
  id: string;
  name: string;
  logo: string;
  industry: string;
  location: string;
  country: string;
  usageType: string[];
  deploymentType: 'cloud' | 'hybrid' | 'on-premise' | 'edge';
  modelCount: number;
  firstDeployed: string;
}

export const getDeploymentBadge = (type: string) => {
  switch (type) {
    case 'cloud':
      return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">云端部署</Badge>;
    case 'hybrid':
      return <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">混合部署</Badge>;
    case 'on-premise':
      return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">本地部署</Badge>;
    case 'edge':
      return <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">边缘部署</Badge>;
    default:
      return <Badge variant="outline">未知</Badge>;
  }
};

interface EnterpriseClientCardProps {
  client: EnterpriseClient;
}

const EnterpriseClientCard: React.FC<EnterpriseClientCardProps> = ({ client }) => {
  return (
    <Card key={client.id} className="overflow-hidden hover:border-primary/50 transition-colors">
      <CardHeader className="pb-0">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <Avatar className="h-12 w-12 mr-3 rounded-md">
              <AvatarImage src={client.logo} alt={client.name} />
              <AvatarFallback className="bg-primary/10 text-primary rounded-md">
                {client.name.substring(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{client.name}</CardTitle>
              <div className="flex items-center text-sm text-muted-foreground">
                {getIndustryIcon(client.industry)}
                <span className="ml-1">{client.industry}</span>
              </div>
            </div>
          </div>
          {getDeploymentBadge(client.deploymentType)}
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">地区</span>
            <span>{client.location}，{client.country}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">部署模型</span>
            <span>{client.modelCount}个</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">首次部署</span>
            <span>{client.firstDeployed}</span>
          </div>
          <div className="pt-2">
            <div className="text-sm text-muted-foreground mb-2">应用场景</div>
            <div className="flex flex-wrap gap-2">
              {client.usageType.map((usage, idx) => (
                <Badge key={idx} variant="outline" className="bg-muted/50">
                  {usage}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <div className="px-6 pb-6">
        <Button variant="outline" className="w-full flex items-center justify-center" asChild>
          <Link to={`/case-studies/${client.id}`}>
            查看详情
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
};

export default EnterpriseClientCard;
