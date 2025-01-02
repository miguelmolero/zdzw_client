import React, {createContext, useContext, useState} from "react";
//import { ChartData, ChartType } from "chart.js";
import api from "../api/axiosConfig";
import {InspectionFilters, RecordDataRaw, RecordData, ResponseData, LimitedRecord} from "../types/inspection_types";
import {parseRecordData} from "../utils/parseRecordData";
import { apiRoutes } from "../api/apiRoutes";

interface DataHandlerContextProps {
    inspectionData: RecordData;
    getInspectionData: (navigation: string, filters: InspectionFilters) => void;
    filtersData: InspectionFilters;
    setFiltersData: (filters: InspectionFilters) => void;
    xAxis: string;
    yAxis: string;
    updateAxis: (axis: string, value: string) => void;
}

const DataHandlerContext = createContext<DataHandlerContextProps | undefined>(undefined);

export const DataHandlerProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [min_record, setMinRecord] = useState<LimitedRecord | undefined>();
    const [max_record, setMaxRecord] = useState<LimitedRecord | undefined>();
    const [current_record, setCurrentRecord] = useState<LimitedRecord | undefined>();
    const [xAxis, setXAxis] = useState<string>("sample");
    const [yAxis, setYAxis] = useState<string>("amplitude");

    const updateAxis = (axis: string, value: string) => {
        if (axis === "xAxis") {
            setXAxis(value);
        }else if (axis === "yAxis") {
            setYAxis(value);
        }
    };

    const [inspectionData, setInspectionData] = useState<RecordData>({
        meta_data: {
            record_id: 0,
            setup_id: 0,
            job_id: 0,
            name: "",
            timestamp: 0,
            disposition: 0,
        },
        strip_data: [],
    });
    const [filtersData, setFiltersData] = useState<InspectionFilters>({
        current_record_id: -1,
        requested_record_id: -1,
        start_date: -1,
        end_date: -1,
        disposition: -1,
        factory_id: -1,
        device_id: -1,
        apply_filters: false,
    });

    const getInspectionData = async (navigation: string, filters: InspectionFilters) => {
        try {
            if (navigation === "next" && current_record === max_record) return;
            if (navigation === "previous" && current_record === min_record) return;
                
            const response = await api.post<ResponseData>(
                `${apiRoutes.stripChart}${navigation}`,
                filters,
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
            filters.current_record_id = parsedData.meta_data.record_id;
            filters.factory_id = payload.localization_data.factory_id;
            filters.device_id = payload.localization_data.device_id;
        } catch (error) {
            console.error("Error al cargar los datos del registro:", error);
        }   
    }


    return (
        <DataHandlerContext.Provider 
            value={{
                inspectionData, 
                getInspectionData, 
                filtersData, 
                setFiltersData, 
                xAxis, 
                yAxis, 
                updateAxis
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