import SignUpInput from "./SignUpInput";
import Joi from "joi";
import { useState } from "react";
import { useContext } from "react";
// import { DataContext } from "../../../../layout/navbar";
import { DataUserContext } from "../../../../layout/Layout";
import LoginButton from "./LoginButton"
import axios from "axios"



const registerSchema = Joi.object({
    firstname: Joi.string().trim().required(),
    lastname: Joi.string().trim().required(),
    emailPhoneNumber: Joi.alternatives([
      Joi.string().email({ tlds: false }),
      Joi.string().pattern(/^[0-9]{10}$/)
    ]).required(),
    password: Joi.string()
      .pattern(/^[a-zA-Z0-9]{6,30}$/)
      .trim()
      .required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).trim().required()
  });




export default function SignUpForm() {
    const {setSignUpVisible,setLoginVisible,setIsLogin,setDataUser,dataUser} = useContext(DataUserContext)
    const [input,setInput]=useState({
        firstname: '',
        lastname: '',
        emailPhoneNumber: '',
        password: '',
        confirmPassword: ''
    })
    const [error,setError] = useState({
        firstname: '',
        lastname: '',
        emailPhoneNumber: '',
        password: '',
        confirmPassword: ''
    })

    function handleSubmit(event){
        event.preventDefault()
        const {value,error} = registerSchema.validate(input,{ abortEarly: false })



        if (error) {
            const result = error.details.reduce((acc, el) => {
              const { message, path } = el;
              acc[path[0]] = message;
              return acc;
            }, {});
            return setError(result)
        }else{
            axios.post(`http://localhost:8000/auth/register`,value)
            .then((res)=>{
                localStorage.setItem(`ACCESS_TOKEN`,res.data.TOKEN)

                setDataUser(res.data.user)
            })
            .then(()=>{
                setLoginVisible(false)
                setSignUpVisible(false)
                setIsLogin(true)
            })
            .catch(err=>console.log(err.response.data))
        }
    }
    
    function handleInput(e){
        setInput({...input,[e.target.name]:e.target.value})
        // console.log(input);
    }
    
    // console.log(error);
    return (
        <div className="py-10">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <SignUpInput err={error.firstname} title="Firstname" type="text"  name="firstname" event={handleInput}/>
                <SignUpInput err={error.lastname} title="Lastname" type="text"  name="lastname" event={handleInput}/>
                <SignUpInput err={error.emailPhoneNumber} title="Email or Phone Number" type="text"  name="emailPhoneNumber" event={handleInput}/>
                <SignUpInput err={error.password} title="Password" type="password"  name="password" event={handleInput}/>
                <SignUpInput err={error.confirmPassword} title="Confirn Password" type="password"  name="confirmPassword" event={handleInput}/>
                <div className="flex justify-center">
                    <input className="font-normal duration-500 hover:bg-cyberPunk-bgA hover:cursor-pointer text-white bg-cyberPunk-primary py-3 w-full mx-2 mt-[36px] rounded-3xl text-center text-xl " type="submit" value="SIGNUP"/>
                </div>
                <div><LoginButton/></div>
            </form>
        </div>
    );
}