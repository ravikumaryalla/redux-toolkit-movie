import axios from "axios";
const movieApi = axios.create({
  baseURL: "http://www.omdbapi.com/temnnnnpo",
});

export default movieApi;
