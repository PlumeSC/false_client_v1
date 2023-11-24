import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";



export default function Hilight(){
    
    const params = useParams();
    // const [video,setVideo] = useState(null)
    // const videoRef = useRef(null)

    // const options = {
    //     method:'GET',
    //     url:`http://localhost:8000/data/video/${params.videoId}`,
    //     headers:{
    //         'range' : 'bytes=0-'
    //     },
    // }

    // useEffect(()=>{
    //     // getVideos()
    //     if(videoRef.current){
    //         videoRef.current.pause()
    //         videoRef.current.removeAttribute(`src`)
    //         videoRef.current.load()
    //     }
    // })
    
    // const getVideos = async ()=>{
    //     let a = await axios.request(options)
    //     setVideo(a.data);
    // }
    return(
        <div className="flex justify-center">

            <video  id="video" width="800" controls muted="muted" autoPlay>
                <source src={`http://localhost:8000/data/video/${params.videoId}`} type="video/mp4" />
            </video>
        </div>
    )
}