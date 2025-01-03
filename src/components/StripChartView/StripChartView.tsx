import React from "react";
import { ChartData, ChartOptions, Point } from "chart.js";
import { Typography } from "@mui/material";
import {timestampToDateTimeYMD } from "../../utils/typesConverter";
import StripChartCanvas from "./StripChartCanvas";
import { 
    SCcontainer,
    ChartContainer,
    GraphContainer,
    ChartCanvasContainer,
    LabelContainer
} from "./styles/StripChartViewStyles";
import { StripChartContextProvider} from "../../context/StripChartContext";
import { RecordMetaData } from "../../types/inspection_types";
import TopToolbar from "./TopToolbar";

interface StripChartViewProps {
    type: 'bar' | 'line' | 'pie' | 'doughnut' | 'radar';
    data: ChartData;
    header_meta_data?: RecordMetaData;
}

const StripChartView : React.FC<StripChartViewProps> = ({type, data, header_meta_data}) => {

    const chartOptions: ChartOptions<"line"> = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 30,
                right: 50,
                top: 25,
                bottom: 25,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    maxTicksLimit: 15,
                    callback: function (value) {
                        const currentLabels = data?.labels as number[];
                        const tickValue = currentLabels[value as number];
                        return tickValue?.toFixed(1);
                    },
                },
            },
            y: {
                grid: {
                    display: true,
                }
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 20,
                    padding: 15
                }
            },
            tooltip: {
                enabled: true,
                intersect: false,
                position: 'nearest',
            }
        }
    }

    return (
        <StripChartContextProvider>
            <SCcontainer>
                <TopToolbar />
                <GraphContainer>
                    <LabelContainer>
                        <Typography>
                        {header_meta_data
                            ? `Disposition: FAIL - Date: ${timestampToDateTimeYMD(header_meta_data.timestamp)} - Record ID: ${header_meta_data.record_id} - Job: ${header_meta_data.job_id}`
                            : "Loading data..."}
                        </Typography>
                    </LabelContainer>
                    <ChartContainer>
                        <ChartCanvasContainer>
                            <StripChartCanvas type={type} data={data} options={chartOptions} />
                        </ChartCanvasContainer>
                    </ChartContainer>
                </GraphContainer>
            </SCcontainer>
        </StripChartContextProvider>
    )
};

export default StripChartView;