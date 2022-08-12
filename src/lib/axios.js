import Axios from "axios";

const axios = Axios.create({ withCredentials: true, baseURL: "http://localhost:3001" })

export default axios;