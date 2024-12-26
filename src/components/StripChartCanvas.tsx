import React, { useEffect, useRef } from 'react';
import { Chart, ChartData, ChartOptions } from 'chart.js';
// src/components/StripChartCanvas.tsx
import {
  Chart as ChartJS,
  ChartType,
  ChartComponentLike,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  BarController,
  LineController,
  PieController,
  DoughnutController,
  PolarAreaController,
  BubbleController,
  ScatterController,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend);

const chartComponentsMap: Record<ChartType, ChartComponentLike[]> = {
  bar: [BarController, CategoryScale, LinearScale, BarElement],
  line: [LineController, CategoryScale, LinearScale, LineElement, PointElement],
  pie: [PieController, ArcElement],
  doughnut: [DoughnutController, ArcElement],
  radar: [RadialLinearScale, LineElement, PointElement],
  polarArea: [PolarAreaController, RadialLinearScale, ArcElement],
  bubble: [BubbleController, CategoryScale, LinearScale, PointElement],
  scatter: [ScatterController, CategoryScale, LinearScale, PointElement],
};

// Registrar los componentes
ChartJS.register(LineController, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface StripChartCanvasProps {
  type: 'bar' | 'line' | 'pie' | 'doughnut' | 'radar'; // Tipos de gráfico admitidos
  data: ChartData; // Datos que se pasarán al gráfico
  options?: ChartOptions; // Opciones de configuración adicionales para Chart.js
}

const StripChartCanvas: React.FC<StripChartCanvasProps> = ({ type, data, options }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current!.getContext('2d');
    const chartInstance = new Chart(ctx!, {
      type,
      data,
      options,
    });

    // Limpiar el gráfico cuando el componente se desmonte
    return () => {
      chartInstance.destroy();
    };
  }, [type, data, options]);

  return <canvas ref={canvasRef}/>;
};

export default StripChartCanvas;
