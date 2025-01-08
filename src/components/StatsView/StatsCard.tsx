import React, {useEffect, useState} from "react";
import {ChartData, ChartOptions} from "chart.js";
import { PieChartContainer, StatsItem } from "./styles/StatsViewStyles";
import StatsInfoData from "./StatsData";
import ChartCanvasBase from "../ChartCanvasBase"
import { StatsData } from "../../types/statistics_types";

interface StatsCardProps {
    data: StatsData;
    n_columns: number;
}

const StatsCard : React.FC<StatsCardProps> = ({data, n_columns}) => {
    const [chartData, setChartData] = useState<ChartData<"pie">>({
        labels: [],
        datasets: [],
    });

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
        <StatsItem columns={n_columns}>
            <StatsInfoData data={data}/>
            <PieChartContainer>
                <ChartCanvasBase type={"pie"} data={chartData} options={chartOptions} />
            </PieChartContainer>
        </StatsItem>
    )
};

export default StatsCard;