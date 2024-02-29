import axios from "axios";


// addstring to heroku when you upload backend to it
const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? ""
      : "http://localhost:8000",
});

export default api;