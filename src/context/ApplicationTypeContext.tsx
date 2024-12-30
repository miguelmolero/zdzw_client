import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { ApplicationType } from "../types/aplication_types";
import { useLocation } from "react-router-dom";

export const applicationRoutes = {
    Login: "/login",
    EntryMenu: "/entry-menu",
    FactoryMetrics: "/factory-metrics",
    InspectionVisualizator: "/inspection-visualizator",
    InspectionAnalysis: "/inspection-analysis",
    WeldingProcessQuality: "/welding-process-quality",
};

const applicationNames = {
    [ApplicationType.None]: "EMAT Ultrasonic Inspection",
    [ApplicationType.FactoryMetrics]: "Factory Metrics",
    [ApplicationType.InspectionVisualizator]: "Inspection Visualizer",
    [ApplicationType.InspectionAnalysis]: "Inspection Analysis",
    [ApplicationType.WeldingProcessQuality]: "Welding Process Quality",
};

const applicationPath: Record<string, ApplicationType> = {
    [applicationRoutes.FactoryMetrics]: ApplicationType.FactoryMetrics,
    [applicationRoutes.InspectionVisualizator]: ApplicationType.InspectionVisualizator,
    [applicationRoutes.InspectionAnalysis]: ApplicationType.InspectionAnalysis,
    [applicationRoutes.WeldingProcessQuality]: ApplicationType.WeldingProcessQuality,
    [applicationRoutes.EntryMenu]: ApplicationType.None,
};

interface GeneralStateProps {
    applicationType: ApplicationType;
    setApplicationType: (type: ApplicationType) => void;
}

const GeneralState = createContext<GeneralStateProps | undefined>(undefined);

export const GeneralStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [applicationType, setApplicationType] = useState<ApplicationType>(ApplicationType.None);
    const pathName = useLocation().pathname;

    useEffect(() => {
        setApplicationType(applicationPath[pathName] || ApplicationType.None);
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

export const useApplicationTypeContext = (): GeneralStateProps => {
    const context = useContext(GeneralState);
    if (!context) {
        throw new Error("useGeneralState must be used within a GeneralStateProvider");
    }
    return context;
};

export const useApplicationName = (): string => {
    const { applicationType } = useApplicationTypeContext();
    return applicationNames[applicationType];
}
