// src/styles/InspectionVisualizatorStyles.ts
export const inspectionStyles = () => ({
  root: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",

  },
  mainContent: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    bgcolor: "#f4f4f4", // Fondo claro para la página
  },
  selectorContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  formControl: {
    minWidth: 200,
    bgcolor: "#fff", // Fondo blanco para el selector
  },
  canvasContainer: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #ccc",
    backgroundColor: "#fff", // Fondo blanco para el canvas
    height: "400px", // Tamaño del área de gráfico
  },
});
