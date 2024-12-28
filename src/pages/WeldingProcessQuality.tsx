import React from "react";
import {
    RootWPQContainer,
    WPQMainContentContainer,
} from "./styles/WeldingProcessQualityStyles" // Importar los estilos
import Header from "../components/Header"; // Importar el Header reutilizable
import Toolbar from "../components/GeneralMenuToolbar"; // Importar la Toolbar reutilizable

const WeldingProcessQuality: React.FC = () => {

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