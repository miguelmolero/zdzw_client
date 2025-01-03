import React from "react";
import { ChartData, ChartOptions } from "chart.js";
import {timestampToDateTimeYMD } from "../../utils/typesConverter";
import StripChartCanvas from "./StripChartCanvas";
import { 
    SCcontainer,
    ChartContainer,
    GraphContainer,
    ChartCanvasContainer,
    LabelContainer,
    StyledTypography
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
                        <StyledTypography justifyContent="flex-start">
                            <span>
                                {header_meta_data
                                    ? `Disposition: ${header_meta_data?.disposition}`
                                    : "Loading data..."}
                            </span>
                            <span>
                                {header_meta_data
                                    ? `Date: ${timestampToDateTimeYMD(header_meta_data?.timestamp)}`
                                    : "Loading data..."}
                            </span>
                        </StyledTypography>
                        <StyledTypography justifyContent="center">
                            <span>
                                {header_meta_data
                                    ? `Record ID: ${header_meta_data?.record_id}`
                                    : ""}
                            </span>
                            <span>
                                {header_meta_data
                                    ? `Job: ${header_meta_data?.job_id}`
                                    : ""}
                            </span>
                        </StyledTypography>
                        <StyledTypography justifyContent="flex-end">
                            <span>
                                {header_meta_data
                                    ? `Factory: ${header_meta_data?.factory_name}`
                                    : ""}
                            </span>
                            <span>
                                {header_meta_data
                                    ? `Device: ${header_meta_data?.device_name}`
                                    : ""}
                            </span>
                        </StyledTypography>
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