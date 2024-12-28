import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { GeneralStateProvider } from './context/GeneralStateContext';
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
      <GeneralStateProvider>
        <DataHandlerProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/entry-menu" element={<PrivateRoute><EntryMenu /></PrivateRoute>} />
              <Route path="/inspection-visualizator" element={<PrivateRoute><InspectionVisualizator/></PrivateRoute>} />
              <Route path="/factory-metrics" element={<PrivateRoute><FactoryMetrics/></PrivateRoute>} />
              <Route path="/welding-process-quality" element={<PrivateRoute><WeldingProcessQuality/></PrivateRoute>} />
              <Route path='/inspection-analysis' element={<PrivateRoute><InspectionAnalysis/></PrivateRoute>} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </Router>
        </DataHandlerProvider>
      </GeneralStateProvider>
    </AuthProvider>
  );
};

export default App;