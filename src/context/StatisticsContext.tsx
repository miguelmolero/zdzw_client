import React, {createContext, useContext, useState} from "react";
import api from "../api/axiosConfig";
import {
    StatisticsDataRaw,
    StatisticsData
} from "../types/statistics_types";
import { 
    InspectionFilters, 
    LimitedRecord, 
    RequestedPayload,
    OrderFilters
} from "../types/inspection_types";
import { apiRoutes } from "../api/apiRoutes";
import { useDataHandlerContext } from "./DataHandlerContext"; 
import { parseStatisticsData } from "../utils/statisticsParser";
interface StatisticsContextProps {
    statisticsData: StatisticsData;
    getStatisticsData: () => void;
}

const StatisticsContext = createContext<StatisticsContextProps | undefined>(undefined);

export const StatisticsProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const {inspectionFilters, orderFilters} = useDataHandlerContext();
    const [statisticsData, setStatisticsData] = useState<StatisticsData>({
        factory_stats: []
    });
    const [current_record, setCurrentRecord] = useState<LimitedRecord>({
        factory_id: 0,
        device_id: 0,
        record_id: 0,
    });
    const getStatisticsData = async () => {
        const nav_filters : InspectionFilters = inspectionFilters;
        const loaded_record : LimitedRecord = current_record;
        const order_filters : OrderFilters = orderFilters;
        const payload_data : RequestedPayload = {
            nav_filters,
            order_filters,
            loaded_record
        };
        const response = await api.post<StatisticsDataRaw>(
            `${apiRoutes.statistics}`,
            payload_data
        )
        setStatisticsData(parseStatisticsData(response.data));
    };

    return (
        <StatisticsContext.Provider 
            value={{
                statisticsData,
                getStatisticsData
            }}
        >
            {children}
        </StatisticsContext.Provider>
    );
}

export const useStatisticsContext = () => {
    const context = useContext(StatisticsContext);
    if (!context) {
        throw new Error('useStatisticsContext must be used within a StatisticsProvider')
    }
    return context;
}