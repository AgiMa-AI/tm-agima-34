
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Building, Stethoscope, Briefcase, Factory } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      id: "finance-1",
      title: "大型金融机构智能客服",
      description: "为某国有银行开发的智能客服系统，整合了业务知识库与多轮对话能力",
      industry: "金融",
      results: [
        "客户满意度提升35%",
        "人工转接率降低48%",
        "业务处理时间减少62%"
      ],
      icon: <Building className="h-8 w-8 text-primary" />,
      tags: ["智能客服", "金融场景", "知识图谱"]
    },
    {
      id: "healthcare-1",
      title: "医疗影像辅助诊断系统",
      description: "为三甲医院开发的AI辅助诊断系统，提高肺部CT图像的诊断准确率",
      industry: "医疗",
      results: [
        "诊断准确率提升至98.3%",
        "平均诊断时间缩短67%",
        "罕见病识别能力显著提升"
      ],
      icon: <Stethoscope className="h-8 w-8 text-primary" />,
      tags: ["医疗影像", "辅助诊断", "深度学习"]
    },
    {
      id: "legal-1",
      title: "法律文件智能审核系统",
      description: "为某律所开发的合同审核AI，能够快速识别合同风险点并提供修改建议",
      industry: "法律",
      results: [
        "合同审核时间缩短75%",
        "风险点识别准确率达91%",
        "律师工作效率提升3倍"
      ],
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      tags: ["合同审核", "风险评估", "法律NLP"]
    },
    {
      id: "manufacturing-1",
      title: "智能工业质检系统",
      description: "为制造业客户定制的视觉质检系统，可实时检测产品缺陷",
      industry: "制造业",
      results: [
        "质检准确率高达99.7%",
        "人工质检成本降低83%",
        "生产效率提高42%"
      ],
      icon: <Factory className="h-8 w-8 text-primary" />,
      tags: ["视觉质检", "实时监测", "缺陷识别"]
    }
  ];

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-6">成功案例展示</h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        {caseStudies.map((caseStudy) => (
          <Card key={caseStudy.id}>
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="mt-1">{caseStudy.icon}</div>
              <div>
                <CardTitle>{caseStudy.title}</CardTitle>
                <CardDescription>{caseStudy.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">关键成果:</h4>
                <ul className="space-y-1">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="text-sm flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {caseStudy.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-primary/10">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <Button variant="outline" size="sm" className="mt-2" asChild>
                <Link to={`/case-studies/${caseStudy.id}`}>
                  查看详情
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesSection;
