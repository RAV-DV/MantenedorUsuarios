import axios from "axios";
 
  const baseURL = 'http://localhost:8001'

const llamadaApi = axios.create({
       baseURL, 
})

export{
    llamadaApi,   
}