import { useContext, useEffect } from "react"
// import { DataContext } from "../../../../layout/Navbar"
// import { UserContext } from "../../../../layout/Layout"
import { DataUserContext } from "../../../../layout/Layout"



export default function Button(){

    // const {setSignUpVisible,setLoginVisible} = useContext(DataContext)
    const {setSignUpVisible,setLoginVisible} =  useContext(DataUserContext)


    return (
        <div className="bg-cyberPunk-bgA px-6 rounded-2xl font-semibold duration-1000 hover:bg-cyberPunk-primary">
            <button onClick={()=>{
                setSignUpVisible(false)
                setLoginVisible(true)
            }}>LogIn</button>
            

        </div>
    )
}