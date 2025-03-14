import { styled, Box, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

export const DefectsTableContainer = styled(Box)({
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
});

export const DefectsDataTable = styled(Table)({
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: '75%',
    width: '90%'
});

export const DefectsDataTableHead = styled(TableHead)({
    alignContent: 'center',
    justifyContent: 'center',
});

export const DefectsDataTableBody = styled(TableBody)({
    alignContent: 'center',
    justifyContent: 'center',
});

export const DefectsDataTableRow = styled(TableRow)({
    alignContent: 'center',
    justifyContent: 'center',
});

export const DefectsDataTableCell = styled(TableCell)({
    alignContent: 'center',
    justifyContent: 'center',
});