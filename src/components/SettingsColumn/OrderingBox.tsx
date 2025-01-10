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
import { 
    OrderDirection, 
    OrderType,
    OrderFilters
} from "../../types/inspection_types";
import { OrderDirectionLabels, OrderLabels, useDataHandlerContext } from "../../context/DataHandlerContext";

const OrderingBox: React.FC = () => {
    const { orderFilters, setOrderFilters } = useDataHandlerContext();

    const updateOrderFilters = (key: keyof OrderFilters, value: OrderType | OrderDirection) => {
        setOrderFilters({
            ...orderFilters,
            [key]: value,
        });
    }

    return (
        <StyledContainer>
            <StyledAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="body2">Order By</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl fullWidth size="small">
                        <Typography variant="caption">Type</Typography>
                        <Select 
                            value={orderFilters.order_type} 
                            onChange={(e) => updateOrderFilters("order_type", e.target.value as OrderType)}
                        >
                            {Object.values(OrderType).map((type) => (
                                <MenuItem key={type} value={type}>
                                    {OrderLabels[type]}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth size="small">
                        <Typography variant="caption">Direction</Typography>
                        <Select 
                            value={orderFilters.order_direction} 
                            onChange={(e) => updateOrderFilters("order_direction", e.target.value as OrderDirection)}
                        >
                            {Object.values(OrderDirection).map((type) => (
                                <MenuItem key={type} value={type}>
                                    {OrderDirectionLabels[type]}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </AccordionDetails>
            </StyledAccordion>
        </StyledContainer>
    );
};

export default OrderingBox;
