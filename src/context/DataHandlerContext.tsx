import React, {createContext, useContext, useEffect, useState} from "react";
import api from "../api/axiosConfig";
import {
    InspectionFilters, 
    RecordDataRaw, 
    RecordData, 
    ResponseData, 
    LimitedRecord, 
    OrderType, 
    OrderDirection,
    XAxisUnits,
    FeatureType,
    RequestedPayload
} from "../types/inspection_types";
import { parseRecordData, areRecordsEqual } from "../utils/recordParser";
import { apiRoutes } from "../api/apiRoutes";
import { useApplicationTypeContext } from "./ApplicationTypeContext";
import { ApplicationType } from "../types/application_types";

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

interface DataHandlerContextProps {
    inspectionData: RecordData;
    getInspectionData: (navigation: string) => void;
    current_record: LimitedRecord | undefined;
    setCurrentRecord: (record: LimitedRecord) => void;
    inspectionFilters: InspectionFilters;
    setInspectionFilters: (filters: InspectionFilters) => void;
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
    const { applicationType } = useApplicationTypeContext();
    const [min_record, setMinRecord] = useState<LimitedRecord | undefined>();
    const [max_record, setMaxRecord] = useState<LimitedRecord | undefined>();
    const [xAxis, setXAxis] = useState<XAxisUnits>(XAxisUnits.Sample);
    const [yAxis, setYAxis] = useState<FeatureType>(FeatureType.Amplitude);
    const [orderType, setOrderType] = useState<OrderType>(OrderType.Date);
    const [orderDirection, setOrderDirection] = useState<OrderDirection>(OrderDirection.Asc);

    const [inspectionData, setInspectionData] = useState<RecordData>({
        meta_data: {
            record_id: 0,
            setup_id: 0,
            job_id: 0,
            name: "",
            timestamp: 0,
            disposition: 0,
            factory_id: 0,
            device_id: 0,
        },
        strip_data: [],
    });

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

    const [current_record, setCurrentRecord] = useState<LimitedRecord>({
        factory_id: 0,
        device_id: 0,
        record_id: 0,
    });


    const getInspectionData = async (navigation: string) => {
        const nav_filters: InspectionFilters = inspectionFilters;
        const loaded_record : LimitedRecord = current_record;
        nav_filters.is_analysis = applicationType === ApplicationType.InspectionAnalysis;
        try {
            if (current_record && max_record && min_record) {
                if (navigation === "next" && areRecordsEqual(current_record, max_record)) return;
                if (navigation === "previous" && areRecordsEqual(current_record, min_record)) return;
            }
            const requested_payload : RequestedPayload = {
                nav_filters,
                loaded_record
            };
            const response = await api.post<ResponseData>(
                `${apiRoutes.stripChart}${navigation}`,
                requested_payload,
                {}
            );
            const jsonData : ResponseData = response.data;
            if (navigation === "first" || navigation === "last") {
                setMinRecord(jsonData.min_record);
                setMaxRecord(jsonData.max_record);
            }
            const payload: RecordDataRaw = jsonData.data;
            const parsedData = parseRecordData(payload);
            setInspectionData(parsedData);
            setCurrentRecord({
                record_id: parsedData.meta_data.record_id,
                factory_id: payload.localization_data.factory_id,
                device_id: payload.localization_data.device_id,
            });
        } catch (error) {
            console.error("Error al cargar los datos del registro:", error);
        }
    }

    useEffect(() => {
        if (!current_record) return;
        getInspectionData("last");
    }, [inspectionFilters]);

    useEffect(() => {
        if (![ApplicationType.InspectionVisualizer, ApplicationType.InspectionAnalysis].includes(applicationType)) return;
        getInspectionData("last");
    }, [applicationType]);

    return (
        <DataHandlerContext.Provider 
            value={{
                inspectionData, 
                getInspectionData,
                current_record,
                setCurrentRecord, 
                inspectionFilters,
                setInspectionFilters, 
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