import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";




export default function NewsPage(){
    const [allNews,setAllNews] = useState(null)
    useEffect(()=>{
       viewNews()
    },[])
    const viewNews = async ()=>{
        try {
            let a = await axios.get('http://localhost:8000/news')
            setAllNews(a.data)
        } catch (error) {
            console.log(error);
        }
    }

    return (<>
        <div className="outlin outline-1">
        <div className="py-16 text-[36px] text-neon-secondary drop-shadow-logo">ข่าวล่าสุด</div>
            <div className="grid grid-cols-3 gap-8">
                {allNews?allNews.map((item,index)=>{
                    return <Box key={index} data={item}/>
                }):null}
            </div>
        </div>
    </>)
}

function Box({data}){
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`/news/${data.id}`)}>
            <div className="w-full cursor-pointer p-10 flex flex-col items-center border-4 shadow-shadowPri border-cyberPunk-bgA duration-700 hover:border-cyberPunk-primary hover:shadow-shadowPriCyber">
                <img src={data.heroImg} className="object-contain" />
                <div className="pt-[2%] px-[3%] w-full ">
                    <div className="h-[89px] text-[30px] overflow-hidden ">{data.title}</div>
                </div>
            </div>
        </div>
    )
}