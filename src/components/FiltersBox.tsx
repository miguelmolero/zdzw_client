import React, { useState } from "react";
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
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { StyledContainer, StyledAccordion, DatePickersWrapper } from "./styles/FiltersBoxStyles";

const FiltersBox: React.FC = () => {
    const [fromDate, setFromDate] = useState<Date | null>(null);
    const [toDate, setToDate] = useState<Date | null>(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StyledContainer>
                <StyledAccordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Filters</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <DatePickersWrapper>
                            <DatePicker
                                label="From"
                                value={fromDate}
                                onChange={(newValue) => setFromDate(newValue)}
                                slotProps={{ textField: { fullWidth: true } }}
                            />
                            <DatePicker
                                label="To"
                                value={toDate}
                                onChange={(newValue) => setToDate(newValue)}
                                slotProps={{ textField: { fullWidth: true } }}
                            />
                        </DatePickersWrapper>
                        {/* <FormControl fullWidth sx={{ marginBottom: "8px" }}>
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
                        </FormControl> */}
                    </AccordionDetails>
                </StyledAccordion>
            </StyledContainer>
        </LocalizationProvider>
    );
};

export default FiltersBox;
