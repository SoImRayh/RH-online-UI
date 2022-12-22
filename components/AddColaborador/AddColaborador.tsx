import { useState} from "react";
import ColaboradorService from "../../services/ColaboradorService";
import {useRouter} from "next/router";


export function AddColaborador(){

    const route = useRouter()

    const [colaborador, setcolaborador] = useState({
        id:"",
        firstName:"",
        lastName:"",
        emailID:""
    })

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setcolaborador({...colaborador,[event.target.name]: value})
    }

    const saveColaborador = (event: any) => {
        event.preventDefault()
        ColaboradorService.saveColaborador(colaborador).then( response => {
            if(response.status === 200){
                route.push('/').then( a => {
                    console.log(a)
                })
            }
        }).catch( err => {
            console.error(err)
        })
    };


    const reset = (e : any) => {
        setcolaborador({
            id:"",
            firstName:"",
            lastName:"",
            emailID:""
        })
    }

    return (
    <div className="flex max-w-2xl mx-auto shadow border-b-2">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <p className="text-white font-semibold">Novo colaborador</p>
            </div>
            <div className="items-center jusstify-center h-14 w-full my-4">
                <label htmlFor="" className="block text-white font-semibold text-sm font-normal border-b-2">
                    Primeiro Nome
                </label>
                <input
                    type="text"
                    className="h-10 w-96 border mt-2 px-2 py-2"
                    name="firstName"
                    value={colaborador.firstName}
                    onChange={event => handleChange(event)}
                />
            </div>
            <div className="items-center jusstify-center h-14 w-full my-4">
                <label htmlFor="" className="block text-white font-semibold text-sm font-normal border-b-2">
                    Último nome
                </label>
                <input type="text"
                       className="h-10 w-96 border mt-2 px-2 py-2"
                       name="lastName"
                       value={colaborador.lastName}
                       onChange={event => handleChange(event)}
                />
            </div>
            <div className="items-center jusstify-center h-14 w-full my-4">
                <label htmlFor="" className="block text-white font-semibold text-sm font-normal border-b-2">
                    Email
                </label>
                <input type="email"
                       className="h-10 w-96 border mt-2 px-2 py-2"
                       name="emailID"
                       value={colaborador.emailID}
                       onChange={event => handleChange(event)}
                />
            </div>
            <div className="items-center jusstify-center h-14 w-full my-4 space-x-4 pt-4">
                <button className="rounded text-white fontsemibold bg-green-400 py-2 px-6 hover:bg-green-600"
                onClick={saveColaborador}>
                    Salvar
                </button>
                <button
                    onClick={() => setcolaborador({
                        id:"",
                        firstName:"",
                        lastName:"",
                        emailID:""
                    })}
                    className="rounded text-white fontsemibold bg-yellow-300 py-2 px-6 hover:bg-yellow-500">
                    limpar
                </button>
            </div>
        </div>
    </div>
  );
}
