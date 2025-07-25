import {styled, Box, Table, TableHead, TableBody, TableRow, TableCell} from '@mui/material';

export const TablesContainer = styled(Box)({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',
    gridAutoRows: 'auto',
    gap: '5px',
    padding: '5px',
});

export const DamageViewColumnContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    '&:hover': {
        backgroundColor: '#ccffcc'
    },
    '&:hover thead': {
        backgroundColor: '#ccffcc'
    },
});

export const DamagesTableItemContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflow: 'auto',
    width: '100%',
    height: '100%',
    maxHeight: '400px',
});

export const DamagesDataTable = styled(Table)({
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    tableLayout: 'auto'
});

export const DamagesTableHead = styled(TableHead)({
    position: 'sticky',
    top: 0,
    backgroundColor: 'white', // clave
    zIndex: 2,
    alignContent: 'center',
    justifyContent: 'center',
});

export const DamagesTableBody = styled(TableBody)({
    alignContent: 'center',
    justifyContent: 'center',
});

export const DamagesTableRow = styled(TableRow)({
    verticalAlign: 'top',
    alignContent: 'center',
    justifyContent: 'center',
});

export const DamagesTableCell = styled(TableCell)({
    alignContent: 'center',
    justifyContent: 'center',
});