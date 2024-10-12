// src/pages/InspectionVisualizator.tsx
import React, { useEffect, useState } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Header from '../components/Header'; // Reutilizar el Header
import Toolbar from '../components/Toolbar'; // Reutilizar la Toolbar
import StripChartCanvas from '../components/StripChartCanvas';
import { inspectionStyles } from './styles/InspectionVisualizatorStyles'; // Estilos de la página
import { ChartData, ChartOptions } from 'chart.js'; // Importar tipos
import { RecordData, RecordDataRaw, StripData } from '../types/types';
import { parseRecordData } from '../utils/parseRecordData';

const InspectionVisualizator : React.FC = () => {
  const styles = inspectionStyles();
  const [recordData, setRecordData] = useState<RecordData | null>(null);
  const [xAxis, setXAxis] = useState<string>('sample');
  const [yAxis, setYAxis] = useState<string>('amplitude');
  const [chartData, setChartData] = useState<ChartData<'line'>>({
    labels: [],
    datasets: [],
  });

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const loadRecordData = async () => {
    try {
      const basePath = process.env.NODE_ENV === 'production' ? '/static' : '';
      const response = await fetch(`${basePath}/StripData.json`);
      const textResponse = await response.text();  // Lee la respuesta como texto
      const jsonData: RecordDataRaw = JSON.parse(textResponse);  // Parsea el texto a JSON
      //const jsonData: RecordDataRaw = await response.json();
      //console.log(jsonData);
      const parsedData = parseRecordData(jsonData);
      setRecordData(parsedData);
    } catch (error) {
      console.error('Error al cargar los datos del registro:', error);
    }
  };

  useEffect(() => {
    loadRecordData();
  }, []);

  useEffect(() => {
    if (recordData) {
      const labels = recordData.strip_data[0][xAxis as keyof StripData] as number[];

      // Construir los datasets de todas las gates y channels
      const datasets = recordData.strip_data.map((strip) => ({
        label: `Channel ${strip.channel_id} - Gate ${strip.gate_id}`,
        data: strip[yAxis as keyof StripData],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderWidth: 1,
        fill: false,
      })) as ChartData<'line'>['datasets'];

      setChartData({
        labels,
        datasets,
      });
    }
  }, [xAxis, yAxis, recordData]);

  return (
    <Box sx={styles.root}>
      {/* Barra lateral */}
      <Toolbar />

      {/* Contenido principal */}
      <Box sx={styles.mainContent}>
        {/* Header */}
        <Header />

        {/* Selector debajo del Header */}
        <Box sx={styles.selectorContainer}>
          <FormControl sx={styles.formControl}>
            <InputLabel>X-Axis</InputLabel>
            <Select value={xAxis} onChange={(e) => setXAxis(e.target.value)}>
              <MenuItem value="sample">Sample</MenuItem>
              <MenuItem value="distance">Distance</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={styles.formControl}>
            <Select value={yAxis} onChange={(e) => setYAxis(e.target.value)}>
              <MenuItem value="amplitude">Amplitude</MenuItem>
              <MenuItem value="tof">TOF</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Canvas para gráficos */}
        <Box sx={styles.canvasContainer}>
            <StripChartCanvas type="line" data={chartData} options={chartOptions} />
        </Box>
      </Box>
    </Box>
  );
};

export default InspectionVisualizator;
