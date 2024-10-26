// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  token: string | null,
  role : string | null,
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

// Creamos el contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (token: string, role: string) => {
    setToken(token);
    setRole(role);
    setIsAuthenticated(true);
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  };

  const logout = () => {
    setToken(null);
    setRole(null);
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  };

  return (
    <AuthContext.Provider value={{ token, role, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
//export const useAuth = (): AuthContextType => {
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
