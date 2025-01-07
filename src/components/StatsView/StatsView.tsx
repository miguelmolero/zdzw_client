import React from "react";
import { ChartData } from "chart.js";
import { StatsContainer } from "./styles/StatsViewStyles";
import StatsCard from "./StatsCard";

interface StatsViewProps {
    data: ChartData;
}

const StatsView : React.FC<StatsViewProps> = ({data}) => {

    return (
        <StatsContainer>
            {/* {} */}
            <StatsCard data={data}/>
            <StatsCard data={data}/>
            <StatsCard data={data}/>
            <StatsCard data={data}/>
            <StatsCard data={data}/>
        </StatsContainer>
    )
};

export default StatsView;