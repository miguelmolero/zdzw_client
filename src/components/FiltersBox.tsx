import React from "react";
import {
    AccordionSummary,
    AccordionDetails,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { StyledContainer, StyledAccordion } from "./styles/FiltersBoxStyles";

const FiltersBox: React.FC = () => {
    return (
        <StyledContainer>
            {/* Sección 1 */}
            <StyledAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Sección 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl fullWidth sx={{ marginBottom: "8px" }}>
                        <InputLabel>Selector 1</InputLabel>
                        <Select defaultValue="">
                            <MenuItem value="op1">Opción 1</MenuItem>
                            <MenuItem value="op2">Opción 2</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Selector 2</InputLabel>
                        <Select defaultValue="">
                            <MenuItem value="op3">Opción 3</MenuItem>
                            <MenuItem value="op4">Opción 4</MenuItem>
                        </Select>
                    </FormControl>
                </AccordionDetails>
            </StyledAccordion>

            {/* Sección 2 */}
            <StyledAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Sección 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl fullWidth sx={{ marginBottom: "8px" }}>
                        <InputLabel>Selector A</InputLabel>
                        <Select defaultValue="">
                            <MenuItem value="a">A</MenuItem>
                            <MenuItem value="b">B</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Selector B</InputLabel>
                        <Select defaultValue="">
                            <MenuItem value="c">C</MenuItem>
                            <MenuItem value="d">D</MenuItem>
                        </Select>
                    </FormControl>
                </AccordionDetails>
            </StyledAccordion>
        </StyledContainer>
    );
};

export default FiltersBox;
