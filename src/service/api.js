import axios from "axios";

export default axios.create({
  baseURL: "https://api-toproleplay.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});

// http://localhost:8080