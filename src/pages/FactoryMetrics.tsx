import React, { useState } from "react";
import {ChartData} from "chart.js"
import {
    CanvasContainerStats,
    FactoryMetricMainContentContainer,
} from "./styles/FactoryMetricStyles";
import Toolbar from "../components/GeneralMenuToolbar";
import DefaultLayout from "../components/DefaultLayout";
import SettingsColumn from "../components/SettingsColumn/SettingsColumn";
import StatsView from "../components/StatsView/StatsView";
import { useStatisticsContext} from "../context/StatisticsContext";

const FactoryMetrics: React.FC = () => {
    const { statisticsData } = useStatisticsContext();
    const [chartData, setChartData] = useState<ChartData<"pie">>({
        labels: [],
        datasets: [],
    });

    return (
        <DefaultLayout>
            <Toolbar />
            <FactoryMetricMainContentContainer>
                <SettingsColumn />
                <CanvasContainerStats>
                    <StatsView data={chartData}/>
                </CanvasContainerStats>
            </FactoryMetricMainContentContainer>
        </DefaultLayout>
    )
}

export default FactoryMetrics;