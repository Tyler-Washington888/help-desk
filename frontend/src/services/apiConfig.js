import axios from "axios";


// addstring to heroku when you upload backend to it
const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://help-desk-2024-c0fbdd12049a.herokuapp.com/"
      : "http://localhost:8000",
});

export default api;