import { styled, Box, Typography } from "@mui/material";

export const SCcontainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    boxSizing: 'border-box',
    borderLeft: '1px solid #ccc',
});

export const LabelContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: '15px 50px 0px 30px;',
    fontSize: '1.2rem',
    fontWeight: 'bold',
});

export const StyledTypography = styled(Typography)<{ justifyContent?: "flex-start" | "center" | "flex-end" }>(
    ({ justifyContent = "flex-start" }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: justifyContent,
        alignItems: justifyContent,
        fontSize: "0.9rem",
        lineHeight: "1.3rem",
    })
);

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
