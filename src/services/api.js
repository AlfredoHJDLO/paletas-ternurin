import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // Cambia si usas otro puerto
});

export const obtenerPaletas = () => api.get("/paletas/");
