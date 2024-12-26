// src/pages/InspectionVisualizator.tsx
import React, { useEffect, useState } from "react";
import Header from "../components/Header"; // Reutilizar el Header
import Toolbar from "../components/GeneralMenuToolbar"; // Reutilizar la Toolbar
import StripChartView from "../components/StripChartView";
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
import FiltersBox from "../components/FiltersBox";
import InspectionSettingsColumn from "../components/InspectionSettingsColumn";

const InspectionVisualizator: React.FC = () => {
    const [recordData, setRecordData] = useState<RecordData | null>(null);
    //const [xAxis, setXAxis] = useState<string>("sample");
    //const [yAxis, setYAxis] = useState<string>("amplitude");
    const xAxis = "sample";
    const yAxis = "amplitude";
    const [chartData, setChartData] = useState<ChartData<"line">>({
        labels: [],
        datasets: [],
    });

    const chartOptions: ChartOptions<"line"> = {
        responsive: true,
        maintainAspectRatio: false,
    };

    const loadRecordData = async () => {
        try {
            const response = await api.get<RecordDataRaw>('/api/stripchart/257');
            const jsonData: RecordDataRaw = response.data;
            console.log(jsonData);
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
            })) as ChartData<"line">["datasets"];

            setChartData({
                labels,
                datasets,
            });
        }
    }, [xAxis, yAxis, recordData]);

    return (
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
    );
};

export default InspectionVisualizator;
