import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { ApplicationType } from "../types/aplication_types";
import { useLocation } from "react-router-dom";

export const applicationRoutes = {
    Login: "/login",
    EntryMenu: "/entry-menu",
    FactoryMetrics: "/factory-metrics",
    InspectionVisualizer: "/inspection-visualizator",
    InspectionAnalysis: "/inspection-analysis",
    WeldingProcessQuality: "/welding-process-quality",
};

const applicationNames = {
    [ApplicationType.None]: "EMAT Ultrasonic Inspection",
    [ApplicationType.FactoryMetrics]: "Factory Metrics",
    [ApplicationType.InspectionVisualizer]: "Inspection Visualizer",
    [ApplicationType.InspectionAnalysis]: "Inspection Analysis",
    [ApplicationType.WeldingProcessQuality]: "Welding Process Quality",
};

const applicationPath: Record<string, ApplicationType> = {
    [applicationRoutes.FactoryMetrics]: ApplicationType.FactoryMetrics,
    [applicationRoutes.InspectionVisualizer]: ApplicationType.InspectionVisualizer,
    [applicationRoutes.InspectionAnalysis]: ApplicationType.InspectionAnalysis,
    [applicationRoutes.WeldingProcessQuality]: ApplicationType.WeldingProcessQuality,
    [applicationRoutes.EntryMenu]: ApplicationType.None,
};

interface ApplicationTypeProps {
    applicationType: ApplicationType;
    setApplicationType: (type: ApplicationType) => void;
    isInspectionView: boolean;
}

const ApplicationTypeState = createContext<ApplicationTypeProps | undefined>(undefined);

export const ApplicationTypeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [applicationType, setApplicationType] = useState<ApplicationType>(ApplicationType.None);
    const [isInspectionView, setIsInspectionView] = useState<boolean>(false);
    const pathName = useLocation().pathname;

    useEffect(() => {
        setApplicationType(applicationPath[pathName] || ApplicationType.None);
        setIsInspectionView([applicationRoutes.InspectionVisualizer, applicationRoutes.InspectionAnalysis].includes(pathName));
    }, [pathName]);

    return (
        <ApplicationTypeState.Provider
            value={{
                applicationType,
                setApplicationType,
                isInspectionView,
            }}
        >
            {children}
        </ApplicationTypeState.Provider>
    );
};

export const useApplicationTypeContext = (): ApplicationTypeProps => {
    const context = useContext(ApplicationTypeState);
    if (!context) {
        throw new Error("useApplicationTypeContext must be used within a ApplicationTypeProvider");
    }
    return context;
};

export const useApplicationName = (): string => {
    const { applicationType } = useApplicationTypeContext();
    return applicationNames[applicationType];
}
