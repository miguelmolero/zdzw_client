import React, {createContext, useContext, useState, useEffect} from "react";
import api from "../api/axiosConfig";
import {
    StatisticsDataRaw,
    StatisticsData,
    StatsData
} from "../types/statistics_types";
import { InspectionFilters, LimitedRecord, RequestedPayload } from "../types/inspection_types";
import { apiRoutes } from "../api/apiRoutes";
import { useApplicationTypeContext } from "./ApplicationTypeContext";
import { ApplicationType } from "../types/application_types";
interface StatisticsContextProps {
    statisticsData: StatisticsData;
    getStatisticsData: () => void;
}

const StatisticsContext = createContext<StatisticsContextProps | undefined>(undefined);

export const StatisticsProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const { applicationType } = useApplicationTypeContext();
    const [statisticsData, setStatisticsData] = useState<StatisticsData>({
        factory_stats: []
    });
    const [statisticFilters, setStatisticFilters] = useState<InspectionFilters>({
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
    const getStatisticsData = async () => {
        const nav_filters : InspectionFilters = statisticFilters;
        const loaded_record : LimitedRecord = current_record;
        const payload_data : RequestedPayload = {
            nav_filters,
            loaded_record
        };
        const response = await api.post<StatisticsDataRaw>(
            `${apiRoutes.statistics}`,
            payload_data
        )
        console.log("STATISTICS DATA", response)
    };

    useEffect(() => {
        if (![ApplicationType.FactoryMetrics, ApplicationType.WeldingProcessQuality].includes(applicationType)) return;
        getStatisticsData();
    }, [applicationType]);

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