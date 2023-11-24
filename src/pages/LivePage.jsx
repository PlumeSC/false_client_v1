import { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"


export default function LivePage(){
    const [video,setVideo] = useState([])
    useEffect(()=>{
        getVideos()
    },[])
    const getVideos = async()=>{
        const a = await axios.get('http://localhost:8000/admin/video')
        setVideo(a.data)
    }
    // console.log(video);
    return (<>
        <div>
            <div className="bg-white p-1">
               {video.map((item,index)=>{
                return <List key={index} data={item}/>
               })}
            </div>
        </div>
    </>)
}



function List({data}){
    // console.log(data);
    const navigate = useNavigate()
    return (
        <div onClick={()=>navigate(`/hilight/${data.id}`)} className="bg-slate-800 rounded-3xl p-5 m-2 text-white cursor-pointer">
            {data.name}
        </div>
    )
}