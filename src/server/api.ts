import axios from "axios";

export const api = axios.create({
    baseURL: "http://172.100.32.227:3333"
})