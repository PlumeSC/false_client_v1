import { useEffect, useState } from "react"
import axios from "axios"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css";
import Quill from "./A1"

const headers = {
    'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
    'Content-Type': 'multipart/form-data'
}
const headers2 = {
    'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
    // 'Content-Type': 'application/json'
}
// console.log(`Bearer ${localStorage.getItem("ACCESS_TOKEN")}`);


export default function Test(){

    // const [create,setCreate] = useState(false)
    const [isPost,setPost] = useState([])
    const [select,setSelect] = useState(null)
    const [radio,setRadio] = useState(true)

    useEffect(()=>{
        viewPost()
    },[])

    const viewPost =()=>{
        try {
            axios.get('http://localhost:8000/admin/getAll')
            .then(res=>{
                setPost(res.data)
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className=" flex flex-col  gap-5 pt-5 w-full">


            <form className="flex gap-10 text-[24px]">
                <div className="flex gap-2">
                    <input className="w-5" type="radio" name="profile" id="post" onClick={()=>setRadio(true)}/>
                    <span for="post">Post</span>
                </div>
                <div className="flex gap-2">
                    <input className="w-5"  type="radio" name="profile" id="upload" onClick={()=>setRadio(false)}/>
                    <span for="upload">upload</span>
                </div>

            </form>
            
            {radio?<Post isPost={isPost} select={select} setSelect={setSelect} />:<Upload/>}
       
        </div>
    )
}

function Upload(){
    const [file,setFile]= useState(null)
    const handleInput=(e)=>{
        setFile(e.target.files[0])
    }
    const handleUpload =async (e)=>{
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
            'Content-Type': 'multipart/form-data'
        }
        e.preventDefault()
        const formdata = new FormData()
        formdata.append(`file`,file)
        await axios.post(`http://localhost:8000/admin/upload`,formdata,{headers})
        window.location.reload(false)
    }
    return(
        <form className="flex flex-col w-[200px] gap-8" onSubmit={handleUpload} encType="multipart/form-data" >
            <div className="text-[24px] font-bold">Upload</div>
            <input onChange={handleInput} type="file"  name='file'/>
            <input className="bg-blue-500 px-5 py-2 rounded-2xl cursor-pointer" type="submit" />
        </form>
    )
}


function Post({isPost,select,setSelect}){
    useEffect(()=>{
    },[isPost])
    return (
        <div className="flex flex-col items-center">
            <div className=" cursor-pointer w-4/5">
                <Quill a='add'/>
            </div>
            <div className="flex flex-col gap-5 px-20 py-10 text-black w-full">
                {isPost.map((item,index)=>{
                    return <List key={index} isPost={isPost} data={item} select={select} setSelect={setSelect}/>
                })}
            </div>
        </div>
    )
}


function List({data,select,setSelect,isPost}){
    // console.log(data.id);
    // console.log(isPost);
    const [edit,setEdit] = useState(false)
    const [news,setNews] = useState(false)

    const headers2 = {
        'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
    }
    
    const handleDelete = async(e)=>{
        await axios.post('http://localhost:8000/admin/delete',{data},{headers2})
        // const aa = {
        //     method :'DELETE',
        //     url:'http://localhost:8000/admin/delete',
        //     headers:{
        //         'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
        //     },  
        //     params:'5555555'
        // }
        // await axios.request(aa)
        window.location.reload(false)
    }


    return (
        <div className="flex w-full justify-center">
            <div className=" bg-white rounded-3xl py-5 px-10 flex flex-col gap-3 w-4/5">
                <div onClick={()=>setNews(!news)} className="text-[28px] cursor-pointer">{data.title}</div>

                <div>{news&&(
                    <span className="flex justify-center flex-col gap-10 outline outline-1 outline-cyberPunk-primary p-3">
                        <div className="flex justify-center">
                            <img className="w-[60%]" src={data.heroImg}/>
                        </div>
                        <div className="preview" dangerouslySetInnerHTML={{__html:data.content}}></div>
                    </span>
                    )}</div>
                <div>{edit&&<Quill a="edit" idx={data.id}/>}</div>
                <div className="flex justify-between">
                    <div className="flex gap-10 text-[18px]">
                        <div>{data.date?.slice(0,10)}</div>
                        <div>{data.team}</div>
                    </div>
                    <div className="flex gap-10 text-white">
                        <button onClick={()=>setEdit(!edit)} className="bg-neon-secondary px-6 py-1 rounded-2xl text-[18px]">edit</button>
                        <button onClick={handleDelete} className="bg-neon-primary px-6 py-1 rounded-2xl text-[18px]">delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}