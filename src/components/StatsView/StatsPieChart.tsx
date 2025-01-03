import React from "react";
import { PieChartContainer } from "./styles/StatsViewStyles";

const StatsPieChart : React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const chartRef = useRef<Chart | null>(null);

    useEffect(() => {
        registerChartComponents(type);

        const ctx = canvasRef.current!.getContext('2d');
        if (chartRef.current) {
        chartRef.current.destroy();
        }
        chartRef.current = new Chart(ctx!, {
        type,
        data,
        options,
        });

        // Limpiar el gráfico cuando el componente se desmonte
        return () => {
        chartRef.current?.destroy();
        };
    }, [type, data, options]);

    return <canvas ref={canvasRef}/>;
};

export default StatsPieChart;