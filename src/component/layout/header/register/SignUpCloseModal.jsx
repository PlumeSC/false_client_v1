import { useContext } from "react"
// import { DataContext } from "../../../../layout/navbar"
import { DataUserContext } from "../../../../layout/Layout";

export default function SignUpCloseModal(){
    const {setSignUpVisible} = useContext(DataUserContext)
    return <div className=" text-black flex justify-between ">
        <div></div>
        <div className="flex justify-center items-center">
            <button className="w-[35px] h-[35px] text-xl rounded-full duration-700" onClick={()=>setSignUpVisible(false)}>x</button>
        </div>
    </div>
}