import React from "react";
import { ChartData, ChartOptions } from "chart.js";
import {timestampToDateTimeYMD } from "../../utils/typesConverter";
import ChartCanvasBase from "../ChartCanvasBase";
import { 
    SCcontainer,
    ChartContainer,
    GraphContainer,
    ChartCanvasContainer,
    LabelContainer,
    StyledTypography
} from "./styles/StripChartViewStyles";
import { RecordMetaData, DispositionType } from "../../types/inspection_types";
import TopToolbar from "./TopToolbar";
import { DispositionTypeName } from "../../context/DataHandlerContext";
  
const DispositionColor: Record<DispositionType, string> = {
    [DispositionType.Pass]: "green",
    [DispositionType.Fail]: "red",
    [DispositionType.Invalid]: "darkorange",
};
// type: 'bar' | 'line' | 'pie' | 'doughnut' | 'radar';

interface StripChartViewProps {
    data: ChartData;
    header_meta_data?: RecordMetaData;
}

const getDispositionDetails = (disposition?: number) => {
    if (!disposition || !(disposition in DispositionType)) {
        return { name: "", color: "black" };
    }
    return {
        name: DispositionTypeName[disposition as DispositionType],
        color: DispositionColor[disposition as DispositionType],
    };
};

const StripChartView : React.FC<StripChartViewProps> = ({data, header_meta_data}) => {

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

    const { name: dispositionName, color: dispositionColor } = getDispositionDetails(header_meta_data?.disposition);

    return (
        <SCcontainer>
            <TopToolbar />
            <GraphContainer>
                <LabelContainer>
                    <StyledTypography justifyContent="flex-start">
                        <span>
                            {header_meta_data ? (
                                <>Disposition: <span style={{ color: dispositionColor }}>{dispositionName}</span></>
                            ) : (
                                "Loading data..."
                            )}
                        </span>
                        <span>{`Date: ${header_meta_data?.timestamp ? timestampToDateTimeYMD(header_meta_data.timestamp) : ""}`}</span>
                    </StyledTypography>
                    <StyledTypography justifyContent="center">
                        <span>{`Record ID: ${header_meta_data?.record_id ? header_meta_data.record_id : ""}`}</span>
                        <span>{`Job: ${header_meta_data?.job_id ? header_meta_data.job_id : ""}`}</span>
                    </StyledTypography>
                    <StyledTypography justifyContent="flex-end">
                        <span>{`Factory: ${header_meta_data?.factory_name ? header_meta_data.factory_name : ""}`}</span>
                        <span>{`Device: ${header_meta_data?.device_name ? header_meta_data.device_name : ""}`}</span>
                    </StyledTypography>
                </LabelContainer>
                <ChartContainer>
                    <ChartCanvasContainer>
                        <ChartCanvasBase type={"line"} data={data} options={chartOptions} />
                    </ChartCanvasContainer>
                </ChartContainer>
            </GraphContainer>
        </SCcontainer>
    )
};

export default StripChartView;