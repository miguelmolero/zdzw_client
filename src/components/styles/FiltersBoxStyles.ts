import { styled, Box, Accordion } from "@mui/material";

// Contenedor principal del overlay
export const StyledContainer = styled(Box)({
    "--padding": "16px", // Variable CSS para el espaciado interno
    display: "flex", // Contenedor flexible
    flexDirection: "column", // Apila los elementos verticalmente
    width: "calc(95% - var(--padding) * 2)", // Ancho del contenedor
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Fondo semitransparente
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Sombra para dar profundidad
    borderRadius: "8px", // Bordes redondeados
    padding: "var(--padding)", // Espaciado interno
    alignSelf: "center", // Centra el contenedor horizontalmente
    //zIndex: 1000, // Asegura que esté encima de otros elementos
});

// Estilo personalizado para los Accordions
export const StyledAccordion = styled(Accordion)({
    marginBottom: "8px", // Espaciado entre secciones
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
    flexDirection: "row",
    gap: "16px", // Espaciado entre los inputs
    marginBottom: "16px", // Espaciado inferior
});
