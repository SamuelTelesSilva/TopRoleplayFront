import axios from "axios";

export default axios.create({
  baseURL: "https://www.api.toproleplay.com", 
  headers: {
    "Content-type": "application/json"
  }
});
 
//     http://localhost:8080
// ou  http://server40.integrator.com.br:6503