import axios from "axios";

export const API_URL = axios.create({
    baseURL: `https://api.themoviedb.org/3`
})

export const Api_Key = `f747e161e06350986b9539adff7f92b5`