
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

// Import the admin pages as regular user pages
import AdminUsers from "./pages/admin/Users";
import AdminTasks from "./pages/admin/Tasks";
import TaskDetail from "./pages/admin/TaskDetail";

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
            
            {/* Move admin routes to user facing routes */}
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
