import React from "react";
import {
    RootFactoryMetricContainer,
    FactoryMetricMainContentContainer,
} from "./styles/FactoryMetricStyles" // Importar los estilos
import Header from "../components/Header"; // Importar el Header reutilizable
import Toolbar from "../components/GeneralMenuToolbar"; // Importar la Toolbar reutilizable

const FactoryMetrics: React.FC = () => {

    return (
        <RootFactoryMetricContainer>
            <Toolbar />
            <FactoryMetricMainContentContainer>
                <Header />
            </FactoryMetricMainContentContainer>
        </RootFactoryMetricContainer>
    )
}

export default FactoryMetrics;