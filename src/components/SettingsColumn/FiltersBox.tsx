import React, { useState } from "react";
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
    FiltersButton,
} from "../styles/FiltersBoxStyles";
import { InspectionFilters } from "../../types/inspection_types";
import { useDataHandlerContext } from '../../context/DataHandlerContext';
import { useGeneralStateContext } from "../../context/GeneralStateContext";
import { ApplicationType } from "../../types/aplication_types";


const FiltersBox: React.FC = () => {
    const {setFiltersData, getInspectionData} = useDataHandlerContext();
    const {applicationType} = useGeneralStateContext();
    const [fromDate, setFromDate] = useState<Date | null>(null);
    const [toDate, setToDate] = useState<Date | null>(null);

    const applyFilters = () => {
        const filters : InspectionFilters = {
            current_record_id: -1,
            requested_record_id: -1,
            start_date: fromDate ? fromDate.getTime() : -1,
            end_date: toDate ? toDate.getTime() : -1,
            disposition: -1,
            apply_filters: applicationType == ApplicationType.InspectionAnalysis
        };
        setFiltersData(filters);
        getInspectionData("last", filters);
    }

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
                                value={fromDate}
                                onChange={(newValue) => setFromDate(newValue)}
                                slotProps={{ textField: { fullWidth: true, size: 'small' } }}
                            />
                            <DatePicker
                                label="To"
                                value={toDate}
                                onChange={(newValue) => setToDate(newValue)}
                                slotProps={{ textField: { fullWidth: true, size: 'small' } }}
                            />
                        </DatePickersWrapper>
                        <FiltersButton onClick={applyFilters}>
                            Apply Filters
                        </FiltersButton>
                    </AccordionDetails>
                </StyledAccordion>
            </StyledContainer>
        </LocalizationProvider>
    );
};

export default FiltersBox;
