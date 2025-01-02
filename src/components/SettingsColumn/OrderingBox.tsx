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

const OrderingBox: React.FC = () => {
    const { orderBy, orderDirection, setOrderBy, setOrderDirection } = useDataHandlerContext();

    return (
        <StyledContainer>
            <StyledAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="body2">Order By</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl fullWidth size="small">
                        <Typography variant="caption">Type</Typography>
                        <Select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
                            <MenuItem value="date">Date</MenuItem>
                            <MenuItem value="pass">Pass Count</MenuItem>
                            <MenuItem value="fail">Fails Count</MenuItem>
                            <MenuItem value="invalid">Invalids Count</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth size="small">
                        <Typography variant="caption">Direction</Typography>
                        <Select value={orderDirection} onChange={(e) => setOrderDirection(e.target.value)}>
                            <MenuItem value="asc">Ascending</MenuItem>
                            <MenuItem value="desc">Descending</MenuItem>
                        </Select>
                    </FormControl>
                </AccordionDetails>
            </StyledAccordion>
        </StyledContainer>
    );
};

export default OrderingBox;
