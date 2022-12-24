import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useState} from "react";
import {LoginModel} from "../../model/interfaces/LoginModel";
import AuthService from "../../services/AuthService";

interface LoginProps {

}

export function Login(props: LoginProps) {
    const router = useRouter()
    const [user, setuser] = useState<LoginModel>({
        username: '', password: ''
    })


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const value = e.target.value
        setuser({...user, [e.target.name]: value})
    }

    const login = () => {

        AuthService.login(user).then(response =>{
            if (response.status === 200){
                localStorage.setItem("token", response.data.token)
                router.push('/colaboradores/list')
            }
        }).catch((err: AxiosError) => {
            if (err.response && err.response.status === 401){
                alert("BAD credential")
            }
        })
    }
  return (
      <div className="flex max-w-2xl mx-auto shadow border-b-2">
          <div className="px-8 py-8">
              <div className="font-thin text-2xl tracking-wider">
                  <p className="text-white font-semibold">fazer login</p>
              </div>
              <div className="items-center jusstify-center h-14 w-full my-4">
                  <label htmlFor="" className="block text-white font-semibold text-sm font-normal border-b-2">
                      username
                  </label>
                  <input
                      type="text"
                      className="h-10 w-96 border mt-2 px-2 py-2"
                      name="username"
                      value={user.username}
                      onChange={event => handleChange(event)}
                  />
              </div>
              <div className="items-center jusstify-center h-14 w-full my-4">
                  <label htmlFor="" className="block text-white font-semibold text-sm font-normal border-b-2">
                      Último nome
                  </label>
                  <input type="text"
                         className="h-10 w-96 border mt-2 px-2 py-2"
                         name="password"
                         value={user.password}
                         onChange={event => handleChange(event)}
                  />
              </div>

              <div className="items-center jusstify-center h-14 w-full my-4 space-x-4 pt-4">
                  <button className="rounded text-white fontsemibold bg-green-400 py-2 px-6 hover:bg-green-600"
                          onClick={e => login}>
                      Salvar
                  </button>

              </div>
          </div>
      </div>
  );
}
