import React from 'react';
import { Box } from '@mui/material';
import { settingsColumStyles } from './styles/SettingsColumStyles';
import { StripChartContextProvider } from '../../context/StripChartContext';
import FiltersBox from './FiltersBox';
import AxisSettings from './AxisSettings';
import { useApplicationTypeContext } from '../../context/ApplicationTypeContext';

const SettingsColumn : React.FC = () => {
    const styles = settingsColumStyles();
    const { isInspectionView } = useApplicationTypeContext();

    return (
        <StripChartContextProvider>
            <Box sx={styles.container}>
                <FiltersBox />
                {isInspectionView &&
                    <AxisSettings />
                }
            </Box>
        </StripChartContextProvider>
    );
};

export default SettingsColumn;
