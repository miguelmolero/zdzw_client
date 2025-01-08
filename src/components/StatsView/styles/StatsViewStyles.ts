import { styled, Box, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

export const StatsContainer = styled(Box)({
    // flex: 1,
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    // alignSelf: 'flex-start',
    // height: '100%',
    // width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left',
    alignContent: 'flex-start',
    gap: '5px',
    height: '100%',
    width: '100%',
    padding: '5px',
});

export const StatsItem = styled(Box)(({ columns }: { columns: number }) => ({
    flex: `0 0 calc(${100 / columns}% - 16px)`,
    minWidth: "150px", // Tamaño mínimo para evitar cajas pequeñas
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    padding: "16px",
    display: "flex",
    textAlign: "center",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    height: "35vh",
    width: "100%",
    "&:hover": {
        backgroundColor: "rgba(0, 255, 0, 0.2)", // Cambio de color al pasar el ratón
    },
}));

// export const StatsItem = styled(Box)({
//     display: 'flex',
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     border: '1px solid #ccc',
//     gap: '16px',
//     padding: '16px',
//     height: '30vh',
//     width: '40%',

// });

export const PieChartContainer = styled(Box)({
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: '100%',
    // height: '100%',
    display: 'flex',
    width: '60%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
});

export const StatsDataItem = styled(Box)({
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // height: '40%',
    // width: '40%',
});

export const StatsDataTable = styled(Table)({
    //display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: '100%',
    width: '100%',
});

export const StatsTableHead = styled(TableHead)({
    //display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
});

export const StatsTableBody = styled(TableBody)({
    //display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
});

export const StatsTableRow = styled(TableRow)({
    //display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
});

export const StatsTableCell = styled(TableCell)({
    //display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
});