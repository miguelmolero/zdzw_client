import React, {useEffect} from "react";
import {
    WPQMainContentContainer,
    CanvasContainerStats
} from "./styles/WeldingProcessQualityStyles" // Importar los estilos
import Toolbar from "../components/GeneralMenuToolbar"; // Importar la Toolbar reutilizable
import DefaultLayout from "../components/DefaultLayout";
import SettingsColumn from "../components/SettingsColumn/SettingsColumn";
import StatsView from "../components/StatsView/StatsView";
import { useApplicationTypeContext } from "../context/ApplicationTypeContext";
import { useStatisticsContext} from "../context/StatisticsContext";
import { useDataHandlerContext } from "../context/DataHandlerContext";

const WeldingProcessQuality: React.FC = () => {
    const { applicationType } = useApplicationTypeContext();
    const {selectedFactory, inspectionFilters, setInspectionFilters} = useDataHandlerContext();
    const { statisticsData, getStatisticsData } = useStatisticsContext();

    useEffect(() => {
        if (statisticsData.factory_stats.length != 0) return;
        getStatisticsData();
    }, [inspectionFilters]);

    useEffect(() => {
        if (statisticsData.factory_stats.length != 0) return;
        setInspectionFilters({
            ...inspectionFilters,
            factory_id: selectedFactory
        });
        getStatisticsData();
    }, [applicationType]);

    return (
        <DefaultLayout>
            <Toolbar />
            <WPQMainContentContainer>
                <SettingsColumn />
                <CanvasContainerStats>
                    <StatsView data={statisticsData}/>
                </CanvasContainerStats>
            </WPQMainContentContainer>
        </DefaultLayout>
    )
}

export default WeldingProcessQuality;