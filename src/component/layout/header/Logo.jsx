import { Link } from "react-router-dom";



export default function Logo(){
    return (
        <div className="text-neon-secondary text-[60px] drop-shadow-logo hover:drop-shadow-hoverLogo duration-700 hover:text-neon-primary 
        flex justify-center items-center  font-semibold pt-[15px] pl-[24px] ">
            <Link to="/">Cyber False</Link>
        </div>
    )
}