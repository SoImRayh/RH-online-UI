import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/api/v1/colaboradores'

export interface Colaborador{
    id: number
    firstName: string
    lastName: string
    emailID: string
}
class ColaboradorService{
    saveColaborador(colaborador: { firstName: string; lastName: string; emailID: string; id: string }){
        return axios.post(`${API_BASE_URL}`, colaborador,{headers:{Authorization:'Bearer '+localStorage.getItem("token")}})
    }

    getAll(){
        return axios.get(`${API_BASE_URL}/all`,{headers:{Authorization:'Bearer '+localStorage.getItem("token")}})
    }

    delete(id: number){
        return axios.delete(`${API_BASE_URL}/${id}`,{headers:{Authorization:'Bearer '+localStorage.getItem("token")}})
    }


    getOne(id : number){
        return axios.get(`${API_BASE_URL}/${id}`,{headers:{Authorization:'Bearer '+localStorage.getItem("token")}})
    }

    update(id: number, colaborador: Colaborador){
        return axios.put(`${API_BASE_URL}/${id}`, colaborador,{headers:{Authorization:'Bearer '+localStorage.getItem("token")}})
    }
}

export default new ColaboradorService()