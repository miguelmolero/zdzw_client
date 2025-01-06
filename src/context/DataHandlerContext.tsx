import React, {createContext, useContext, useState} from "react";
import {
    OrderType, 
    OrderDirection,
    XAxisUnits,
    FeatureType,
    DispositionType,
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

    return (
        <DataHandlerContext.Provider 
            value={{
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