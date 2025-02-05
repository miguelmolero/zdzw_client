import { styled, Box, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

export const StatsColumnContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
});

export const StatsContainer = styled(Box)({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',
    gridAutoRows: 'auto',
    gap: '5px',
    padding: '5px',
});

export const StatsItemColumn = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: "16px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    "&:hover": {
        backgroundColor: "rgba(0, 255, 0, 0.2)", // Cambio de color al pasar el ratón
    },
});

export const StatsItem = styled(Box)({
    display: "flex",
    textAlign: "center",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    height: "100%",
    width: "100%",
});

export const PieChartContainer = styled(Box)({
    width: '50%',
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
});

export const StatsDataItem = styled(Box)({
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
});

export const StatsDataTable = styled(Table)({
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: '75%',
    width: '90%'
});

export const StatsTableHead = styled(TableHead)({
    alignContent: 'center',
    justifyContent: 'center',
});

export const StatsTableBody = styled(TableBody)({
    alignContent: 'center',
    justifyContent: 'center',
});

export const StatsTableRow = styled(TableRow)({
    alignContent: 'center',
    justifyContent: 'center',
});

export const StatsTableCell = styled(TableCell)({
    alignContent: 'center',
    justifyContent: 'center',
});