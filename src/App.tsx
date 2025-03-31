
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

function App() {
  return (
    <MobileProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Instances />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/login" element={<Login />} />
            
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
