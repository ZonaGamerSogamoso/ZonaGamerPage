
export const options = {
  method: 'GET',
  url: 'https://mmo-games.p.rapidapi.com/games',
  headers: {
    'X-RapidAPI-Key': '6cfdb9b605msh2cfb3881b475307p1f03b2jsnb7cba1b523cd',
    'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
  }
};




// import axios from "axios";
// // import { getEnvVariables } from "../helpers";

// // const { VITE_API_URL } = getEnvVariables();

// const mmoApi = axios.create({
//   baseURL: 'https://mmo-games.p.rapidapi.com',
// });

// mmoApi.interceptors.request.use((config) => {
//   config.headers = {
//     'X-RapidAPI-Key': '6cfdb9b605msh2cfb3881b475307p1f03b2jsnb7cba1b523cd',
//     'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
//   };
//   return config;
// });

// export default mmoApi;