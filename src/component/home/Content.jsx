import ContetnTop from "./ContentTop"
import ContentBottom from "./ContentBottom"
import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const HomeContext = createContext()

export default function Content(){
    const [news,setNews] = useState([])
    const [standing,setStanding] = useState([])
    useEffect(()=>{
        getHome()
    },[])
    
    const getHome = async()=>{
        try {
            const data = await axios.get(`http://localhost:8000/data/home`)
            setNews(data.data.news)
            setStanding(data.data.standings)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <HomeContext.Provider value={{news,standing}}>
            <div className="w-full flex flex-col">
                <ContetnTop/>
                <ContentBottom/>
            </div>
        </HomeContext.Provider>
    )
}