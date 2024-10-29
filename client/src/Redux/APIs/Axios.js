import axios from 'axios'

const Axios = axios.create({
    baseURL: "https://realestate-beta-seven.vercel.app/api",
})

export default Axios
