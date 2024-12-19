// src/components/EnhancedChartStyles.ts
import { styled, Box } from "@mui/material";

export const SCcontainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "100%",
    height: "100%",
    border: "2px solid #a5d6a7", // Marco general del recuadro
    backgroundColor: "#fff", // Fondo blanco
});

export const LabelContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',  // Espacio entre el label y el gráfico
    fontSize: '1.2rem',    // Tamaño del texto del label
    fontWeight: 'bold',    // Texto en negrita
});

export const RightToolbarContainer = styled(Box)({
    display: "flex",
    height: "100%",
    width: "50px", // Ancho del marco derecho
    backgroundColor: "#a5d6a7", // Color del marco derecho
    justifyContent: "center",
    flexShrink: 0
});

export const RowContainer = styled(Box)({
    display: "flex",
    flexDirection: "row",
    width: "100%", // Ancho del gráfico menos el ancho del marco derecho
    height: "100%",
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 0,
});

export const ColumnContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
});

export const ChartCanvasContainer = styled(Box)({
    display: "flex",
    width: "calc(100% - 50px)", // Ancho del gráfico
    height: "100%", // Altura del gráfico
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 0,
});
