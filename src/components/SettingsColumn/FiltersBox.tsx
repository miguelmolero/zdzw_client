import React, { useState } from "react";
import {
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { 
    StyledContainer, 
    StyledAccordion, 
    DatePickersWrapper,
    FiltersButton,
    FiltersTitle 
} from "../styles/FiltersBoxStyles";
import { useDataHandlerContext } from '../../context/DataHandlerContext';


const FiltersBox: React.FC = () => {
    const [fromDate, setFromDate] = useState<Date | null>(null);
    const [toDate, setToDate] = useState<Date | null>(null);
    const {setFiltersData, getInspectionData} = useDataHandlerContext();

    const applyFilters = () => {
        const filters = {
            current_record_id: -1,
            requested_record_id: -1,
            start_date: fromDate ? fromDate.getTime() : -1,
            end_date: toDate ? toDate.getTime() : -1,
            disposition: -1,
        };
        setFiltersData(filters);
        getInspectionData("last", filters);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StyledContainer>
                <StyledAccordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <FiltersTitle>Filters</FiltersTitle>
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
