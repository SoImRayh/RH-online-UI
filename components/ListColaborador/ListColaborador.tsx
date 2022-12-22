import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import ColaboradorService, {Colaborador} from "../../services/ColaboradorService";
import {ColaboradorSolo} from "../Colaborador/Colaborador";
import * as events from "events";



export function ListColaborador(){
    const router = useRouter()

    const [loading, setloading] = useState(true)
    const [colaboradores, setcolaboradores] = useState<Colaborador[]>([])

    useEffect( () => {
        setloading(true)
        try {
            ColaboradorService.getAll().then( response => {
                setcolaboradores(response.data)
                setloading(false)
                }
            )
        }catch (err){
            console.error(err)
        }
    },[])

    const deleteColaborador = (e: MouseEvent, id: number) => {
        e.preventDefault();
        ColaboradorService.delete(id).then( response => {
            if(response.status === 200){
                if (colaboradores){
                    setcolaboradores( prevState => {
                        return prevState.filter(colaborador => colaborador.id !== id)
                    })
                }
            }
        })

    }
    return (
    <>
        <div className="container mx-auto my-8">
            <div className="h-12 ">
                <button
                    onClick={() => router.push('/colaboradores/new')}
                    className="rounded bg-transparent text-white px-6 py-2 font-semibold border-2 hover:bg-blend-multiply hover:bg-white/10">
                    ADD Colaborador
                </button>
            </div>
            <div className="flex shadow borrder-b">
                <table className="min-w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                                First name
                            </th>
                            <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                                Last name
                            </th>
                            <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                                Email id
                            </th>
                            <th className="text-right font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    {!loading && (
                    <tbody className="bg-white">
                    { colaboradores.map( (colaborador: Colaborador) => (
                        <ColaboradorSolo
                            deleteColaborador={deleteColaborador}
                            colaborador={colaborador}
                            key={colaborador.id} />
                    ))}
                    </tbody>
                        )}
                </table>
            </div>
        </div>
    </>
  );
}
