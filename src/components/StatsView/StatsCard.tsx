import React from "react";
import { StatsItem } from "./styles/StatsViewStyles";
import StatsData from "./StatsData";
import StatsPieChart from "./StatsPieChart";

const StatsCard : React.FC = () => {

    return (
        <StatsItem>
            <StatsData />
            <StatsPieChart />
        </StatsItem>
    )
};

export default StatsCard;