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
} from "../styles/FiltersBoxStyles";
import { ApplicationType } from "../../types/aplication_types";
import { useDataHandlerContext } from "../../context/DataHandlerContext";
import { useGeneralStateContext } from "../../context/GeneralStateContext";

const AxisSettings: React.FC = () => {
    const { xAxis, yAxis, updateAxis } = useDataHandlerContext();
    const { applicationType } = useGeneralStateContext();
    const isInspectionVisualizator = applicationType == ApplicationType.InspectionVisualizator;
    console.log("isInspectionVisualizator", isInspectionVisualizator);
    return (
        <>
            <StyledContainer>
                <StyledAccordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="body2">X-Axis</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl fullWidth size="small">
                            <Select value={xAxis} onChange={(e) => updateAxis("xAxis",e.target.value)}>
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
                            <Select value={yAxis} onChange={(e) => updateAxis("yAxis", e.target.value)}>
                                <MenuItem value="amplitude">Amplitude</MenuItem>
                                <MenuItem value="tof">TOF</MenuItem>
                                <MenuItem value="amp_damages" hidden={isInspectionVisualizator}>Amplitude(damage)</MenuItem>
                                <MenuItem value="tof_damages" hidden={isInspectionVisualizator}>TOF(damage)</MenuItem>
                            </Select>
                        </FormControl>
                    </AccordionDetails>
                </StyledAccordion>
            </StyledContainer>
        </>
    );
};

export default AxisSettings;
