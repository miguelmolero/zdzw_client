import React from 'react';
import { Box } from '@mui/material';
import { settingsColumStyles } from '../styles/SettingsColumStyles';
import FiltersBox from './FiltersBox';
import { StripChartContextProvider } from '../../context/StripChartContext';
import AxisSettings from './AxisSettings';

const SettingsColumn : React.FC = () => {
    const styles = settingsColumStyles();

    return (
        <StripChartContextProvider>
            <Box sx={styles.container}>
                <FiltersBox />
                <AxisSettings />
            </Box>
        </StripChartContextProvider>
    );
};

export default SettingsColumn;
