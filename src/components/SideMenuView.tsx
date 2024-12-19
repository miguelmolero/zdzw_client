import React, {useState} from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    FormControl,
    Select,
    MenuItem
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SideMenuDrawer } from './styles/SideMenuViewStyles';
import {useStripChartContext} from '../context/StripChartContext';

const SideMenuView: React.FC = () => {
    const {sideMenuOpen} = useStripChartContext();
    const [xAxis, setXAxis] = useState<string>("sample");
    const [yAxis, setYAxis] = useState<string>("amplitude");
    return (
        <SideMenuDrawer open={sideMenuOpen}>
            <Typography variant="h6" gutterBottom>
                Menú
            </Typography>
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
        </SideMenuDrawer>
    );
};

export default SideMenuView;
