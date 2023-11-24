import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { createContext, useEffect, useState } from "react";
import axios from "axios";



export const DataUserContext = createContext()

export default function Layout() {

    const [isLogin,setIsLogin] = useState(false)
    const [loginVisible,setLoginVisible] = useState(false)
    const [signUpVisible,setSignUpVisible] = useState(false)
    const [dataUser,setDataUser] = useState({})
    

    useEffect(()=>{
        
    },[isLogin])


    useEffect(()=>{
        if(localStorage.getItem('ACCESS_TOKEN')){
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
              };

            axios.get(`http://localhost:8000/auth/me`,{headers})
            .then(res=>setDataUser(res.data.user))
            .then(()=>setIsLogin(true))
            .catch(err=>console.log(err))
        }
    },[])

    
    // console.log(dataUser);
    return (
        <DataUserContext.Provider value={{loginVisible,setLoginVisible,signUpVisible,setSignUpVisible,isLogin,setIsLogin,dataUser,setDataUser}}>
            <div className="font-display Z-50 backgroundPage h-screen w-screen flex items-center flex-col overflow-y-scroll z-50">
                    <Navbar />
                <div className=" pt-[80px] w-4/5 grow ">
                    <div>
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        </DataUserContext.Provider>
    );
}
