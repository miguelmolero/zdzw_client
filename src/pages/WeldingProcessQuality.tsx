import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import { ApplicationType } from "../types/aplication_types";
import {
    RootWPQContainer,
    WPQMainContentContainer,
} from "./styles/WeldingProcessQualityStyles" // Importar los estilos
import Header from "../components/Header"; // Importar el Header reutilizable
import Toolbar from "../components/GeneralMenuToolbar"; // Importar la Toolbar reutilizable
import { useGeneralStateContext } from "../context/GeneralStateContext";

const WeldingProcessQuality: React.FC = () => {
    const { setApplicationType } = useGeneralStateContext();
    const location = useLocation();

    useEffect(() => {
        setApplicationType(ApplicationType.WeldingProcessQuality);
    }, [location, setApplicationType]);

    return (
        <RootWPQContainer>
            <Toolbar />
            <WPQMainContentContainer>
                <Header />
            </WPQMainContentContainer>
        </RootWPQContainer>
    )
}

export default WeldingProcessQuality;