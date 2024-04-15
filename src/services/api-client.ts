import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: '604e73ef84cf4780abfe8db9de237a2d'
    }
})