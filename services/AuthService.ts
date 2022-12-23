import axios from "axios";
import { LoginModel } from "../model/interfaces/LoginModel";

const API_BASE_URL = 'http://localhost:8080/api/auth'
class AuthService{
    login(user : LoginModel){
        return axios.post(`${API_BASE_URL}/signin`,user)
    }
}

export default new AuthService()