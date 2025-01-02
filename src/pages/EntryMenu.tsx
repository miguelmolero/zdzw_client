import React from "react";
import { Link } from "react-router-dom";
import {
    EntryBodyContainer,
    EntryGridContainer,
    RowGridContainer,
    CardButton,
    CardButtonText,
} from "./styles/EntryMenuStyles";
import DefaultLayout from "../components/DefaultLayout";

const EntryMenu: React.FC = () => {
    return (
        <DefaultLayout>
            <EntryBodyContainer>
                <EntryGridContainer>
                    <RowGridContainer>
                        <Link to="/inspection-visualizator" style={{ textDecoration: "none" }}>
                            <CardButton elevation={1}>
                                <CardButtonText>Inspection Visualizer</CardButtonText>
                            </CardButton>
                        </Link>
                        <Link to="/inspection-analysis" style={{ textDecoration: "none" }}>
                            <CardButton elevation={1}>
                                <CardButtonText>Inspection Analysis</CardButtonText>
                            </CardButton>
                        </Link>
                        <Link to="/factory-metrics" style={{ textDecoration: "none" }}>
                            <CardButton elevation={1}>
                                <CardButtonText>Factory Metrics</CardButtonText>
                            </CardButton>
                        </Link>
                        <Link to="/welding-process-quality" style={{ textDecoration: "none" }}>
                            <CardButton elevation={1}>
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
