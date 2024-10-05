// src/pages/InspectionVisualizator.tsx
import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Header from '../components/Header'; // Reutilizar el Header
import Toolbar from '../components/Toolbar'; // Reutilizar la Toolbar
import StripChartCanvas from '../components/StripChartCanvas';
import { inspectionStyles } from './styles/InspectionVisualizatorStyles'; // Estilos de la página
import { ChartData, ChartOptions } from 'chart.js'; // Importar tipos

const InspectionVisualizator : React.FC = () => {
  const styles = inspectionStyles();

    // Tipar los datos y opciones correctamente
    const chartData: ChartData<'bar'> = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Weld Data',
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55, 40],
          },
        ],
      };
    
      const chartOptions: ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: false,
      };

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
            <InputLabel>Select filter</InputLabel>
            <Select defaultValue="">
              <MenuItem value={10}>Option 1</MenuItem>
              <MenuItem value={20}>Option 2</MenuItem>
              <MenuItem value={30}>Option 3</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Canvas para gráficos */}
        <Box sx={styles.canvasContainer}>
            <StripChartCanvas type="bar" data={chartData} options={chartOptions} />
        </Box>
      </Box>
    </Box>
  );
};

export default InspectionVisualizator;
