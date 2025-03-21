import React, { createContext, useContext, useState } from 'react';
import api from '../api/axiosConfig';
import {
    InspectionFilters,
    RecordDataRaw,
    RecordData,
    ResponseData,
    LimitedRecord,
    RequestedPayload
} from '../types/inspection_types';
import { parseRecordData, areRecordsEqual } from "../utils/recordParser";
import { apiRoutes } from "../api/apiRoutes";
import { useApplicationTypeContext } from "./ApplicationTypeContext";
import { ApplicationType } from "../types/application_types";
import { useDataHandlerContext } from './DataHandlerContext';

interface StripChartContextProps {
    inspectionData: RecordData;
    getInspectionData: (navigation: string) => void;
    current_record: LimitedRecord | undefined;
    setCurrentRecord: (record: LimitedRecord) => void;
}

const StripChartContext = createContext<StripChartContextProps | undefined>(undefined);

export const StripChartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { applicationType } = useApplicationTypeContext();
    const [min_record, setMinRecord] = useState<LimitedRecord | undefined>();
    const [max_record, setMaxRecord] = useState<LimitedRecord | undefined>();
    const {inspectionFilters} = useDataHandlerContext();
    const [current_record, setCurrentRecord] = useState<LimitedRecord>({
        factory_id: 0,
        device_id: 0,
        record_id: 0,
    });

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
            // console.log("RESPONSE DATA",jsonData);
            if (navigation === "first" || navigation === "last") {
                setMinRecord(jsonData.min_record);
                setMaxRecord(jsonData.max_record);
            }
            const payload: RecordDataRaw = jsonData.data;
            // console.log("PAYLOAD",payload);
            const parsedData = parseRecordData(payload);
            // console.log("PARSED DATA",parsedData);
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

    return (
        <StripChartContext.Provider
            value={{
                inspectionData,
                getInspectionData,
                current_record,
                setCurrentRecord,
            }}
        >
            {children}
        </StripChartContext.Provider>
    );
}

export const useStripChartContext = () => {
    const context = useContext(StripChartContext);
    if (!context) {
        throw new Error('useStripChartContext must be used within a StripChartProvider');
    }
    return context;
}
