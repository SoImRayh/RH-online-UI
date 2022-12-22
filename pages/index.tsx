import {Navbar} from "../components/Navbar/NavBar";
import {AddColaborador} from "../components/AddColaborador/AddColaborador";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PseudoLogo} from "../components/PseudoLogo/PseudoLogo";
import {useRouter} from "next/router";


export default function Home() {
    const router = useRouter()
  return (
      <>
          <button
              onClick={(e) => router.push("/colaboradores/list")}
              className=" ml-2 mt-4 bg-transparent py-2 w-32 border-2 text-white font-thin
            hover:text-zinc-700 hover:bg-white">
              Lista
          </button>
      <PseudoLogo/>
      </>

  )
}

