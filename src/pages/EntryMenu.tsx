import React from "react";
import { Link } from "react-router-dom"; // Importar Link para la navegación
import {
    EntryBodyContainer,
    EntryGridContainer,
    RowGridContainer,
    CardButton,
    CardButtonText,
} from "./styles/EntryMenuStyles"; // Importar los estilos
import Toolbar from "../components/GeneralMenuToolbar"; // Importar la Toolbar reutilizable
import DefaultLayout from "../components/DefaultLayout";

const EntryMenu: React.FC = () => {

    return (
        <DefaultLayout>
            <Toolbar />
            <EntryBodyContainer>
                <EntryGridContainer>
                    <RowGridContainer>
                        <Link to="/factory-metrics" style={{ textDecoration: "none" }}>
                            <CardButton elevation={3}>
                                <CardButtonText>Factory Metrics</CardButtonText>
                            </CardButton>
                        </Link>
                        <Link to="/inspection-visualizator" style={{ textDecoration: "none" }}>
                            <CardButton elevation={3}>
                                <CardButtonText>Inspection Visualizer</CardButtonText>
                            </CardButton>
                        </Link>
                    </RowGridContainer>
                    <RowGridContainer>
                        <Link to="/inspection-analysis" style={{ textDecoration: "none" }}>
                            <CardButton elevation={3}>
                                <CardButtonText>Inspection Analysis</CardButtonText>
                            </CardButton>
                        </Link>
                        <Link to="/welding-process-quality" style={{ textDecoration: "none" }}>
                            <CardButton elevation={3}>
                                <CardButtonText>Welding Process Quality</CardButtonText>
                            </CardButton>
                        </Link>
                    </RowGridContainer>
                </EntryGridContainer>
            </EntryBodyContainer>
        </DefaultLayout>
    );
};

export default EntryMenu;
