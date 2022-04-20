import axios from "axios"

export const api = axios.create({
    baseURL: "https://apimod4-infoshark.herokuapp.com"
})
