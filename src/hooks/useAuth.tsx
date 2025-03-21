
import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';

// Export a direct implementation of useAuth hook instead of re-exporting
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// For backward compatibility
export { AuthProvider } from '@/providers/AuthProvider';
export const withAuth = (Component: React.ComponentType) => {
  return function WithAuth(props: any) {
    return (
      <AuthProvider>
        <Component {...props} />
      </AuthProvider>
    );
  };
};
