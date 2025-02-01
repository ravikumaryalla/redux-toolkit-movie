import axios from "axios";
const movieApi = axios.create({
  baseURL: "http://www.omdbapi.com/temp",
});

export default movieApi;
