
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Index from "./pages/Index";
import Instances from "./pages/Instances";
import Details from "./pages/Details";
import History from "./pages/History";
import Billing from "./pages/Billing";
import Storage from "./pages/Storage";
import Settings from "./pages/Settings";
import MobileApp from "./pages/MobileApp";
import Charts from "./pages/Charts";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import { AuthProvider } from "./providers/AuthProvider";
import AGIModels from "./pages/AGIModels";
import AGIDetailView from "./pages/AGIDetailView";
import AGIHosting from "./pages/AGIHosting";
import AGIRental from "./pages/AGIRental";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

import AGILeasing from "./pages/AGILeasing";
import ServiceDistribution from "./pages/ServiceDistribution";
import CaseStudy from "./pages/CaseStudy";
import MobileComputing from "./pages/MobileComputing";
import Earnings from "./pages/Earnings";
import Invitation from "./pages/Invitation";
import Wallet from "./pages/Wallet";

// Import the AI service pages
import AICustomization from "./pages/AICustomization";
import AICommercial from "./pages/AICommercial";
import AISolutions from "./pages/AISolutions";
import AIPerformance from "./pages/AIPerformance";
import AIConsulting from "./pages/AIConsulting";

// Import the AI customization secondary pages
import EnterpriseAI from "./pages/ai-customization/EnterpriseAI";
import IndustryAI from "./pages/ai-customization/IndustryAI";
import ContactConsultation from "./pages/ai-customization/ContactConsultation";

// Import the admin pages as regular user pages
import AdminUsers from "./pages/admin/Users";
import AdminTasks from "./pages/admin/Tasks";
import TaskDetail from "./pages/admin/TaskDetail";

// AI Commercial secondary pages
import CommercialEnterprise from "./pages/ai-commercial/EnterpriseAI";
import CommercialContact from "./pages/ai-commercial/ContactPage";

// AI Solutions secondary pages
import SolutionsFinance from "./pages/ai-solutions/FinanceSolution";
import SolutionsMedical from "./pages/ai-solutions/MedicalSolution";
import SolutionsManufacturing from "./pages/ai-solutions/ManufacturingSolution";
import SolutionsContact from "./pages/ai-solutions/ContactPage";

// AI Performance secondary pages
import PerformanceBenchmarks from "./pages/ai-performance/Benchmarks";
import PerformanceSecurity from "./pages/ai-performance/Security";
import PerformanceContact from "./pages/ai-performance/ContactPage";

// AI Consulting secondary pages
import ConsultingStrategy from "./pages/ai-consulting/Strategy";
import ConsultingImplementation from "./pages/ai-consulting/Implementation";
import ConsultingTraining from "./pages/ai-consulting/Training";
import ConsultingContact from "./pages/ai-consulting/ContactPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000, // 1 minute
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Index />} />
            <Route path="/instances" element={<Instances />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/history" element={<History />} />
            <Route path="/storage" element={<Storage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/mobile-app" element={<MobileApp />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/wallet" element={<Wallet />} />
            
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            
            <Route path="/agi-models" element={<AGIModels />} />
            <Route path="/agi/:id" element={<AGIDetailView />} />
            <Route path="/agi-hosting" element={<AGIHosting />} />
            <Route path="/agi-rental/:id" element={<AGIRental />} />
            
            <Route path="/agi-leasing" element={<AGILeasing />} />
            <Route path="/service-distribution" element={<ServiceDistribution />} />
            <Route path="/case-studies/:id" element={<CaseStudy />} />
            <Route path="/mobile-computing" element={<MobileComputing />} />
            <Route path="/earnings" element={<Earnings />} />
            <Route path="/invitation" element={<Invitation />} />
            
            {/* AI service routes */}
            <Route path="/ai-customization" element={<AICustomization />} />
            <Route path="/ai-commercial" element={<AICommercial />} />
            <Route path="/ai-solutions" element={<AISolutions />} />
            <Route path="/ai-performance" element={<AIPerformance />} />
            <Route path="/ai-consulting" element={<AIConsulting />} />
            
            {/* AI Customization secondary pages */}
            <Route path="/ai-customization/enterprise" element={<EnterpriseAI />} />
            <Route path="/ai-customization/industry" element={<IndustryAI />} />
            <Route path="/ai-customization/contact" element={<ContactConsultation />} />
            
            {/* AI Commercial secondary pages */}
            <Route path="/ai-commercial/enterprise" element={<CommercialEnterprise />} />
            <Route path="/ai-commercial/contact" element={<CommercialContact />} />
            
            {/* AI Solutions secondary pages */}
            <Route path="/ai-solutions/finance" element={<SolutionsFinance />} />
            <Route path="/ai-solutions/medical" element={<SolutionsMedical />} />
            <Route path="/ai-solutions/manufacturing" element={<SolutionsManufacturing />} />
            <Route path="/ai-solutions/contact" element={<SolutionsContact />} />
            
            {/* AI Performance secondary pages */}
            <Route path="/ai-performance/benchmarks" element={<PerformanceBenchmarks />} />
            <Route path="/ai-performance/security" element={<PerformanceSecurity />} />
            <Route path="/ai-performance/contact" element={<PerformanceContact />} />
            
            {/* AI Consulting secondary pages */}
            <Route path="/ai-consulting/strategy" element={<ConsultingStrategy />} />
            <Route path="/ai-consulting/implementation" element={<ConsultingImplementation />} />
            <Route path="/ai-consulting/training" element={<ConsultingTraining />} />
            <Route path="/ai-consulting/contact" element={<ConsultingContact />} />
            
            {/* Admin routes as user facing routes */}
            <Route path="/users" element={<AdminUsers />} />
            <Route path="/tasks" element={<AdminTasks />}>
              <Route path=":id" element={<TaskDetail />} />
            </Route>
            
            {/* Redirect old admin routes to new user routes */}
            <Route path="/admin/users" element={<Navigate to="/users" replace />} />
            <Route path="/admin/tasks" element={<Navigate to="/tasks" replace />} />
            <Route path="/admin/tasks/:id" element={<Navigate to="/tasks/:id" replace />} />
            <Route path="/admin/*" element={<Navigate to="/" replace />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
