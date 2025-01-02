import React from "react";
import {
    FactoryMetricMainContentContainer,
} from "./styles/FactoryMetricStyles";
import Toolbar from "../components/GeneralMenuToolbar";
import DefaultLayout from "../components/DefaultLayout";
import InspectionSettingsColumn from "../components/SettingsColumn/SettingsColumn";

const FactoryMetrics: React.FC = () => {

    return (
        <DefaultLayout>
            <Toolbar />
            <FactoryMetricMainContentContainer>
                <InspectionSettingsColumn />
            </FactoryMetricMainContentContainer>
        </DefaultLayout>
    )
}

export default FactoryMetrics;