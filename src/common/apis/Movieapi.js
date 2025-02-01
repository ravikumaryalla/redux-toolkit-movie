import axios from "axios";
const movieApi = axios.create({
  baseURL: "http://www.omdbapi.com/tempo",
});

export default movieApi;
