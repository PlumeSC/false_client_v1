import { useEffect, useState } from "react"
import axios from 'axios'



export default function LiveScorePage(){

    const [score,setScore] = useState([])
    const [page,setPage] = useState(2)
    
    useEffect(()=>{
        getScore()
    },[])

    const getScore = async e=>{
        const a = await axios.get(`http://localhost:8000/data/livescore`)

        const b = a.data.reduce((acc,item)=>{
            if(!acc[item.rounded]) acc[item.rounded]=[]
            acc[item.rounded].push(item)
            return acc
        },[]).splice(8)
        
        setScore(b)
    }



    const handleRounded = async (e)=>{
        setPage(e.target.id)
    }

    return (<>
        <div className="outline-1 outlin flex flex-col justify-center items-center gap-10 w-full">
            
            <div className="py-16 text-[36px] text-neon-secondary drop-shadow-logo">ผลการแข่งขัน</div>

            <div className="w-full flex justify-center gap-6">
                {score.map((item,index)=>{
                    return <Top key={index} index={index} item={item} handleRounded={handleRounded}/>
                })}
            </div>
            <div className="w-full">
                {score.length!==0?score[page].map((item,index)=>{
                    return <span className=""><Livescore key={index} item={item} /></span>
                }):null}
            </div>
        </div>
    </>)
}

function Top({item,handleRounded,index}){
    return (
        <div onClick={handleRounded}  id={index} className="py-3 px-5 rounded-lg cursor-pointer bg-cyberPunk-primary text-cyberPunk-bgA duration-100 active:bg-neon-bgA  text-[24px] font-semibold outline outline-1 outline-black">WEEK {item[0]?.rounded}</div>
    )
}

function Livescore({item}){

    return (
        <div className=" text-black flex justify-center w-full text-[28px] my-10">
            <div className="flex w-1/2 justify-center items-center gap-10 bg-white py-2 duration-200 hover:bg-cyberPunk-primary rounded-xl">

                <div className="flex items-center w-full gap-8">
                    <div className="w-full flex justify-end">{item.home}</div>
                    <div><img className="h-[50px]" src={item.homeLogo}/></div>
                </div>

                <div className="flex items-center p-1 shadow-2xl">{item.homeScore==null?<div className=" w-[180px] flex justify-center">{item.time}</div>:(
                    <div className="flex justify-center w-[180px] ">
                        <div>{item.homeScore}</div>
                        <div> - </div>
                        <div>{item.awayScore}</div>
                    </div>
                )}</div>

                <div className="flex items-center w-full justify-start gap-8">
                    <div className="flex justify-start"><img className="h-[50px]" src={item.awayLogo}/></div>
                    <div>{item.away}</div>
                </div>
            </div>

        </div>
    )
}

