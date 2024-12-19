import { styled, Box } from '@mui/material';

export const SideMenuDrawer = styled(Box, {
    shouldForwardProp: (prop) => prop !== "open", // Excluye `open` como prop nativa del DOM
})<{ open: boolean }>(({ open }) => ({
    position: "absolute",
    top: 0,
    left: open ? "100%" : "0", // Cambia el ancho dinámicamente según el estado
    width: "250px",
    height: "100%",
    backgroundColor: "#f5f5f5",
    border: '2px solid #a5d6a7',
    transition: "transform 0.3s ease-in-out", // Animación suave para abrir/cerrar
    transform: open ? "translateX(0)" : "translateX(-100%)", // Controla la visibilidad
    overflow: "hidden",
    zIndex: open ? 1300 : -1300, // Asegura que el menú esté por encima de todo
}));
