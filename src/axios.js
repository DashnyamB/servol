import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
});
export const instanceFile = axios.create({
  baseURL: "http://localhost:5000",
});

// Зураг унших линк
export const imageUrl = "http://localhost:5000/upload";

instance.defaults.withCredentials = true;
instanceFile.defaults.withCredentials = true;
