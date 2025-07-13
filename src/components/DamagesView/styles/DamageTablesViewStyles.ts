import {styled, Box, Table, TableHead, TableBody, TableRow, TableCell} from '@mui/material';

export const DamageTablesContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
});

export const TablesContainer = styled(Box)({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',
    gridAutoRows: 'auto',
    gap: '5px',
    padding: '5px',
});

export const DamagesTableItemContainer = styled(Box)({
    display: "flex",
    textAlign: "center",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    height: "100%",
    width: "100%",
});

export const DamagesDataTable = styled(Table)({
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: '75%',
    width: '90%'
});

export const DamagesTableHead = styled(TableHead)({
    alignContent: 'center',
    justifyContent: 'center',
});

export const DamagesTableBody = styled(TableBody)({
    alignContent: 'center',
    justifyContent: 'center',
});

export const DamagesTableRow = styled(TableRow)({
    alignContent: 'center',
    justifyContent: 'center',
});

export const DamagesTableCell = styled(TableCell)({
    alignContent: 'center',
    justifyContent: 'center',
});