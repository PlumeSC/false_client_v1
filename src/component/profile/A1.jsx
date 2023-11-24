import { useEffect, useState } from "react"
import axios from "axios"
import ReactQuill,{Quill} from 'react-quill'
import "react-quill/dist/quill.snow.css";
import  ImageResize  from 'quill-image-resize-module-react';
import ImageCompress from 'quill-image-compress';

Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/imageCompress', ImageCompress);

const modules = {
    imageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize'],
        background:'black',
        padding:'100px'
      },
    imageCompress: {
        quality: 1.0,
        maxWidth: 1000,
        maxHeight: 1000,
        imageType: 'image/jpeg',
        debug: true,
        suppressErrorLogging: false,
        insertIntoEditor: undefined,
      },
    toolbar :[
        [{header :[1,2,3,4,5,6,false]}],
        [{font:[]}],
        [{size:[]}],
        ["bold","italic","underline","strike","blackquote"],
        [{'align':[]}],
        [{'color':[]},{'background':[]}],
        [
            {list:"ordered"},
            {list:"bullet"},
            {indent:"-1"},
            {indent:"+1"},
        ],
        ["link","image","video"],
        [{'direction':'rtl',}],
        ['clean'] 
    ],
}
const headers = {
    'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
    'Content-Type': 'multipart/form-data'
}

export default function A1({a,idx}){

    const [info,setInfo] = useState({
        id:idx,
        title:"",
        file:"",
        content:"",
        team:null
    })
    const handleInput = (e)=>{
        if(e.target.name===`file`) return setInfo({...info,[e.target.name]:e.target.files[0]}) 
        setInfo({...info,[e.target.name]:e.target.value})
    }
    const handleContent = (value)=>{
        setInfo({...info,content:value})
    }
    const handleSubmit = async (e)=>{
        try {
            e.preventDefault()
            const formdata = new FormData()
            for (const key in info) {
                formdata.append(key,info[key])
            }
            console.log(info);
            if(a==="add"){
                await axios.post('http://localhost:8000/admin/post',formdata,{headers})
                .then((res)=>window.location.reload(false))
                .catch(err=>console.log(err))
            }else if(a==='edit'){
                await setInfo({...info,id:idx})
                console.log(info);
                await axios.post('http://localhost:8000/admin/edit',formdata,{headers})
                .then((res)=>{
                    console.log(`edit done`);
                    window.location.reload(false)
                })
                .catch(err=>console.log(err))
            }else{
                console.log(`something wrong`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex justify-center items-center w-full py-5 text-black">
            <div className="bg-white p-12 rounded-3xl w-full flex flex-col gap-10">
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col gap-8">
                    <div className="flex flex-col gap-5">
                        <div className="text-[20px]">Title</div>
                        <textarea name="title" onChange={handleInput} className="w-full p-4 rounded-xl bg-gray-200 outline outline-1" type="text" placeholder="Ttile" />
                    </div>
                    <div className="flex gap-5">
                        <input onChange={handleInput} type="file" name='file'/>
                        <select onChange={handleInput} name="team" id="team" className="outline outline-1 rounded-lg bg-white">
                            <option value={null}>none</option>
                            <option value="liverpool">liverpool</option>
                            <option value="Manchester City">Manchester City</option>
                            <option value="Arsenal">Arsenal</option>
                            <option value="NewCastle">NewCastle</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="text-[20px]">Content</div>
                        <ReactQuill onChange={handleContent}
                        value={info.content} theme="snow" placeholder="Content..."
                        modules={modules}/>
                    </div>
                    <div className="flex justify-center">
                        <input className="bg-neon-secondary text-white px-6 text-[20px] py-2 rounded-2xl cursor-pointer" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}