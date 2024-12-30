import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { ApplicationType } from "../types/aplication_types";
import { useLocation } from "react-router-dom";

interface GeneralStateProps {
    applicationType: ApplicationType;
    setApplicationType: (type: ApplicationType) => void;
}

const GeneralState = createContext<GeneralStateProps | undefined>(undefined);

export const GeneralStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [applicationType, setApplicationType] = useState<ApplicationType>(ApplicationType.None);
    const pathName = useLocation().pathname;

    useEffect(() => {   
        switch (pathName) {
            case "/factory-metrics":
                setApplicationType(ApplicationType.FactoryMetrics);
                break;
            case "/inspection-visualizator":
                setApplicationType(ApplicationType.InspectionVisualizator);
                break;
            case "/inspection-analysis":
                setApplicationType(ApplicationType.InspectionAnalysis);
                break;
            case "/welding-process-quality":
                setApplicationType(ApplicationType.WeldingProcessQuality);
                break;
            default:
                setApplicationType(ApplicationType.None);
                break;
        }
    }, [pathName]);

    return (
        <GeneralState.Provider
            value={{
                applicationType,
                setApplicationType,
            }}
        >
            {children}
        </GeneralState.Provider>
    );
};

export const useGeneralStateContext = (): GeneralStateProps => {
    const context = useContext(GeneralState);
    if (!context) {
        throw new Error("useGeneralState must be used within a GeneralStateProvider");
    }
    return context;
};
