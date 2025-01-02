import React from "react";
import {
    FactoryMetricMainContentContainer,
} from "./styles/FactoryMetricStyles";
import Toolbar from "../components/GeneralMenuToolbar";
import DefaultLayout from "../components/DefaultLayout";
import SettingsColumn from "../components/SettingsColumn/SettingsColumn";

const FactoryMetrics: React.FC = () => {

    return (
        <DefaultLayout>
            <Toolbar />
            <FactoryMetricMainContentContainer>
                <SettingsColumn />
            </FactoryMetricMainContentContainer>
        </DefaultLayout>
    )
}

export default FactoryMetrics;