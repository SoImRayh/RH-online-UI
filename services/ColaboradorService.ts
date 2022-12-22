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
        return axios.post(`${API_BASE_URL}`, colaborador)
    }

    getAll(){
        return axios.get(`${API_BASE_URL}/all`)
    }

    delete(id: number){
        return axios.delete(`${API_BASE_URL}/${id}`)
    }


    getOne(id : number){
        return axios.get(`${API_BASE_URL}/${id}`)
    }

    update(id: number, colaborador: Colaborador){
        return axios.put(`${API_BASE_URL}/${id}`, colaborador)
    }
}

export default new ColaboradorService()