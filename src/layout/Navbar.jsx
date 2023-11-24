import Logo from "../component/layout/header/Logo";
import LoginButton from "../component/layout/header/login/LoginButton";
import MenuBar from "../component/layout/header/menuBar";
import { useContext, useEffect } from "react";
import LoginModal from "../component/layout/header/login/LoginModal";
import SignUpModal from "../component/layout/header/register/SignUpModal";
import UserNavbar from "../component/layout/header/userNavbar/UserNavbar";
import {DataUserContext} from "../layout/Layout"




export default function Navbar() {

    const {isLogin,setIsLogin,dataUser} = useContext(DataUserContext)

    useEffect(()=>{},[isLogin])
    useEffect(()=>{
        if(!dataUser=={}) setIsLogin(true)
    },)


    return (
        <div className="z-50 pt-8 pb-10 bg-neon-bgA w-screen sticky top-0 flex justify-between px-8">
            <Logo />
            <div className="relative w-[65%] h-[98%] pt-[4px] pl-[400px] mr-10">
                <div className="absolute right-[30px] h-full w-full border-4 border-cyberPunk-secondary rounded-3xl shadow-shadowSec"></div>
                <div className="absolute top-[20px] left-[30px] h-full w-full border-4 border-cyberPunk-bgA rounded-3xl shadow-shadowSec pl-[40px] pr-[100px] pt-6">
                    <div className="flex justify-between items-center mt-[-6px]">
                        <MenuBar />
                        {isLogin?<UserNavbar/>:(<>
                                <LoginButton />
                                <LoginModal/>
                                <SignUpModal/>
                            </>)}
                    </div>
                </div>
            </div>
        </div>
    );
}
