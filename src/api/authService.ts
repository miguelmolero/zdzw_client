import api from "./axiosConfig";
//import axios from "axios";

export async function login(username: string, password: string) {
   try {
      const response = await api.post("/login", { username, password });
      return response.data;
   } catch (error) {
      throw new Error("Invalid Credentials: " + error);
   }
}