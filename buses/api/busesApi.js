import axios from 'axios'

const busesApi = axios.create({
    baseURL: "http://localhost:8000/api"
})

export default busesApi