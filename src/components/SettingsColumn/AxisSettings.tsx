import React, { useState } from "react";
import {
    AccordionSummary,
    AccordionDetails,
    FormControl,
    Select,
    MenuItem,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { 
    StyledContainer, 
    StyledAccordion, 
} from "../styles/FiltersBoxStyles";

const AxisSettings: React.FC = () => {
    const [xAxis, setXAxis] = useState<string>("sample");
    const [yAxis, setYAxis] = useState<string>("amplitude");

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StyledContainer>
                <StyledAccordion>
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
                </StyledAccordion>
                <StyledAccordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Y-Axis</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl>
                            <Select value={yAxis} onChange={(e) => setYAxis(e.target.value)}>
                                <MenuItem value="amplitude">Amplitu</MenuItem>
                                <MenuItem value="tof">TOF</MenuItem>
                            </Select>
                        </FormControl>
                    </AccordionDetails>
                </StyledAccordion>
            </StyledContainer>
        </LocalizationProvider>
    );
};

export default AxisSettings;
