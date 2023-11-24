import Carousel from "../carousel/carousel"
import NewsBox from "./NewsBox"


export default function HilightLight(){
    return (
        <div className="px-8 outlinae outline-1 my-10">
            <div className="py-14 text-[36px]">Hilight</div>
            <div className="flex justify-between w-full gap-8">
                <NewsBox font="text-[24px]" header="text-[36px]"/>
                <NewsBox font="text-[24px]" header="text-[36px]"/>
                <NewsBox font="text-[24px]" header="text-[36px]"/>
            </div>
        </div>
    )
}