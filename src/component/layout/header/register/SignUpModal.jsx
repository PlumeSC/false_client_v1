import { useContext } from "react";
// import { DataContext } from "../../../../layout/navbar";
import { DataUserContext } from "../../../../layout/Layout";
import SignUpCloseModal from "./SignUpCloseModal";
import SignUpForm from "./SignUpForm";

export default function SignUpModal() {
    const { signUpVisible, setSignUpVisible } = useContext(DataUserContext);
    if (!signUpVisible) return false;
    return (
        <div className="fixed top-0 inset-0 bg-black bg-opacity-50 blackdrop-blur-sm flex justify-center items-center">
            <div className="flex flex-col w-[450px]">
                <div className="bg-white rounded-2xl text-black flex flex-col ">
                    <SignUpCloseModal />
                    <div className="p-10">
                        <div className="text-4xl text-center">Sign Up</div>
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
