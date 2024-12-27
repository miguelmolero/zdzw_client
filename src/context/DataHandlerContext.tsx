import React, {createContext, useContext, useState} from "react";
//import { ChartData, ChartType } from "chart.js";
import api from "../api/axiosConfig";
import {InspectionFilters, RecordDataRaw, RecordData, ResponseData} from "../types/types";
import {parseRecordData} from "../utils/parseRecordData";

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
    const [min_record_id, setMinRecordId] = useState<number | undefined>(0);
    const [max_record_id, setMaxRecordId] = useState<number | undefined>(0);
    const [current_record_id, setCurrentRecordId] = useState<number | undefined>(0);
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
    });

    const getInspectionData = async (navigation: string, filters: InspectionFilters) => {
        try {
            if (navigation === "next" && current_record_id === max_record_id) return;
            if (navigation === "previous" && current_record_id === min_record_id) return;
                
            const response = await api.post<ResponseData>(
                `/api/stripchart/${navigation}`,
                filters,
                {}
            );
            const jsonData : ResponseData = response.data;
            if (navigation === "first" || navigation === "last") {
                setMinRecordId(jsonData.min_record_id);
                setMaxRecordId(jsonData.max_record_id);
            }
            const payload: RecordDataRaw = jsonData.data;
            const parsedData = parseRecordData(payload);
            setInspectionData(parsedData);
            setCurrentRecordId(parsedData.meta_data.record_id);
            filters.current_record_id = parsedData.meta_data.record_id;
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