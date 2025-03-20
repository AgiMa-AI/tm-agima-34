import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MobileProvider } from '@/hooks/use-mobile';
import { Toaster } from '@/components/ui/sonner';
import Instances from '@/pages/Instances';
import Details from '@/pages/Details';
import Leasing from '@/pages/Leasing';
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import ResetPassword from '@/pages/auth/ResetPassword';
import Terms from '@/pages/Terms';
import Privacy from '@/pages/Privacy';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AdminUsers from '@/pages/admin/AdminUsers';
import AdminInstances from '@/pages/admin/AdminInstances';
import AdminSettings from '@/pages/admin/AdminSettings';
import Profile from '@/pages/Profile';
import NotFound from '@/pages/NotFound';
import Unauthorized from '@/pages/Unauthorized';
import ServerError from '@/pages/ServerError';

function App() {
  return (
    <MobileProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Instances />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/leasing" element={<Leasing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/profile" element={<Profile />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/instances" element={<AdminInstances />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          
          {/* Error Routes */}
          <Route path="/404" element={<NotFound />} />
          <Route path="/401" element={<Unauthorized />} />
          <Route path="/500" element={<ServerError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster position="top-right" />
      </Router>
    </MobileProvider>
  );
}

export default App;
