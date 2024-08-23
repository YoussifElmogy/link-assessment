import axios from "axios";
import apiConfig from "./api.config";

const api = axios.create({
  baseURL: apiConfig.baseURL,
});

export default api;
