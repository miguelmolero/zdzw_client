import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import { ApplicationType } from "../types/aplication_types";
import {
    RootFactoryMetricContainer,
    FactoryMetricMainContentContainer,
} from "./styles/FactoryMetricStyles" // Importar los estilos
import Header from "../components/Header"; // Importar el Header reutilizable
import Toolbar from "../components/GeneralMenuToolbar"; // Importar la Toolbar reutilizable
import { useGeneralStateContext } from "../context/GeneralStateContext";

const FactoryMetrics: React.FC = () => {
    const { setApplicationType } = useGeneralStateContext();
    const location = useLocation();

    useEffect(() => {
        setApplicationType(ApplicationType.FactoryMetrics);
    }, [location, setApplicationType]);

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