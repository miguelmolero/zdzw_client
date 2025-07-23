import React, { useEffect, useState } from "react";
import Toolbar from "../components/GeneralMenuToolbar";
import DefaultLayout from "../components/DefaultLayout";
import StripChartView from "../components/StripChartView/StripChartView";
import { ChartData } from "chart.js";
import { StripData } from "../types/inspection_types";
import {
    InspectionContainer,
    InspectionColumnContainer,
    CanvasContainerSC,
    DamageTablesContainer,
} from "./styles/InspectionAnalysisStyles";
import SettingsColumn from "../components/SettingsColumn/SettingsColumn";
import DamageTablesView from "../components/DamagesView/DamageTablesView";
import { useStripChartContext} from "../context/StripChartContext";
import { useDataHandlerContext } from "../context/DataHandlerContext";
import { useApplicationTypeContext } from "../context/ApplicationTypeContext";

const InspectionAnalysis: React.FC = () => {
    const { applicationType } = useApplicationTypeContext();
    const { current_record, inspectionData, getInspectionData } = useStripChartContext();
    const { xAxis, yAxis, inspectionFilters } = useDataHandlerContext();
    const [chartData, setChartData] = useState<ChartData<"line">>({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        if (inspectionData && inspectionData.strip_data.length > 0) {
            const labels = inspectionData.strip_data[0][xAxis as keyof StripData] as number[];

            const datasets = inspectionData.strip_data.map((strip) => ({
                label: `Channel ${strip.channel_id + 1} - Gate ${strip.gate_id + 1}`,
                data: strip[yAxis as keyof StripData],
                borderColor: "rgba(75,192,192,1)",
                backgroundColor: "rgba(75,192,192,0.4)",
                borderWidth: 1,
                fill: false,
                pointRadius: 0,
            })) as ChartData<"line">["datasets"];

            const damages = inspectionData.strip_data.map((strip) => ({
                label: `Channel ${strip.channel_id + 1} - Gate ${strip.gate_id + 1} - Damages`,
                data: yAxis == "amplitude" ? strip["amp_damages"] : strip["tof_damages"],
                borderColor: "rgba(255,0,0,1)",
                backgroundColor: "rgba(255,0,0,0.4)",
                borderWidth: 1,
                fill: false,
                pointRadius: 0,
            })) as ChartData<"line">["datasets"];
            datasets.push(...damages);

            // const defects = inspectionData.strip_data.map((strip) => ({

            setChartData({
                labels,
                datasets,
            });
        }
    }, [inspectionData, xAxis, yAxis]);

    useEffect(() => {
        if (!current_record ) return;
        getInspectionData("last");
    }, [inspectionFilters]);

    useEffect(() => {
        getInspectionData("last");
    }, [applicationType]);

    return (
        <DefaultLayout>
            <Toolbar />
            <InspectionContainer>
                <SettingsColumn isInspectionView />
                <InspectionColumnContainer>
                    <CanvasContainerSC>
                        <StripChartView
                            data={chartData}
                            header_meta_data={inspectionData?.meta_data}
                        />
                    </CanvasContainerSC>
                    <DamageTablesContainer>
                        <DamageTablesView
                            strip_data={inspectionData?.strip_data || []}
                        />
                    </DamageTablesContainer>
                </InspectionColumnContainer>
            </InspectionContainer>
        </DefaultLayout>
    );
};

export default InspectionAnalysis;
