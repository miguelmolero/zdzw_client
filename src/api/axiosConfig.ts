import axios from 'axios';
import { apiRoutes } from './apiRoutes';
import CONFIG from '../config/config'

const isProduction = process.env.NODE_ENV === 'production';

const api = axios.create({
  baseURL: isProduction ? CONFIG.VITE_API_PROD_URL : CONFIG.VITE_API_URL  // Asegúrate de que la URL del backend sea correcta
});

// Interceptor para añadir el token en el encabezado de autorización
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token && config.url !== apiRoutes.login) {  // Excluye el login de incluir el token
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    config.headers['Cache-Control'] = 'no-cache';  // Evita el almacenamiento en caché
    config.headers['Pragma'] = 'no-cache';  // Evita el almacenamiento en caché
    config.headers['Expires'] = '0';  // Evita el almacenamiento en caché
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
