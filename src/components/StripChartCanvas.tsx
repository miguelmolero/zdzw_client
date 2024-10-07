// src/components/ChartCanvas.tsx
import React, { useEffect, useRef } from 'react';
import { Chart, ChartData, ChartOptions } from 'chart.js';
// src/components/StripChartCanvas.tsx
import {
  Chart as ChartJS,
  CategoryScale,
  BarController,
  LineController,
  LineElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement
} from 'chart.js';

// Registrar los componentes
ChartJS.register(BarController, LineController, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

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
