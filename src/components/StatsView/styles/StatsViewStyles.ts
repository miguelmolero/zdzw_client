import { styled, Box } from "@mui/material";

export const StatsContainer = styled(Box)({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    height: '100%',
});

export const StatsItem = styled(Box)({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    border: '1px solid #ccc',
    gap: '16px',
    padding: '16px',
});

export const StatsDataItem = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
});

export const PieChartContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
});