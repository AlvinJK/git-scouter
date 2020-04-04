import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://api.github.com",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/vnd.github.v3+json",
  },
});

export default fetcher;
