import React, { createContext, useContext, useState, ReactNode } from "react";
import { ApplicationType } from "../types/aplication_types";

interface GeneralStateProps {
    applicationType : ApplicationType;
    setApplicationType : (type: ApplicationType) => void;
}

const GeneralState = createContext<GeneralStateProps | undefined>(undefined);

export const GeneralStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [applicationType, setApplicationType] = useState<ApplicationType>(ApplicationType.None);

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
}