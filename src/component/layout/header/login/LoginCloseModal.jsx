import { useContext } from "react"
// import { DataContext } from "../../../../layout/navbar"
import { DataUserContext } from "../../../../layout/Layout"

export default function LoginCloseModal({setVisible}){
    const {setLoginVisible} = useContext(DataUserContext)
    return <div className=" text-black flex justify-between ">
        <div></div>
        <div className="flex justify-center items-center">
            <button className="w-[35px] h-[35px] text-xl rounded-full duration-700" onClick={()=>setLoginVisible(false)}>x</button>
        </div>
    </div>
}