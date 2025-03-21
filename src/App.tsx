
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MobileProvider } from '@/hooks/use-mobile';
import { Toaster } from '@/components/ui/sonner';
import Instances from '@/pages/Instances';
import Details from '@/pages/Details';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Terms from '@/pages/Terms';
import Privacy from '@/pages/Privacy';
import Charts from '@/pages/Charts';
import Wallet from '@/pages/Wallet';
import History from '@/pages/History';
import Settings from '@/pages/Settings';
import Billing from '@/pages/Billing';
import Earnings from '@/pages/Earnings';
import AICustomization from '@/pages/AICustomization';
import AIConsulting from '@/pages/AIConsulting';
import AISolutions from '@/pages/AISolutions';
import MobileLayoutReset from '@/components/layout/MobileLayoutReset';

function App() {
  return (
    <MobileProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Instances />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/earnings" element={<Earnings />} />
          
          {/* AI Services Routes */}
          <Route path="/ai/customization" element={<AICustomization />} />
          <Route path="/ai/consulting" element={<AIConsulting />} />
          <Route path="/ai/solutions" element={<AISolutions />} />
          
          {/* Error Routes */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster position="top-right" />
        <MobileLayoutReset />
      </Router>
    </MobileProvider>
  );
}

export default App;
