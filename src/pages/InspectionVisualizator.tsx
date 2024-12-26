import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Toolbar from "../components/GeneralMenuToolbar";
import StripChartView from "../components/StripChartView/StripChartView";
import { ChartData, ChartOptions } from "chart.js";
import { RecordData, RecordDataRaw, StripData } from "../types/types";
import { parseRecordData } from "../utils/parseRecordData";
import {
    MainContent,
    RootContainer,
    InspectionContainer,
    CanvasContainerSC
} from "./styles/InspectionVisualizatorStyles";
import api from "../api/axiosConfig";
import InspectionSettingsColumn from "../components/SettingsColumn/SettingsColumn";
import { DataHandlerProvider } from "../context/DataHandlerContext";

const InspectionVisualizator: React.FC = () => {
    const [recordData, setRecordData] = useState<RecordData | null>(null);
    const xAxis = "sample";
    const yAxis = "amplitude";
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

    const loadRecordData = async () => {
        try {
            const response = await api.get<RecordDataRaw>('/api/stripchart/257');
            const jsonData: RecordDataRaw = response.data;
            const parsedData = parseRecordData(jsonData);
            setRecordData(parsedData);
        } catch (error) {
            console.error("Error al cargar los datos del registro:", error);
        }   
    };

    useEffect(() => {
        loadRecordData();
    }, []);

    useEffect(() => {
        if (recordData) {
            const labels = recordData.strip_data[0][
            xAxis as keyof StripData
            ] as number[];

            const datasets = recordData.strip_data.map((strip) => ({
                label: `Channel ${strip.channel_id} - Gate ${strip.gate_id}`,
                data: strip[yAxis as keyof StripData],
                borderColor: "rgba(75,192,192,1)",
                backgroundColor: "rgba(75,192,192,0.4)",
                borderWidth: 1,
                fill: false,
                pointRadius: 0,
            })) as ChartData<"line">["datasets"];

            setChartData({
                labels,
                datasets,
            });
        }
    }, [xAxis, yAxis, recordData]);

    return (
        <DataHandlerProvider>
            <RootContainer>
                <Header />
                <MainContent>
                    <Toolbar />
                    <InspectionContainer>
                        <InspectionSettingsColumn />
                        <CanvasContainerSC>
                            <StripChartView
                                type="line"
                                data={chartData}
                                options={chartOptions}
                                header_meta_data={recordData?.meta_data}
                            />
                        </CanvasContainerSC>
                    </InspectionContainer>
                </MainContent>
            </RootContainer>
        </DataHandlerProvider>
    );
};

export default InspectionVisualizator;
