import React, { useEffect, useState } from "react";
import Toolbar from "../components/GeneralMenuToolbar";
import DefaultLayout from "../components/DefaultLayout";
import StripChartView from "../components/StripChartView/StripChartView";
import { ChartData } from "chart.js";
import { StripData } from "../types/inspection_types";
import {
    InspectionContainer,
    CanvasContainerSC
} from "./styles/InspectionVisualizerStyles";
import SettingsColumn from "../components/SettingsColumn/SettingsColumn";
import { useDataHandlerContext} from "../context/DataHandlerContext";

const InspectionVisualizer: React.FC = () => {
    const { inspectionData, xAxis, yAxis } = useDataHandlerContext();
    const [chartData, setChartData] = useState<ChartData<"line">>({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        if (inspectionData && inspectionData.strip_data.length > 0) {
            const selectedLabels = xAxis === "sample"
                ? inspectionData.strip_data[0].sample
                : inspectionData.strip_data[0].distance;

            const datasets = inspectionData.strip_data.map((strip) => ({
                label: `Channel ${strip.channel_id + 1} - Gate ${strip.gate_id + 1}`,
                data: strip[yAxis as keyof StripData],
                borderColor: "rgba(75,192,192,1)",
                backgroundColor: "rgba(75,192,192,0.4)",
                borderWidth: 1,
                fill: false,
                pointRadius: 0,
            })) as ChartData<"line">["datasets"];

            setChartData({
                labels: selectedLabels,
                datasets,
            });
        }
    }, [inspectionData, xAxis, yAxis]);

    return (
        <DefaultLayout>
            <Toolbar />
            <InspectionContainer>
                <SettingsColumn isInspectionView />
                <CanvasContainerSC>
                    <StripChartView
                        type="line"
                        data={chartData}
                        header_meta_data={inspectionData?.meta_data}
                    />
                </CanvasContainerSC>
            </InspectionContainer>
        </DefaultLayout>
    );
};

export default InspectionVisualizer;
