import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import ColaboradorService, {Colaborador} from "../../services/ColaboradorService";
import {useParams} from "react-router";


export function UpdateColaborador(){
    const route = useRouter()

    const id = route.query.id
    const [colaborador, setcolaborador] = useState<Colaborador>({
        id:NaN,
        firstName:"",
        lastName:"",
        emailID:""
    })

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setcolaborador({...colaborador,[event.target.name]: value})
    }

    const updateColaborador= (e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        if (colaborador){
            ColaboradorService.update(colaborador.id, colaborador).then( response => {
                if (response.status === 200)
                    route.push("/colaboradores/list")
                }
            )
        }
    }

    useEffect(() => {
        ColaboradorService.getOne(parseInt(route.query.id as string)).then( response => {
            if (response.status === 200){
                setcolaborador(response.data)
            }
        })
    },[route.query.id])


    const reset = (e : any) => {
        setcolaborador({
            id:NaN,
            firstName:"",
            lastName:"",
            emailID:""
        })
    }

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b-2">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider border-b-2">
                    <p className="text-white font-semibold">Editar colaborador</p>
                </div>
                <div className="items-center jusstify-center h-14 w-full my-4">
                    <label htmlFor="" className="block text-white font-semibold text-sm font-normal">
                        Primeiro Nome
                    </label>
                    <input
                        type="text"
                        className="h-10 w-96 border mt-2 px-2 py-2 focus:bg-gray-100"
                        name="firstName"
                        value={colaborador.firstName}
                        onChange={event => handleChange(event)}
                    />
                </div>
                <div className="items-center jusstify-center h-14 w-full my-4">
                    <label htmlFor="" className="block text-white font-semibold text-sm font-normal">
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
                    <label htmlFor="" className="block text-white font-semibold text-sm font-normal">
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
                    <button
                        className="rounded text-white fontsemibold bg-green-400 py-2 px-6 hover:bg-green-600"
                        onClick={(e) => updateColaborador(e,)}>
                        Atualizar
                    </button>
                    <button
                        onClick={() => route.push('/colaboradores/list')}
                        className="rounded text-white fontsemibold bg-red-500 py-2 px-6 hover:bg-red-600">
                        cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}
