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
import { FeatureTypeLabels, useDataHandlerContext, XAxisUnitsLabels } from "../../context/DataHandlerContext";
import { FeatureType, XAxisUnits } from "../../types/inspection_types";

const AxisSettings: React.FC = () => {
    const { xAxis, yAxis, setXAxis, setYAxis } = useDataHandlerContext();

    return (
        <>
            <StyledContainer>
                <StyledAccordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="body2">X-Axis</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl fullWidth size="small">
                            <Select value={xAxis} onChange={(e) => setXAxis(e.target.value as XAxisUnits)}>
                                {Object.values(XAxisUnits).map((unit) => (
                                    <MenuItem key={unit} value={unit}>
                                        {XAxisUnitsLabels[unit]}
                                    </MenuItem>
                                ))}
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
                            <Select value={yAxis} onChange={(e) => setYAxis(e.target.value as FeatureType)}>
                                {Object.values(FeatureType).map((type) => (
                                    <MenuItem key={type} value={type}>
                                        {FeatureTypeLabels[type]}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </AccordionDetails>
                </StyledAccordion>
            </StyledContainer>
        </>
    );
};

export default AxisSettings;
