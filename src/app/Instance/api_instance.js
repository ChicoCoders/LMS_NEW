import axios from "axios"; 
import Cookies from "js-cookie";


const token =Cookies.get('jwt');
const axioinstance = axios.create({
  baseURL : 'http://localhost:5164/api/',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': "application/json",
    'timeout' : 1000,
  }, 
  
});

export default axioinstance;    