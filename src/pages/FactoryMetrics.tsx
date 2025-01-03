import React from "react";
import {
    CanvasContainerStats,
    FactoryMetricMainContentContainer,
} from "./styles/FactoryMetricStyles";
import Toolbar from "../components/GeneralMenuToolbar";
import DefaultLayout from "../components/DefaultLayout";
import SettingsColumn from "../components/SettingsColumn/SettingsColumn";
import StatsView from "../components/StatsView/StatsView";

const FactoryMetrics: React.FC = () => {

    return (
        <DefaultLayout>
            <Toolbar />
            <FactoryMetricMainContentContainer>
                <SettingsColumn />
                <CanvasContainerStats>
                    <StatsView />
                </CanvasContainerStats>
            </FactoryMetricMainContentContainer>
        </DefaultLayout>
    )
}

export default FactoryMetrics;