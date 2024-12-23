import React from "react";
import { ChartData, ChartOptions } from "chart.js";
import { Typography } from "@mui/material";
import {timestampToDateTimeYMD } from "../utils/typesConverter";
import SideMenuView from "./SideMenuView";
import StripChartCanvas from "./StripChartCanvas";
import TopToolbar from "./TopToolbar";
import { 
    SCcontainer,
    RightToolbarContainer,
    RowContainer,
    ColumnContainer,
    ChartCanvasContainer,
    LabelContainer
} from "./styles/StripChartViewStyles";
import { StripChartContextProvider} from "../context/StripChartContext";
import { RecordMetaData } from "../types/types";

interface StripChartViewProps {
    type: 'bar' | 'line' | 'pie' | 'doughnut' | 'radar'; // Tipos de gráfico admitidos
    data: ChartData; // Datos que se pasarán al gráfico
    options?: ChartOptions; // Opciones de configuración adicionales para Chart.js
    header_meta_data?: RecordMetaData; // Metadatos del registro
}

const StripChartView : React.FC<StripChartViewProps> = ({type, data, options, header_meta_data}) => {

    return (
        <StripChartContextProvider>
            <SCcontainer>
                <ColumnContainer>
                    <LabelContainer>
                        <Typography>
                        {header_meta_data
                            ? `Disposition: FAIL - Date: ${timestampToDateTimeYMD(header_meta_data.timestamp)} - Record ID: ${header_meta_data.record_id} - Job: ${header_meta_data.job_id}`
                            : "Loading data..."}
                        </Typography>
                    </LabelContainer>
                    <TopToolbar />
                    <RowContainer>
                        <ChartCanvasContainer>
                            <StripChartCanvas type={type} data={data} options={options} />
                        </ChartCanvasContainer>
                        <RightToolbarContainer>
                        </RightToolbarContainer>
                    </RowContainer>
                </ColumnContainer>
                <SideMenuView/>
            </SCcontainer>
        </StripChartContextProvider>
    )
};

export default StripChartView;