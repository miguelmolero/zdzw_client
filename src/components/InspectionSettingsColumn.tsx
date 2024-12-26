import React from 'react';
import { Box } from '@mui/material';
import { inspectionSettingsColumnStyles } from './styles/InspectionSettingsColumStyles';

const InspectionSettingsColumn : React.FC = () => {
  const styles = inspectionSettingsColumnStyles();

  return (
    <Box sx={styles.container}>
    </Box>
  );
};

export default InspectionSettingsColumn;
