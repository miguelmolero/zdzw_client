import api from "./axiosConfig";
//import axios from "axios";

export async function login(username: string, password: string) {
    try {
       const response = await api.post('/login', {username, password})
       return response.data;
    } catch (error) {
       throw new Error('Invalid Credentials: ' + error);
    }



    // const params = new URLSearchParams();
    // params.append('username', username);
    // params.append('password', password);
  
    // const response = await axios.post('http://localhost:8000/login', params, {
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',  // Especifica el tipo de contenido
    //   },
    // });
    // return response.data;
}