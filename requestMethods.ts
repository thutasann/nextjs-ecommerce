import axios from "axios";

const BASE_URL = "https://nodejs-ecom-api.herokuapp.com/klink-ecom/api/v1/";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});