import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmU5ZTkyYTRmMzVmMmI2NmEwOWQ2OGRiMTE2ZDk4NyIsIm5iZiI6MTczMTk0NTkzMC4zNzM1OTkzLCJzdWIiOiI2NzM5YjI5ZGQyODA0M2U5NzZlMzk5ZjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Dz0UlSNZt4hYqQG18IJnT9lYBZpDo7a9PkLaoo_GSe8"
    }
})

export default instance;