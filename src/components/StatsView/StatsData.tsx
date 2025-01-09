import React from "react";
import {StatsData} from "../../types/statistics_types";
import { 
    StatsDataItem,
    StatsDataTable,
    StatsTableHead,
    StatsTableBody,
    StatsTableRow,
    StatsTableCell,
} from "./styles/StatsViewStyles";

interface StatsInfoDataProps {
    data: StatsData;
}

const StatsInfoData : React.FC<StatsInfoDataProps> = ({data}) => {

    return (
        <StatsDataItem>
            <StatsDataTable size="small">
                <StatsTableHead>
                    <StatsTableRow>
                        <StatsTableCell></StatsTableCell>
                        <StatsTableCell>Count</StatsTableCell>
                        <StatsTableCell>Rate(%)</StatsTableCell>
                    </StatsTableRow>
                </StatsTableHead>
                <StatsTableBody>
                    <StatsTableRow>
                        <StatsTableCell align="center">Pass</StatsTableCell>
                        <StatsTableCell align="center">{data.pass_count}</StatsTableCell>
                        <StatsTableCell align="center">{data.pass_rate.toFixed(2)}</StatsTableCell>
                    </StatsTableRow>
                    <StatsTableRow>
                        <StatsTableCell align="center">Fail</StatsTableCell>
                        <StatsTableCell align="center">{data.fail_count}</StatsTableCell>
                        <StatsTableCell align="center">{data.fail_rate.toFixed(2)}</StatsTableCell>
                    </StatsTableRow>
                    <StatsTableRow>
                        <StatsTableCell align="center">Invalid</StatsTableCell>
                        <StatsTableCell align="center">{data.invalid_count}</StatsTableCell>
                        <StatsTableCell align="center">{data.invalid_rate.toFixed(2)}</StatsTableCell>
                    </StatsTableRow>
                    <StatsTableRow>
                        <StatsTableCell align="center">Total</StatsTableCell>
                        <StatsTableCell align="center">{data.total_count}</StatsTableCell>
                        <StatsTableCell align="center">{Math.round(data.pass_rate + data.fail_rate + data.invalid_rate)}</StatsTableCell>
                    </StatsTableRow>
                </StatsTableBody>
            </StatsDataTable>
        </StatsDataItem>
    )
};

export default StatsInfoData;