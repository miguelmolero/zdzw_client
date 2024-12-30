import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { availableRoutes, GeneralStateProvider } from './context/GeneralStateContext';
import { DataHandlerProvider } from './context/DataHandlerContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import EntryMenu from './pages/EntryMenu';
import InspectionVisualizator from './pages/InspectionVisualizator';
import FactoryMetrics from './pages/FactoryMetrics';
import WeldingProcessQuality from './pages/WeldingProcessQuality';
import InspectionAnalysis from './pages/InspectionAnalysis';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <GeneralStateProvider>
                    <DataHandlerProvider>
                        <Routes>
                            <Route path={availableRoutes.Login} element={<Login />} />
                            <Route path={availableRoutes.EntryMenu} element={<PrivateRoute><EntryMenu /></PrivateRoute>} />
                            <Route path={availableRoutes.InspectionVisualizator} element={<PrivateRoute><InspectionVisualizator/></PrivateRoute>} />
                            <Route path={availableRoutes.FactoryMetrics} element={<PrivateRoute><FactoryMetrics/></PrivateRoute>} />
                            <Route path={availableRoutes.WeldingProcessQuality} element={<PrivateRoute><WeldingProcessQuality/></PrivateRoute>} />
                            <Route path={availableRoutes.InspectionAnalysis} element={<PrivateRoute><InspectionAnalysis/></PrivateRoute>} />
                            <Route path="*" element={<Navigate to={availableRoutes.Login} />} />
                        </Routes>
                    </DataHandlerProvider>
                </GeneralStateProvider>
            </Router>
        </AuthProvider>
    );
};

export default App;