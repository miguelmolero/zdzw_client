import React from "react";
import {ChartData, ChartOptions} from "chart.js";
import { StatsItem } from "./styles/StatsViewStyles";
import StatsData from "./StatsData";
import ChartCanvasBase from "../ChartCanvasBase"

interface StatsCardProps {
    data: ChartData;
}

const StatsCard : React.FC<StatsCardProps> = ({data}) => {

    const chartOptions: ChartOptions<"pie"> = {
        responsive: true,
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
        <StatsItem>
            <StatsData />
            <ChartCanvasBase type={"pie"} data={data} options={chartOptions} />
        </StatsItem>
    )
};

export default StatsCard;