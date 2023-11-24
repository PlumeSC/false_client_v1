import { useContext, useEffect } from "react";
// import { DataContext } from "../../../../layout/Navbar";
import { DataUserContext } from "../../../../layout/Layout";




export default function RegisterButton() {

    const { setSignUpVisible,setLoginVisible } = useContext(DataUserContext);


    return (
        <div className="text-center text-normal font-normal mt-8 duration-700 hover:decoration-neon-primary underline decoration-2 underline-offset-6 decoration-white">
            <button onClick={()=>{
                setLoginVisible(false)
                setSignUpVisible(true)
            }} className="">Sign Up</button>
        </div>
    );
}
