import LoginForm from "./LoginForm";
import LoginLink from "./LoginLink";
import LoginCloseModal from "./LoginCloseModal";
import { useContext } from "react";
import { DataContext } from "../../../layout/Navbar";

export default function LoginModal() {
    // const { loginVisible } = useContext(DataContext);
    // const {loginVisible} = useContext(UserContext)
    const {loginVisible} = useContext(DataUserContext)

    if (!loginVisible) return false;

    return (
        <div className="fixed top-0 inset-0 bg-black bg-opacity-50 blackdrop-blur-sm flex justify-center items-center">
            <div className="flex flex-col w-[450px]">
                <div className="bg-white rounded-2xl text-black flex flex-col ">
                    <LoginCloseModal />
                    <div className="p-10">
                        <div className="text-4xl text-center">Login</div>
                        <LoginForm />
                        <LoginLink />
                    </div>
                </div>
            </div>
        </div>
    );
}
