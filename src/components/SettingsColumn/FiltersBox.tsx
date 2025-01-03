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
    const { filtersData, setFiltersData } = useDataHandlerContext();

    const updateFiltersData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFiltersData({
            ...filtersData,
            [id]: parseInt(value, 10) || value || -1, // Parse as number or fallback to raw value
        });
    };

    const updateDateFilters = (key: keyof InspectionFilters, date: Date | null) => {
        setFiltersData({
            ...filtersData,
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
                                value={filtersData.start_date && filtersData.start_date != -1 ? new Date(filtersData.start_date) : null}
                                onChange={(newValue) => updateDateFilters("start_date", newValue)}
                                slotProps={{ textField: { fullWidth: true, size: "small" } }}
                            />
                            <DatePicker
                                label="To"
                                value={filtersData.end_date && filtersData.end_date != -1 ? new Date(filtersData.end_date) : null}
                                onChange={(newValue) => updateDateFilters("end_date", newValue)}
                                slotProps={{ textField: { fullWidth: true, size: "small" } }}
                            />
                        </DatePickersWrapper>
                        <StyledTextField
                            label="Disposition"
                            id="disposition"
                            size="small"
                            value={filtersData.disposition != -1 ? filtersData.disposition : ""}
                            onChange={updateFiltersData}
                        />
                        <StyledTextField
                            label="Factory ID"
                            id="factory_id"
                            size="small"
                            value={filtersData.factory_id < 1 ? "" : filtersData.factory_id}
                            onChange={updateFiltersData}
                        />
                        <StyledTextField
                            label="Device ID"
                            id="device_id"
                            size="small"
                            value={filtersData.device_id < 1 ? "" : filtersData.device_id}
                            onChange={updateFiltersData}
                        />
                        <StyledTextField
                            label="Record ID"
                            id="requested_record_id"
                            size="small"
                            value={filtersData.requested_record_id < 1 ? "" : filtersData.requested_record_id}
                            onChange={updateFiltersData}
                        />
                        <StyledTextField
                            label="Job ID"
                            id="job_id"
                            size="small"
                            value={filtersData.job_id < 1 ? "" : filtersData.job_id}
                            onChange={updateFiltersData}
                        />
                    </AccordionDetails>
                </StyledAccordion>
            </StyledContainer>
        </LocalizationProvider>
    );
};

export default FiltersBox;
