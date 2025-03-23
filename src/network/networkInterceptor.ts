import axios from "axios";


const api = axios.create({
    baseURL: 'https://dummyjson.com/', // Replace with your API URL
    timeout: 10000, // Optional timeout
  });

api.interceptors.request.use(
    (config) =>{
        return config;
    }
)


api.interceptors.response.use(
    response => {
        if(response.status <= 300){
          return response.data;
        }
        else{
          console.log(response.statusText)
        }
        
    }
  )

export default api;