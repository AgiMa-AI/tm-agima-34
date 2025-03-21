
import { createContext } from 'react';
import { AuthContextType } from '@/types/auth';

// Create the authentication context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
