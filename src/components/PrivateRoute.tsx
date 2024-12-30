// src/components/PrivateRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { applicationRoutes } from '../context/ApplicationTypeContext';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = useAuth();

  return isAuthenticated ? children : <Navigate to={applicationRoutes.Login} />;
};

export default PrivateRoute;
