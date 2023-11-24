import { useNavigate } from "react-router-dom"


export default function Footer(){
    const navigator = useNavigate()
    return (
        <div className="flex w-full justify-center flex-col gap-10 items-center  bg-slate-800 py-20 mt-36">
            <div className="text-3xl">Footer</div>
            <div className="flex  justify-center items-center gap-20 text-2xl">
                <div onClick={()=>navigator(`/news`)} className="cursor-pointer">News</div>
                <div onClick={()=>navigator(`/livescore`)} className="cursor-pointer">LiveScore</div>
                <div onClick={()=>navigator(`/scoreboard`)} className="cursor-pointer">Standings</div>
            </div>
        </div>
    )
}