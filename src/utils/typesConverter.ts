/**
 * Convierte un timestamp a una fecha legible.
 * @param {number} timestamp - El timestamp en segundos.
 * @returns {string} - La fecha en formato legible.
 */
export function timestampToDate(timestamp: number): string {
  const date = new Date(timestamp * 1000); // Si está en segundos, se multiplica por 1000
  return date.toLocaleString(); // Puedes personalizar el formato si lo deseas
}

export function timestampToDateTimeYMD(timestamp: number): string {
  const date = new Date(timestamp * 1000); // Si está en segundos, se multiplica por 1000
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Usa formato de 24 horas
  };

  // Usa 'en-CA' para asegurar el formato año/mes/día
  return date.toLocaleString("en-CA", options);
}
