import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {ChartData, ChartOptions} from "chart.js";
import { Typography } from "@mui/material";
import { 
    PieChartContainer, 
    StatsItem,
    StatsItemColumn
} from "./styles/StatsViewStyles";
import StatsInfoData from "./StatsData";
import ChartCanvasBase from "../ChartCanvasBase"
import { ApplicationType } from "../../types/application_types";
import { StatsData } from "../../types/statistics_types";
import { useApplicationTypeContext, applicationRoutes } from "../../context/ApplicationTypeContext";
import { useDataHandlerContext } from "../../context/DataHandlerContext";

interface StatsCardProps {
    data: StatsData;
}

const StatsCard : React.FC<StatsCardProps> = ({data}) => {
    const navigate = useNavigate();
    const { applicationType } = useApplicationTypeContext();
    const { setSelectedFactory } = useDataHandlerContext();
    const [chartData, setChartData] = useState<ChartData<"pie">>({
        labels: [],
        datasets: [],
    });

    const navigateToWPQ = () => {
        if (applicationType != ApplicationType.FactoryMetrics) return;
        setSelectedFactory(data.id);
        navigate(applicationRoutes.WeldingProcessQuality)
    }

    useEffect(() => {
        if (data != undefined) {
            const data_labels = ["Pass", "Fail", "Invalid"];
            const datasets = [{
                data: [data.pass_rate, data.fail_rate, data.invalid_rate],
                backgroundColor: ['#4CAF50', '#F44336', '#FFEB3B'], 
                borderWidth: 3,
            }];
            //console.log(datasets);

            setChartData({
                labels: data_labels,
                datasets,
            });
        }
    }, [data]);

    const chartOptions: ChartOptions<"pie"> = {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom', 
                labels: {
                    boxWidth: 20, 
                    padding: 10,
                },
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: (tooltipItem) => {
                        const dataset = tooltipItem.dataset.data;
                        const value = dataset[tooltipItem.dataIndex] || 0;
                        return `${tooltipItem.label}: ${value} %`;
                    },
                },
            },
        },
    };

    return (
        <StatsItemColumn onClick={navigateToWPQ}>
            <Typography align="center">
                {
                    applicationType == ApplicationType.WeldingProcessQuality ? 
                    `Device ID - ` : 
                    `Factory ID - `
                }
                {data.id}
            </Typography>
            <StatsItem>
                <StatsInfoData data={data}/>
                <PieChartContainer>
                    <ChartCanvasBase type={"pie"} data={chartData} options={chartOptions} />
                </PieChartContainer>
            </StatsItem>
        </StatsItemColumn>
    )
};

export default StatsCard;