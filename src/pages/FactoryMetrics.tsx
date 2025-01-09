import React, {useEffect} from "react";
import {
    CanvasContainerStats,
    FactoryMetricMainContentContainer,
} from "./styles/FactoryMetricStyles";
import Toolbar from "../components/GeneralMenuToolbar";
import DefaultLayout from "../components/DefaultLayout";
import SettingsColumn from "../components/SettingsColumn/SettingsColumn";
import StatsView from "../components/StatsView/StatsView";
import { useApplicationTypeContext } from "../context/ApplicationTypeContext";
import { useStatisticsContext} from "../context/StatisticsContext";
import { useDataHandlerContext } from "../context/DataHandlerContext";

const FactoryMetrics: React.FC = () => {
    const { applicationType } = useApplicationTypeContext();
    const {inspectionFilters, resetFilters} = useDataHandlerContext();
    const { statisticsData, getStatisticsData } = useStatisticsContext();

    useEffect(() => {
        getStatisticsData();
    }, [inspectionFilters]);

    useEffect(() => {
        resetFilters();
        getStatisticsData();
    }, [applicationType]);

    return (
        <DefaultLayout>
            <Toolbar />
            <FactoryMetricMainContentContainer>
                <SettingsColumn />
                <CanvasContainerStats>
                    <StatsView data={statisticsData}/>
                </CanvasContainerStats>
            </FactoryMetricMainContentContainer>
        </DefaultLayout>
    )
}

export default FactoryMetrics;