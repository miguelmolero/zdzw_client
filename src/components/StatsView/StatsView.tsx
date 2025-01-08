import React from "react";
import { useMediaQuery, Theme } from "@mui/material";
import { 
    StatsContainer,
} from "./styles/StatsViewStyles";
import StatsCard from "./StatsCard";
import { StatisticsData, StatsData, FactoryStatsData } from "../../types/statistics_types";
import {ApplicationType} from "../../types/application_types";
import { useApplicationTypeContext } from "../../context/ApplicationTypeContext";

interface StatsViewProps {
    data: StatisticsData;
}

const StatsView : React.FC<StatsViewProps> = ({data}) => {
    const { applicationType } = useApplicationTypeContext();

    return (
        <StatsContainer>
            {
                data.factory_stats.map((factory: FactoryStatsData) => (
                    <StatsCard key={factory.factory_data.id} data={factory.factory_data} n_columns={3}/>
                ))
            }
        </StatsContainer>
    )
};

export default StatsView;