import React from "react";
import { Typography } from "@mui/material";
import { 
    StatsContainer,
    StatsColumnContainer
} from "./styles/StatsViewStyles";
import StatsCard from "./StatsCard";
import { StatisticsData, StatsData, FactoryStatsData } from "../../types/statistics_types";
import {ApplicationType} from "../../types/application_types";
import { useApplicationTypeContext } from "../../context/ApplicationTypeContext";
import {useDataHandlerContext} from "../../context/DataHandlerContext";
interface StatsViewProps {
    data: StatisticsData;
}

const StatsView : React.FC<StatsViewProps> = ({data}) => {
    const { applicationType } = useApplicationTypeContext();
    const { selectedFactory } = useDataHandlerContext();
    const isWPQApp = applicationType === ApplicationType.WeldingProcessQuality;

    if (isWPQApp) {
        let factory_number = 0;
        if (selectedFactory == -1) {
            factory_number = data?.factory_stats[0]?.factory_data?.id;
        }else{
            factory_number = selectedFactory;
        }

        return (
            <StatsColumnContainer>
                <Typography sx={{textDecoration: "underline"}} align="center" variant="h5" component="h5" >
                        Factory ID - {factory_number}
                </Typography>
                <StatsContainer>
                    {
                        data?.factory_stats[factory_number-1]?.device_stats?.map((stats: StatsData) => (
                            <StatsCard key={stats.id} data={stats}/>
                        ))
                    }
                </StatsContainer>
            </StatsColumnContainer>
        )
    }

    return (
        <StatsContainer>
            {
                data?.factory_stats?.map((factory: FactoryStatsData) => (
                    <StatsCard key={factory.factory_data.id} data={factory.factory_data}/>
                ))
            }
        </StatsContainer>
    )
};

export default StatsView;