import React from "react";
import {
    FactoryMetricMainContentContainer,
} from "./styles/FactoryMetricStyles" // Importar los estilos
import Toolbar from "../components/GeneralMenuToolbar"; // Importar la Toolbar reutilizable
import DefaultLayout from "../components/DefaultLayout";

const FactoryMetrics: React.FC = () => {

    return (
        <DefaultLayout>
            <Toolbar />
            <FactoryMetricMainContentContainer>
            </FactoryMetricMainContentContainer>
        </DefaultLayout>
    )
}

export default FactoryMetrics;