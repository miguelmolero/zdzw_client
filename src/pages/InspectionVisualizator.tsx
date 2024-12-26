import React, { useEffect, useState } from "react";
import Header from "../components/Header"; // Reutilizar el Header
import Toolbar from "../components/GeneralMenuToolbar"; // Reutilizar la Toolbar
import StripChartView from "../components/StripChartView/StripChartView";
import { ChartData, ChartOptions } from "chart.js"; // Importar tipos
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
                    display: false, // Remove grid lines on the x-axis
                }
            },
            y: {
                grid: {
                    display: true, // Remove grid lines on the y-axis
                }
            }
        },
        plugins: {
            legend: {
                position: 'bottom', // Display legend at the bottom
                labels: {
                    boxWidth: 20,  // Width of the legend box
                    padding: 15     // Padding between legend items
                }
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

            // Construir los datasets de todas las gates y channels
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
                <Toolbar />
                <MainContent>
                    <Header />
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
