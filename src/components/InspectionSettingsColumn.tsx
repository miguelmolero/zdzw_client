import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, FormControl, MenuItem, Select, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { inspectionSettingsColumnStyles } from './styles/InspectionSettingsColumStyles';
import FiltersBox from './FiltersBox';
import TopToolbar from './TopToolbar';
import { StripChartContextProvider } from '../context/StripChartContext';

const InspectionSettingsColumn : React.FC = () => {
    const styles = inspectionSettingsColumnStyles();
    const [xAxis, setXAxis] = useState<string>("sample");
    const [yAxis, setYAxis] = useState<string>("amplitude");

    return (
        <StripChartContextProvider>
            <Box sx={styles.container}>
                <FiltersBox />
                <TopToolbar />
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>X-Axis</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl>
                            <Select value={xAxis} onChange={(e) => setXAxis(e.target.value)}>
                                <MenuItem value="sample">Sample</MenuItem>
                                <MenuItem value="distance">Distance</MenuItem>
                            </Select>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Y-Axis</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl>
                            <Select value={yAxis} onChange={(e) => setYAxis(e.target.value)}>
                                <MenuItem value="amplitude">Amplitude</MenuItem>
                                <MenuItem value="tof">TOF</MenuItem>
                            </Select>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </StripChartContextProvider>
    );
};

export default InspectionSettingsColumn;
