import React from "react";
import { StatsContainer } from "./styles/StatsViewStyles";
import StatsCard from "./StatsCard";

const StatsView : React.FC = () => {

    return (
        <StatsContainer>
            <StatsCard />
            <StatsCard />
            <StatsCard />
            <StatsCard />
            <StatsCard />
            <StatsCard />
            <StatsCard />
            <StatsCard />
        </StatsContainer>
    )
};

export default StatsView;