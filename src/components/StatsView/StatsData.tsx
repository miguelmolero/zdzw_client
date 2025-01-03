import React from "react";
import { StatsDataItem } from "./styles/StatsViewStyles";

const StatsData : React.FC = () => {

    return (
        <StatsDataItem>
            <span>Factory Name</span>
            <span>Factory ID</span>
            <span>All | 1000 | 100%</span>
            <span>Pass | 900 | 90%</span>
            <span>Fail | 90 | 9%</span>
            <span>Invalid | 10 | 1%</span>
        </StatsDataItem>
    )
};

export default StatsData;