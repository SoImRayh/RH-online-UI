import ColaboradorService, {Colaborador} from "../../services/ColaboradorService";
import {useRouter} from "next/router";
interface ColaboradorProps{

    deleteColaborador: Function
    colaborador: Colaborador
}
export function ColaboradorSolo(props: ColaboradorProps){

    const router = useRouter()

    const editColaborador = (e: React.MouseEvent<HTMLAnchorElement>, id: number) => {
        e.preventDefault()
        router.push(`/colaboradores/${id}/update`)
    }
  return (
      <tr className="hover:bg-gray-200">
          <td className="text-left px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-600">
                  {props.colaborador.firstName}
              </div>
          </td>
          <td className="text-left px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-600">
                  {props.colaborador.lastName}
              </div>
          </td>
          <td className="text-left px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-600">
                  {props.colaborador.emailID}
              </div>
          </td>
          <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
              <a
                  onClick={(e) => editColaborador(e, props.colaborador.id)}
                  className="text-white font-semibold px-4 hover:cursor-pointer py-3 px-4 rounded
                  bg-indigo-500 hover:bg-indigo-400">
                  editar
              </a>
              <a
                 onClick={(e) => props.deleteColaborador(e, props.colaborador.id)}
                 className="text-white font-semibold px-4 hover:cursor-pointer py-3 px-4 rounded mx-2
                  bg-indigo-500 hover:bg-indigo-400">
                  excluir
              </a>
          </td>
      </tr>
  );
}
