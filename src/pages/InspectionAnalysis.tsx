import React, { useEffect, useState } from "react";
import Toolbar from "../components/GeneralMenuToolbar";
import DefaultLayout from "../components/DefaultLayout";
import StripChartView from "../components/StripChartView/StripChartView";
import { ChartData, ChartOptions } from "chart.js";
import { StripData } from "../types/inspection_types";
import {
    InspectionContainer,
    CanvasContainerSC
} from "./styles/InspectionVisualizatorStyles";
import InspectionSettingsColumn from "../components/SettingsColumn/SettingsColumn";
import { useDataHandlerContext} from "../context/DataHandlerContext";

const InspectionVisualizator: React.FC = () => {
    const {inspectionData, xAxis, yAxis} = useDataHandlerContext();
    const [chartData, setChartData] = useState<ChartData<"line">>({
        labels: [],
        datasets: [],
    });

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
                }
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
    };

    useEffect(() => {
        if (inspectionData && inspectionData.strip_data.length > 0) {
            console.log(inspectionData);
            const labels = inspectionData.strip_data[0][xAxis as keyof StripData] as number[];

            const datasets = inspectionData.strip_data.map((strip) => ({
                label: `Channel ${strip.channel_id} - Gate ${strip.gate_id}`,
                data: strip[yAxis as keyof StripData],
                borderColor: "rgba(75,192,192,1)",
                backgroundColor: "rgba(75,192,192,0.4)",
                borderWidth: 1,
                fill: false,
                pointRadius: 0,
            })) as ChartData<"line">["datasets"];

            const damages = inspectionData.strip_data.map((strip) => ({
                label: `Channel ${strip.channel_id} - Gate ${strip.gate_id} - Damages`,
                data: yAxis == "amplitude" ? strip["amp_damages"] : strip["tof_damages"],
                borderColor: "rgba(255,0,0,1)",
                backgroundColor: "rgba(255,0,0,0.4)",
                borderWidth: 1,
                fill: false,
                pointRadius: 0,
            })) as ChartData<"line">["datasets"];
            datasets.push(...damages);

            setChartData({
                labels,
                datasets,
            });
        }
    }, [inspectionData, xAxis, yAxis]);

    return (
        <DefaultLayout>
            <Toolbar />
            <InspectionContainer>
                <InspectionSettingsColumn />
                <CanvasContainerSC>
                    <StripChartView
                        type="line"
                        data={chartData}
                        options={chartOptions}
                        header_meta_data={inspectionData?.meta_data}
                    />
                </CanvasContainerSC>
            </InspectionContainer>
        </DefaultLayout>
    );
};

export default InspectionVisualizator;
