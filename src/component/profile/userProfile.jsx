import { useState } from "react";
import axios from "axios"
import Joi from "joi";


const updateSchema = Joi.object({
    firstname:Joi.string().allow('', null),
    lastname:Joi.string().allow('', null),
    file:Joi.any().allow('', null),
    emailPhoneNumber: Joi.alternatives([
      Joi.string().email({ tlds: false }),
      Joi.string().pattern(/^[0-9]{10}$/)
    ]).allow('', null),
    password: Joi.string()
      .pattern(/^[a-zA-Z0-9]{6,30}$/)
      .trim()
      .required(),
  });



export default function UserProfile() {
    const [input,setInput] = useState({
        firstname:"",
        lastname:"",
        emailPhoneNumber:"",
        password:"",
        file:"",
    })

    const [error,setError] = useState({
        firstname:"",
        lastname:"",
        emailPhoneNumber:"",
        password:"",
        file:"",
    })

    const handleInput = (e)=>{
        console.log(e.target.name);
        if(e.target.name===`file`) return setInput({...input,[e.target.name]:e.target.files[0]}) 
        setInput({...input,[e.target.name]:e.target.value})
    }
    
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const {value,error} = updateSchema.validate(input,{abortEarly:false})

        if (error) {
            console.log(error);
            const result = error.details.reduce((acc, el) => {
              const { message, path } = el;
              acc[path[0]] = message;
              return acc;
            }, {});
            return setError(result)
        }else{
            const formdata = new FormData()
            for (const key in input){
                if (input[key]==="") null
                else formdata.append(key,input[key])
            }
            const headers = {
                'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
                'Content-Type': 'multipart/form-data'
            }
            await axios.post(`http://localhost:8000/user/post`,formdata,{headers})
            window.location.reload(false)
        }
    }

    return (
        <>
            <div className="outline-1 outline flex  flex-col justify-between items-center w-full">
                <div>Update User</div>
                <div className="flex flex-col">
                    <form onSubmit={handleSubmit} encType="multipart/form-data"  className="flex flex-col">
                        <div>firstname</div>
                        <input name="firstname" onChange={handleInput} type="text" placeholder="Firstname" />
                        <div>lastname</div>
                        <input name="lastname" onChange={handleInput} type="text" placeholder="Lastname" />
                        <div>emailPhoneNumber</div>
                        <input name="emailPhoneNumber" onChange={handleInput} type="text" placeholder="emailPhoneNumber" />
                        <div>password</div>
                        <input name="password" onChange={handleInput} type="text" placeholder="password" />
                        <div>uploadProfile</div>
                        <input onChange={handleInput} type="file" name='file'/>
                        <input type="submit" className="bg-red-400 p-1" />
                    </form>
                </div>
            </div>
        </>
    );
}

// firstname lastname
