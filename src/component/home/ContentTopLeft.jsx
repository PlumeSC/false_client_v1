import { useContext } from "react"
import NewsBox from "./NewsBox"
import { HomeContext } from "./Content"



export default function ContentTopLeft(){
    const {news} = useContext(HomeContext)
 
    return (
        <div className="flex-2 w-2/3 px-8">
            <div className="w-full pb-8">
                <NewsBox font="text-[36px]" value={news[0]} header="text-[36px]"/>
            </div>
            <div className="flex justify-between w-full gap-8">
                <NewsBox font="text-[24px]" value={news[1]} header="text-[30px]"/>
                <NewsBox font="text-[24px]" value={news[2]} header="text-[30px]"/>
            </div>
        </div>
    )
}
