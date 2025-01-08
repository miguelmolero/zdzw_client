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
            <StatsDataTable>
                <StatsTableHead>
                    <StatsTableRow>
                        <StatsTableCell></StatsTableCell>
                        <StatsTableCell>Count</StatsTableCell>
                        <StatsTableCell>Rate(%)</StatsTableCell>
                    </StatsTableRow>
                </StatsTableHead>
                <StatsTableBody>
                    <StatsTableRow>
                        <StatsTableCell>Pass</StatsTableCell>
                        <StatsTableCell>{data.pass_count}</StatsTableCell>
                        <StatsTableCell>{data.pass_rate.toFixed(2)}</StatsTableCell>
                    </StatsTableRow>
                    <StatsTableRow>
                        <StatsTableCell>Fail</StatsTableCell>
                        <StatsTableCell>{data.fail_count}</StatsTableCell>
                        <StatsTableCell>{data.fail_rate.toFixed(2)}</StatsTableCell>
                    </StatsTableRow>
                    <StatsTableRow>
                        <StatsTableCell>Invalid</StatsTableCell>
                        <StatsTableCell>{data.invalid_count}</StatsTableCell>
                        <StatsTableCell>{data.invalid_rate.toFixed(2)}</StatsTableCell>
                    </StatsTableRow>
                    <StatsTableRow>
                        <StatsTableCell>Total</StatsTableCell>
                        <StatsTableCell>{data.total_count}</StatsTableCell>
                        <StatsTableCell>{Math.round(data.pass_rate + data.fail_rate + data.invalid_rate)}</StatsTableCell>
                    </StatsTableRow>
                </StatsTableBody>
            </StatsDataTable>
        </StatsDataItem>
    )
};

export default StatsInfoData;