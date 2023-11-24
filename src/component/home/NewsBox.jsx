import { useNavigate } from "react-router-dom";
import img from "../../assets/hero.svg";

const text = ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia incidunt rem libero, error culpa aliquam alias dolores modi itaque tempore ipsam. Temporibus ducimus atque dolorem fugiat! Doloribus eaque ea minima!
Perferendis quibusdam debitis, officia dicta voluptate nam repellat mollitia ea modi esse deleniti, consequuntur voluptas veniam! Blanditiis quasi consequatur itaque amet, ab quod! Accusamus hic`;
export default function NewsBox({font,header,value}) {
    const navigate = useNavigate()
    return (
            <div onClick={()=>navigate(`/news/${value.id}`)} className="w-full cursor-pointer p-10 flex flex-col items-center border-4 shadow-shadowPri border-cyberPunk-bgA duration-700 hover:border-cyberPunk-primary hover:shadow-shadowPriCyber">
                <img src={value?.heroImg} className="object-contain" />
                <div className="pt-[4%] pb-[4%] px-[3%] w-full ">
                    <div className={header+" "}>{value?.title}</div>
                    {/* <div className="text-xl whitespace-pre-line">{text}</div> */}
                    {/* <div className={font+" h-[118px] overflow-hidden "}>{text}</div> */}
                </div>
            </div>
    );
}