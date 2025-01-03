import React from "react";
import {
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { 
    StyledContainer, 
    StyledAccordion, 
    DatePickersWrapper,
    StyledTextField,
} from "./styles/FiltersBoxStyles";
import { InspectionFilters } from "../../types/inspection_types";
import { useDataHandlerContext } from '../../context/DataHandlerContext';


const FiltersBox: React.FC = () => {
    const { inspectionFilters, setInspectionFilters } = useDataHandlerContext();

    const updateFiltersData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setInspectionFilters({
            ...inspectionFilters,
            [id]: parseInt(value, 10) || value || -1, // Parse as number or fallback to raw value
        });
    };

    const updateDateFilters = (key: keyof InspectionFilters, date: Date | null) => {
        setInspectionFilters({
            ...inspectionFilters,
            [key]: date ? date.getTime() : -1,
        });
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StyledContainer>
                <StyledAccordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="body2">Filters</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <DatePickersWrapper>
                            <DatePicker
                                label="From"
                                value={inspectionFilters.start_date && inspectionFilters.start_date != -1 ? new Date(inspectionFilters.start_date) : null}
                                onChange={(newValue) => updateDateFilters("start_date", newValue)}
                                slotProps={{ textField: { fullWidth: true, size: "small" } }}
                            />
                            <DatePicker
                                label="To"
                                value={inspectionFilters.end_date && inspectionFilters.end_date != -1 ? new Date(inspectionFilters.end_date) : null}
                                onChange={(newValue) => updateDateFilters("end_date", newValue)}
                                slotProps={{ textField: { fullWidth: true, size: "small" } }}
                            />
                        </DatePickersWrapper>
                        <StyledTextField
                            label="Disposition"
                            id="disposition"
                            size="small"
                            value={inspectionFilters.disposition != -1 ? inspectionFilters.disposition : ""}
                            onChange={updateFiltersData}
                        />
                        <StyledTextField
                            label="Factory ID"
                            id="factory_id"
                            size="small"
                            value={inspectionFilters.factory_id < 1 ? "" : inspectionFilters.factory_id}
                            onChange={updateFiltersData}
                        />
                        <StyledTextField
                            label="Device ID"
                            id="device_id"
                            size="small"
                            value={inspectionFilters.device_id < 1 ? "" : inspectionFilters.device_id}
                            onChange={updateFiltersData}
                        />
                        <StyledTextField
                            label="Record ID"
                            id="requested_record_id"
                            size="small"
                            value={inspectionFilters.requested_record_id < 1 ? "" : inspectionFilters.requested_record_id}
                            onChange={updateFiltersData}
                        />
                        <StyledTextField
                            label="Job ID"
                            id="job_id"
                            size="small"
                            value={inspectionFilters.job_id < 1 ? "" : inspectionFilters.job_id}
                            onChange={updateFiltersData}
                        />
                    </AccordionDetails>
                </StyledAccordion>
            </StyledContainer>
        </LocalizationProvider>
    );
};

export default FiltersBox;
