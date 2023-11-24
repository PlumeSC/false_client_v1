import Carousel from "../carousel/carousel"
import NewsBox from "./NewsBox"
import { HomeContext } from "../Content"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export default function LatestNews(){
    const {news} = useContext(HomeContext)
    return (
        <div className="px-8 outlinae outline-1 my-10">
            <div className="py-14 text-[36px]">Latest News</div>
            <div className="flex justify-between w-full gap-8">
                <NewsBox font="text-[24px]" value={news[3]} header="text-[36px]"/>
                <NewsBox font="text-[24px]" value={news[4]} header="text-[36px]"/>
                <NewsBox font="text-[24px]" value={news[5]} header="text-[36px]"/>
            </div>
        </div>
    )
}