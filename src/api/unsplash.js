import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 0gt6gsup5V8CcF4iB8x7VhtLRFXfROCFadB4z9AgBl8",
  },
});
