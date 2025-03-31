
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MobileProvider } from '@/hooks/use-mobile';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/providers/AuthProvider';
import Instances from '@/pages/Instances';
import Details from '@/pages/Details';
import Terms from '@/pages/Terms';
import Privacy from '@/pages/Privacy';
import NotFound from '@/pages/NotFound';
import Wallet from '@/pages/Wallet';
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import Earnings from '@/pages/Earnings';
import Billing from '@/pages/Billing';
import Charts from '@/pages/Charts';
import AICustomization from '@/pages/AICustomization';
import AICommercial from '@/pages/AICommercial';
import AIConsulting from '@/pages/AIConsulting';
import AISolutions from '@/pages/AISolutions';
import AIPerformance from '@/pages/AIPerformance';
import AGIModels from '@/pages/AGIModels';
import AGIHosting from '@/pages/AGIHosting';
import AGILeasing from '@/pages/AGILeasing';
import MobileComputing from '@/pages/MobileComputing';
import ServiceDistribution from '@/pages/ServiceDistribution';

// Consulting pages
import ConsultingStrategy from '@/pages/ai-consulting/Strategy';
import ConsultingImplementation from '@/pages/ai-consulting/Implementation';
import ConsultingTraining from '@/pages/ai-consulting/Training';
import ConsultingContact from '@/pages/ai-consulting/ContactPage';

// Solutions pages
import FinanceSolution from '@/pages/ai-solutions/FinanceSolution';
import MedicalSolution from '@/pages/ai-solutions/MedicalSolution';
import ManufacturingSolution from '@/pages/ai-solutions/ManufacturingSolution';
import SolutionsContact from '@/pages/ai-solutions/ContactPage';

// Performance pages
import PerformanceBenchmarks from '@/pages/ai-performance/Benchmarks';
import PerformanceSecurity from '@/pages/ai-performance/Security';
import PerformanceContact from '@/pages/ai-performance/ContactPage';

// Commercial pages
import CommercialEnterpriseAI from '@/pages/ai-commercial/EnterpriseAI';
import CommercialContact from '@/pages/ai-commercial/ContactPage';

// AI Customization pages
import EnterpriseAI from '@/pages/ai-customization/EnterpriseAI';
import ContactConsultation from '@/pages/ai-customization/ContactConsultation';

function App() {
  return (
    <MobileProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Instances />} />
            <Route path="/instances" element={<Instances />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/wallet" element={<Wallet />} />
            
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Dashboard Routes */}
            <Route path="/charts" element={<Charts />} />
            <Route path="/earnings" element={<Earnings />} />
            <Route path="/billing" element={<Billing />} />
            
            {/* AI Services Routes */}
            <Route path="/agi-models" element={<AGIModels />} />
            <Route path="/agi-hosting" element={<AGIHosting />} />
            <Route path="/agi-leasing" element={<AGILeasing />} />
            <Route path="/service-distribution" element={<ServiceDistribution />} />
            <Route path="/mobile-computing" element={<MobileComputing />} />
            
            {/* AI Customization Routes */}
            <Route path="/ai-customization" element={<AICustomization />} />
            <Route path="/ai-customization/enterprise-ai" element={<EnterpriseAI />} />
            <Route path="/ai-customization/contact" element={<ContactConsultation />} />
            
            {/* AI Commercial Routes */}
            <Route path="/ai-commercial" element={<AICommercial />} />
            <Route path="/ai-commercial/enterprise-ai" element={<CommercialEnterpriseAI />} />
            <Route path="/ai-commercial/contact" element={<CommercialContact />} />
            
            {/* AI Consulting Routes */}
            <Route path="/ai-consulting" element={<AIConsulting />} />
            <Route path="/ai-consulting/strategy" element={<ConsultingStrategy />} />
            <Route path="/ai-consulting/implementation" element={<ConsultingImplementation />} />
            <Route path="/ai-consulting/training" element={<ConsultingTraining />} />
            <Route path="/ai-consulting/contact" element={<ConsultingContact />} />
            
            {/* AI Solutions Routes */}
            <Route path="/ai-solutions" element={<AISolutions />} />
            <Route path="/ai-solutions/finance" element={<FinanceSolution />} />
            <Route path="/ai-solutions/medical" element={<MedicalSolution />} />
            <Route path="/ai-solutions/manufacturing" element={<ManufacturingSolution />} />
            <Route path="/ai-solutions/contact" element={<SolutionsContact />} />
            
            {/* AI Performance Routes */}
            <Route path="/ai-performance" element={<AIPerformance />} />
            <Route path="/ai-performance/benchmarks" element={<PerformanceBenchmarks />} />
            <Route path="/ai-performance/security" element={<PerformanceSecurity />} />
            <Route path="/ai-performance/contact" element={<PerformanceContact />} />
            
            {/* Error Routes */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster position="top-right" />
        </AuthProvider>
      </Router>
    </MobileProvider>
  );
}

export default App;
