import Image from "next/image";
import {useRouter} from "next/router";


export function Navbar(){
    const router = useRouter()
  return (
      <div className=" flex bg-gray-800 hover:cursor-pointer"
           onClick={(e)=> router.push("/")}>
          <div className="px-2 mt-2">
              <Image src="/logo.png" alt="" width={45} height={45}/>
          </div>
          <div className="h-16 px-8 flex items-center">
              <p className="text-white font-bold">Controle de colaboradores</p>
          </div>
      </div>
  );
}
