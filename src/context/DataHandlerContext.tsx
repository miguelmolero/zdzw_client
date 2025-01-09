import React, {createContext, useContext, useState} from "react";
import {
    OrderType, 
    OrderDirection,
    XAxisUnits,
    FeatureType,
    DispositionType,
    InspectionFilters
} from "../types/inspection_types";
//import { useApplicationTypeContext } from "./ApplicationTypeContext";
//import { ApplicationType } from "../types/application_types";

export const XAxisUnitsLabels: Record<XAxisUnits, string> = {
    [XAxisUnits.Sample]: "Sample",
    [XAxisUnits.Distance]: "Distance",
};

export const FeatureTypeLabels: Record<FeatureType, string> = {
    [FeatureType.Amplitude]: "Amplitude",
    [FeatureType.TOF]: "TOF",
};

export const OrderLabels: Record<OrderType, string> = {
    [OrderType.Date]: "Order by Date",
    [OrderType.Pass]: "Order by Pass Count",
    [OrderType.Fail]: "Order by Fail Count",
    [OrderType.Invalid]: "Order by Invalid Count",
};

export const OrderDirectionLabels: Record<OrderDirection, string> = {
    [OrderDirection.Asc]: "Ascending",
    [OrderDirection.Desc]: "Descending",
};

export const DispositionTypeName: Record<DispositionType, string> = {
    [DispositionType.Pass]: "Pass",
    [DispositionType.Fail]: "Fail",
    [DispositionType.Invalid]: "Invalid",
};

interface DataHandlerContextProps {
    inspectionFilters: InspectionFilters;
    setInspectionFilters: (filters: InspectionFilters) => void;
    resetFilters: () => void;
    selectedFactory: number;
    setSelectedFactory: (value: number) => void;
    xAxis: XAxisUnits;
    yAxis: FeatureType;
    setXAxis: (value: XAxisUnits) => void;
    setYAxis: (value: FeatureType) => void;
    orderType: OrderType;
    orderDirection: OrderDirection;
    setOrderType: (value: OrderType) => void;
    setOrderDirection: (value: OrderDirection) => void;
}

const DataHandlerContext = createContext<DataHandlerContextProps | undefined>(undefined);

export const DataHandlerProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    // const { applicationType } = useApplicationTypeContext();
    const [xAxis, setXAxis] = useState<XAxisUnits>(XAxisUnits.Sample);
    const [yAxis, setYAxis] = useState<FeatureType>(FeatureType.Amplitude);
    const [orderType, setOrderType] = useState<OrderType>(OrderType.Date);
    const [orderDirection, setOrderDirection] = useState<OrderDirection>(OrderDirection.Asc);
    const [selectedFactory, setSelectedFactory] = useState<number>(-1);
    const [inspectionFilters, setInspectionFilters] = useState<InspectionFilters>({
        requested_record_id: -1,
        start_date: -1,
        end_date: -1,
        disposition: -1,
        factory_id: -1,
        device_id: -1,
        job_id: -1,
        is_analysis: false,
    });

    const resetFilters = () => {
        setInspectionFilters({
            requested_record_id: -1,
            start_date: -1,
            end_date: -1,
            disposition: -1,
            factory_id: -1,
            device_id: -1,
            job_id: -1,
            is_analysis: false,
        });
    }

    return (
        <DataHandlerContext.Provider 
            value={{
                inspectionFilters,
                setInspectionFilters,
                resetFilters,
                selectedFactory,
                setSelectedFactory,
                xAxis, 
                yAxis, 
                setXAxis,
                setYAxis,
                orderType,
                orderDirection,
                setOrderType,
                setOrderDirection,
            }}
        >
            {children}
        </DataHandlerContext.Provider>
    );
}

export const useDataHandlerContext = () => {
    const context = useContext(DataHandlerContext);
    if (!context) {
        throw new Error("useDataHandlerContext debe ser usado dentro de un DataHandlerContext");
    }
    return context;
}