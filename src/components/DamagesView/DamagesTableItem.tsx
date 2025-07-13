import React from "react";
import { DefectsItem } from "../../types/inspection_types";
import {
    DamagesTableItemContainer,
    DamagesDataTable,
    DamagesTableHead,
    DamagesTableBody,
    DamagesTableRow,
    DamagesTableCell,
} from "./styles/DamageTablesViewStyles"

interface DamagesTableItemProps {
    table_data: DefectsItem[];
}

export const DamagesTableItem: React.FC<DamagesTableItemProps> = ({ table_data }) => {
    return (
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
                    {table_data.map((defect, index) => (
                        <DamagesTableRow key={index}>
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
    );
}

export default DamagesTableItem;