import { styled, Box } from "@mui/material";

export const SCcontainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff", // Fondo blanco
    justifyContent: "flex-start",
    alignItems: "flex-start",
    boxSizing: 'border-box',
    borderLeft: '1px solid #ccc',
});

export const LabelContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '25px 0 10px 0',  // Espacio entre el label y el gráfico
    fontSize: '1.2rem',    // Tamaño del texto del label
    fontWeight: 'bold',    // Texto en negrita
});

export const GraphContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
});

export const ChartContainer = styled(Box)({
    display: "flex",
    flexDirection: "row",
    width: "100%", // Ancho del gráfico menos el ancho del marco derecho
    height: "100%",
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 0,
});

export const ChartCanvasContainer = styled(Box)({
    display: "flex",
    width: "calc(100% - 50px)", // Ancho del gráfico
    height: "100%", // Altura del gráfico
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 0,
});
