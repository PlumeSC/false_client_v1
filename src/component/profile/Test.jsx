import axios from "axios";
import { useState } from "react";


export default function Test({data}){
    const [selectNews,setSelectNews] = useState(null)
    // console.log(data);
    return (
        <div className="w-[1000px] flex gap-10 flex-col">
            {data.map((value,index)=>{
                return <List key={index} data={value} index={index} select={selectNews} setSelect={setSelectNews}/>
            })}
        </div>
    )
}

function List({data,select,setSelect,index}){
    const handelSelect = ()=>{
        setSelect(index)
    }
    // console.log(data.NewsContent[0].message);
    return (
        <div className="w-full bg-white rounded-xl p-5">
            <div onClick={handelSelect}  className="flex justify-between cursor-pointer">
                <div>{data.newsTitle}</div>
                <div>
                    {/* <div>{data.team}</div> */}
                    <div>{data.NewsContent[0].message}</div>
                    <div>{data.date}</div>
                </div>
            </div>
            {select===index&&<SettingNews data={data}/>}
        </div>
    )
}
function SettingNews({data}){
    const [input,setInput] = useState({
        title:data.newsTitle,
        team:'',
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
        console.log(message);
    }
    const handleSubmit = async(e)=>{
        try {
            e.preventDefault()

            const formdata = new FormData()


            for (const key in input){
                input[key]!==''&&formdata.append(key,input[key]);
            }

            formdata.append()



        } catch (error) {
            console.log(error);
        }
    }
    console.log(data.NewsContent[0].message);
    console.log(data);
    return(
        <div className="outline outline-1 mt-5">
            <div className="flex w-full justify-center ">
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="w-[1000px] text-black rounded-xl bg-white p-10">
                <label>Title</label>
                <input value={input.title} onChange={handleInput} name="title" type="text" id="title" placeholder="Title" className="text-[24px] focus:outline-none focus:ring relative w-full px-3 py-3 text-black placeholder-gray-400 bg-white border-0 rounded shadow outline-none" />
                <div className="py-8">
                    <label>Choose a team :</label>
                    <select onChange={handleInput} name="team" id="team" className="px-1 bg-white">
                        <option value=''>none</option>
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

                <input onChange={handleInput} type="file" name="file"/>
                <input className="bg-blue-500 py-2 px-4 rounded-xl mt-10" type="submit" />
            </form>
        </div>
        </div>
    )
}

function TextArea({value,event,index}){
    return (
        <>
            <textarea onChange={event} name={value.messageId} placeholder={`message${value.messageId}`} className="focus:outline-none focus:ring relative w-full px-3 py-3 text-[20px] text-black placeholder-gray-400 bg-white border-0 rounded shadow outline-none" required></textarea>
        </>
    )
}

