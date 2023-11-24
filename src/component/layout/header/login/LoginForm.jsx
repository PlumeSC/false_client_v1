import LoginInput from "./LoginInput"
import SignUpButton from "../register/SignUpButton"
import { useContext, useState } from "react"
import Joi from "joi"
import axios from "axios"
// import { DataContext } from "../../../../layout/Navbar"
import { DataUserContext } from "../../../../layout/Layout"


const loginSchema = Joi.object({
    emailPhoneNumber: Joi.string().required(),
    password: Joi.string().required(),
});




export default function LoginForm(){
    // const {setSignUpVisible,setLoginVisible,setIsLogin} = useContext(DataContext)
    const {setSignUpVisible,setLoginVisible,setIsLogin,setDataUser,dataUser} = useContext(DataUserContext)
    const [input,setInput] = useState({
        emailPhoneNumber: '',
        password: '',
      })

    const handleInput = (e)=>{
        setInput({...input,[e.target.name]:e.target.value})
        // console.log(input);
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const {value,error} = loginSchema.validate(input)
        // console.log(`error : `+error);
        
        if(error){
            // alert error
            return alert(error.message)
        }else{
            // console.log(value);
            axios.post(`http://localhost:8000/auth/login`,value)
            .then((res)=>{
                localStorage.setItem(`ACCESS_TOKEN`,res.data.TOKEN)
                // localStorage.setItem(`DATA`,JSON.stringify(res.data.user,null,2))
                // console.log(JSON.stringify(res.data.user,null,2));
                // setDataUser(JSON.stringify(res.data.user,null,2))
                setDataUser(res.data.user)
            })
            // .then(()=>alert(localStorage.getItem(`ACCESSTOKEN`)))
            .then(()=>{
                setLoginVisible(false)
                setSignUpVisible(false)
                setIsLogin(true)
            })
            .catch(err=>console.log(err.response.data))
        }
    }

    return (
        <div className="py-10">
            <form onSubmit={handleSubmit}>
                <LoginInput title="Email or Phone Number" type="text" name="emailPhoneNumber" event={handleInput}/>
                <LoginInput title="Password" type="password" name="password" event={handleInput}/>
                <div onClick={()=>console.log(1)} className="font-normal text-right text-xs p-1 pt-2 pb-6 hover:cursor-pointer">forgot password?</div>
                <div className="flex justify-center">
                    <input className="font-normal duration-500 hover:bg-cyberPunk-bgA hover:cursor-pointer text-white bg-cyberPunk-primary py-3 w-full mx-2 mt-3 rounded-3xl text-center text-xl " type="submit" value="LOGIN" />
                </div>
                <SignUpButton/>
            </form>
        </div>
    )
}