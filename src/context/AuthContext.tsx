import React, {createContext, useState, ReactNode, useContext} from 'react';

interface AuthContextType{
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Proveedor del contexto
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);
  
    return (
      <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    }
    return context;
};