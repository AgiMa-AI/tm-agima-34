
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ShoppingBag, TrendingUp, Package, Users, BarChart4, ChevronRight, Store, Truck, CreditCard, LineChart } from 'lucide-react';

const RetailSolution = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold flex items-center">
            <ShoppingBag className="mr-2 h-6 w-6" />
            零售业AI解决方案
          </h1>
          <p className="mt-2 text-blue-100">
            为零售业务提供智能化的数据分析、客户洞察和库存管理
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>智能零售解决方案概述</CardTitle>
              <CardDescription>
                提升客户体验和运营效率的AI技术
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                我们的零售AI解决方案涵盖从供应链到客户体验的全过程，帮助零售商提高运营效率，优化库存管理，
                并通过个性化推荐提升客户忠诚度和销售额。
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="border p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="h-5 w-5 text-primary mr-2" />
                    <h3 className="font-medium">需求预测</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    基于历史销售数据、季节性因素和市场趋势，准确预测商品需求，减少库存积压和缺货情况。
                  </p>
                </div>
                
                <div className="border p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Package className="h-5 w-5 text-primary mr-2" />
                    <h3 className="font-medium">库存优化</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    智能分析库存周转率，优化库存水平，提高资金利用效率，降低仓储成本。
                  </p>
                </div>
                
                <div className="border p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users className="h-5 w-5 text-primary mr-2" />
                    <h3 className="font-medium">个性化推荐</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    分析客户购买历史和行为，提供个性化产品推荐，提高客户转化率和客单价。
                  </p>
                </div>
                
                <div className="border p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <BarChart4 className="h-5 w-5 text-primary mr-2" />
                    <h3 className="font-medium">销售分析</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    多维度分析销售数据，发现销售趋势和模式，为业务决策提供数据支持。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>行业应用场景</CardTitle>
              <CardDescription>我们的解决方案适用于各类零售业态</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  <Store className="h-3 w-3 mr-1" />
                  实体零售
                </Badge>
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                  <LineChart className="h-3 w-3 mr-1" />
                  电子商务
                </Badge>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  <Truck className="h-3 w-3 mr-1" />
                  物流配送
                </Badge>
                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                  <CreditCard className="h-3 w-3 mr-1" />
                  支付系统
                </Badge>
              </div>
              
              <div className="mt-6 pt-4 border-t">
                <h4 className="font-medium mb-2">主要客户类型</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>大型连锁超市与百货商店</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>电子商务平台与线上零售商</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>专业零售店与精品店</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>便利店与快消品零售商</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>零售业成功案例</CardTitle>
            <CardDescription>
              我们的AI解决方案如何帮助零售企业取得成功
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-lg">零售智能 - 全渠道零售平台</h3>
                <Badge variant="outline" className="bg-green-50 text-green-700">案例研究</Badge>
              </div>
              <p className="text-muted-foreground mb-3">
                零售智能采用我们的AI解决方案后，销售额提升28%，库存周转率提高45%，客户满意度显著提升。
                AI驱动的需求预测系统将库存管理效率提高了35%，减少了15%的库存成本。
              </p>
              <Button variant="outline" size="sm" className="flex items-center" asChild>
                <Link to="/case-studies/retailai-05">
                  查看详情 <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 rounded-lg p-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-semibold mb-2">准备好提升您的零售业务了吗？</h2>
            <p className="text-muted-foreground mb-6">
              联系我们的零售行业专家，了解如何将AI技术应用到您的业务中，
              提高运营效率，优化库存管理，并提升客户体验。
            </p>
            <Button size="lg" asChild>
              <Link to="/ai-solutions/contact">
                获取零售解决方案咨询
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RetailSolution;
