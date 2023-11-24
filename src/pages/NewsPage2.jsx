import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";



export default function NewsPage2(){

    const params = useParams();
    // const path = window.location.pathname.split('/')[2]



    const [news,setNews] = useState({})
    useEffect(()=>{
        getNews()
    },[])
    const getNews=async()=>{
        let a = await axios.get(`http://localhost:8000/news/${params.newsId}`)
        setNews(a.data)
    }
    console.log(news);
    return (
        <div className="flex flex-col gap-[60px] text-cyberPunk-primary">
            <div className="flex justify-center">
                <div className="text-[56px] font-bold py-[100px]">{news.title}</div>
            </div>
            <div className="flex justify-center flex-col gap-5">
                <div className="flex justify-between px-[320px]">
                    <div>{news.team}</div>
                    <div>{news.date?.slice(0,10)}</div>
                </div>
                <div className="flex justify-center">
                    <img className="w-[70%]" src={news.heroImg}/>
                </div>
            </div>
            {/* <div>{news.team}</div> */}
            <div className="px-[350px] py-20"><div className="preview" dangerouslySetInnerHTML={{__html:news.content}}></div></div>
        </div>
    )
}