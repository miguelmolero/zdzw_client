import React from 'react';
import { Box } from '@mui/material';
import { settingsColumStyles } from './styles/SettingsColumStyles';
import { StripChartContextProvider } from '../../context/StripChartContext';
import FiltersBox from './FiltersBox';
import AxisSettings from './AxisSettings';
import OrderingBox from './OrderingBox';

interface SettingsColumnProps {
    isInspectionView?: boolean;
}

const SettingsColumn : React.FC<SettingsColumnProps> = ({ isInspectionView = false }) => {
    const styles = settingsColumStyles();

    return (
        <StripChartContextProvider>
            <Box sx={styles.container}>
                <FiltersBox />
                {isInspectionView ?
                    <AxisSettings />
                    :
                    <OrderingBox />
                }
            </Box>
        </StripChartContextProvider>
    );
};

export default SettingsColumn;
