import React from "react";
import { DefectsItem } from "../../types/inspection_types";
import {
    DamageViewColumnContainer,
    DamagesTableItemContainer,
    DamagesDataTable,
    DamagesTableHead,
    DamagesTableBody,
    DamagesTableRow,
    DamagesTableCell,
} from "./styles/DamageTablesViewStyles"
import { Typography } from "@mui/material";


interface DamagesTableItemProps {
    table_data: DefectsItem[],
    channel_id?: number,
    gate_id?: number,
}

export const DamagesTableItem: React.FC<DamagesTableItemProps> = ({ table_data, channel_id, gate_id }) => {
    return (
        <DamageViewColumnContainer>
            <Typography sx={{ textDecoration: 'underline' }} align="center">
                Channel {channel_id} - Gate {gate_id}
            </Typography>
            <DamagesTableItemContainer>
                <DamagesDataTable size="small">
                    <DamagesTableHead>
                        <DamagesTableRow>
                            <DamagesTableCell>Name</DamagesTableCell>
                            <DamagesTableCell>Start Index</DamagesTableCell>
                            <DamagesTableCell>End Index</DamagesTableCell>
                            <DamagesTableCell>Start Value</DamagesTableCell>
                            <DamagesTableCell>End Value</DamagesTableCell>
                            <DamagesTableCell>Risk Level</DamagesTableCell>
                        </DamagesTableRow>
                    </DamagesTableHead>
                    <DamagesTableBody>
                        {table_data.map((defect) => (
                            <DamagesTableRow>
                                <DamagesTableCell align="center">{defect.name}</DamagesTableCell>
                                <DamagesTableCell align="center">{defect.start_index}</DamagesTableCell>
                                <DamagesTableCell align="center">{defect.end_index}</DamagesTableCell>
                                <DamagesTableCell align="center">{defect.start_feature_value}</DamagesTableCell>
                                <DamagesTableCell align="center">{defect.end_feature_value}</DamagesTableCell>
                                <DamagesTableCell align="center">{defect.risk_level}</DamagesTableCell>
                            </DamagesTableRow>
                        ))}
                    </DamagesTableBody>
                </DamagesDataTable>
            </DamagesTableItemContainer>
        </DamageViewColumnContainer>
        
    );
}

export default DamagesTableItem;