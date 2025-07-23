import {styled, Box, Table, TableHead, TableBody, TableRow, TableCell} from '@mui/material';

export const TablesContainer = styled(Box)({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',
    gridAutoRows: 'auto',
    gap: '5px',
    padding: '5px',
});

export const DamagesTableItemContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    overflow: 'auto',
    width: '100%',
    height: '100%',
    maxHeight: '400px',
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    '&:hover': {
        backgroundColor: 'rgba(0, 255, 0, 0.2)', // Change color on hover
    },
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