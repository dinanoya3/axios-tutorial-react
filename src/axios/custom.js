import axios from "axios";

// create custom instance
const authFetch = axios.create({
  baseURL: "https://course-api.com",
  headers: {
    Accept: "application/json",
  },
});

export default authFetch;
