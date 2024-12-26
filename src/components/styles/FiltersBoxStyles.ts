import { styled, Box, Accordion, Button, Typography } from "@mui/material";

// Contenedor principal del overlay
export const StyledContainer = styled(Box)({
    display: "flex", // Contenedor flexible
    flexDirection: "column", // Apila los elementos verticalmente
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Fondo semitransparente
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Sombra para dar profundidad
    alignSelf: "center", // Centra el contenedor horizontalmente
    width: "100%", // Ancho completo
});

export const FiltersTitle = styled(Typography)({
    textAlign: "left",
    flexGrow: 1,
});

// Estilo personalizado para los Accordions
export const StyledAccordion = styled(Accordion)({
    "&:last-child": {
        marginBottom: 0, // El último acordeón no tiene margen inferior
    },
    border: "1px solid #ccc", // Borde para separar visualmente las secciones
    borderRadius: "4px", // Bordes redondeados
    backgroundColor: "#fff", // Fondo blanco para los Accordions
    boxShadow: "none", // Sin sombra adicional para mantener un diseño limpio
    // padding: "16px", // Espaciado interno
});

// Contenedor de los DatePickers
export const DatePickersWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "16px", // Espaciado entre los inputs
    marginBottom: "16px", // Espaciado inferior
});

export const FiltersButton = styled(Button)({
    variant: "contained",
    color: "black",
    textTransform: "none",
    backgroundColor: "#a5d6a7",
    "&:hover": {
        backgroundColor: "#8bcf8a", // Verde más oscuro
    },
});
