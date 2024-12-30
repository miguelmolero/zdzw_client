import { apiRoutes } from "./apiRoutes";
import api from "./axiosConfig";

export async function login(username: string, password: string) {
   try {
      const response = await api.post(apiRoutes.login, { username, password });
      return response.data;
   } catch (error) {
      throw new Error("Invalid Credentials: " + error);
   }
}