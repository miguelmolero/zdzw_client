import React from "react";
import {
    WPQMainContentContainer,
} from "./styles/WeldingProcessQualityStyles" // Importar los estilos
import Toolbar from "../components/GeneralMenuToolbar"; // Importar la Toolbar reutilizable
import DefaultLayout from "../components/DefaultLayout";

const WeldingProcessQuality: React.FC = () => {

    return (
        <DefaultLayout>
            <Toolbar />
            <WPQMainContentContainer>
            </WPQMainContentContainer>
        </DefaultLayout>
    )
}

export default WeldingProcessQuality;