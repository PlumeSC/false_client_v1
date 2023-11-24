import { useState } from "react";
import axios from 'axios'


export default function AdminPost() {
    const [input,setInput] = useState({
        title:``,
        team:null,
    })
    const [img,setImg] = useState({})
    const [message,setMessage] = useState([])

    const handleInput=(e)=>{
        if(e.target.name===`file`) return setImg({[e.target.name]:e.target.files[0]})
        setInput({...input,[e.target.name]:e.target.value})
    }
    const handleAdd=(e)=>{
        // setMessage(arr => [...arr, {messageId:arr.length+1,message:''}])
        setMessage([...message,{messageId:message.length+1,message:''}])
        // console.log(message);
    }
    const handleMessage=(e)=>{
        let arr = [...message]
        arr[e.target.name-1] = {messageId:e.target.name,message:e.target.value}
        setMessage(arr)
        // console.log(message);
    }
    const handleSubmit=async(e)=>{
        try {
            e.preventDefault()
            // console.log(input);
            // console.log(img);
            // console.log(message);

            const formdata = new FormData()
            for (const key in input){
                formdata.append(key,input[key])
            }
            formdata.append('newsContent', JSON.stringify(message))
            // formdata.append('file',img)


            const headers = {
                'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
                'Content-Type': 'multipart/form-data'
            }

            await axios.post(`http://localhost:8000/admin/text`,formdata,{headers})
            await axios.post(`http://localhost:8000/admin/img`,img,{headers}) 

            // console.log(`post done`);
            window.location.reload(false)

        } catch (error) {
            console.log(error.response.data);
        }
        
        
    }
  
    return (
        <div className="flex w-full justify-center ">
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="w-[1000px] text-black rounded-xl bg-white p-10">
                <label>Title</label>
                <input onChange={handleInput} name="title" type="text" id="title" placeholder="Title" className="text-[24px] focus:outline-none focus:ring relative w-full px-3 py-3 text-black placeholder-gray-400 bg-white border-0 rounded shadow outline-none" required/>
                <div className="py-8">
                    <label>Choose a team :</label>
                    <select onChange={handleInput} name="team" id="team" className="px-1 bg-white">
                        <option value={null}>none</option>
                        <option value="liverpool">liverpool</option>
                        <option value="Manchester City">Manchester City</option>
                        <option value="Arsenal">Arsenal</option>
                        <option value="NewCastle">NewCastle</option>
                    </select>
                </div>
                {message.map((x,y)=>{
                    return <TextArea key={y} value={x} event={handleMessage}/>
                })}
                
                <input onClick={handleAdd} type="button" value="Add" className="bg-red-500 pt-1 px-5 rounded-lg"/>

                <input onChange={handleInput} type="file" name="file" required/>
                <input className="bg-blue-500 py-2 px-4 rounded-xl mt-10" type="submit" />
            </form>
        </div>
    );
}

function TextArea({value,event,index}){
    // console.log(value);
    return (
        <>
            <textarea onChange={event} name={value.messageId} placeholder={`message${value.messageId}`} className="focus:outline-none focus:ring relative w-full px-3 py-3 text-[20px] text-black placeholder-gray-400 bg-white border-0 rounded shadow outline-none" required></textarea>
        </>
    )
}