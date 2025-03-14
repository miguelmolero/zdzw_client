import React from "react";
import {
    DefectsTableContainer,
    DefectsDataTable,
    DefectsDataTableHead,
    DefectsDataTableBody,
    DefectsDataTableRow,
    DefectsDataTableCell,
} from "./styles/DefectsTableStyles";

const DefectsTable: React.FC = () => {
    return (
        <DefectsTableContainer>
            <DefectsDataTable size="small">
                <DefectsDataTableHead>
                    
                </DefectsDataTableHead>
            </DefectsDataTable>
        </DefectsTableContainer>
    )
};

export default DefectsTable;