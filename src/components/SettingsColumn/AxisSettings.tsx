import React from "react";
import {
    AccordionSummary,
    AccordionDetails,
    FormControl,
    Select,
    MenuItem,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { 
    StyledContainer, 
    StyledAccordion, 
} from "./styles/FiltersBoxStyles";
import { useDataHandlerContext } from "../../context/DataHandlerContext";
import { FeatureType, XAxisUnits } from "../../types/inspection_types";

const AxisSettings: React.FC = () => {
    const { xAxis, yAxis, updateAxis } = useDataHandlerContext();

    return (
        <>
            <StyledContainer>
                <StyledAccordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="body2">X-Axis</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl fullWidth size="small">
                            <Select value={xAxis} onChange={(e) => updateAxis("xAxis", e.target.value as XAxisUnits)}>
                                <MenuItem value="sample">Sample</MenuItem>
                                <MenuItem value="distance">Distance</MenuItem>
                            </Select>
                        </FormControl>
                    </AccordionDetails>
                </StyledAccordion>
            </StyledContainer>
            <StyledContainer>
                <StyledAccordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="body2">Y-Axis</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl fullWidth size="small">
                            <Select value={yAxis} onChange={(e) => updateAxis("yAxis", e.target.value as FeatureType)}>
                                <MenuItem value="amplitude">Amplitude</MenuItem>
                                <MenuItem value="tof">TOF</MenuItem>
                            </Select>
                        </FormControl>
                    </AccordionDetails>
                </StyledAccordion>
            </StyledContainer>
        </>
    );
};

export default AxisSettings;
