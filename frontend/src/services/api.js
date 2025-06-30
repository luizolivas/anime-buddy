import axios from "axios";

const jikanApi = axios.create({
    baseURL: "https://api.jikan.moe/v4",
    timeout: 10000
})

export const getTopAnimes = async () => {
    try{
        const response = await jikanApi.get("/top/anime?limit=10")
        return response.data.data;
    } catch (error) {
        return [];
    }
};