import { Link } from "react-router-dom";



export default function LinkTo({path,content}){
    return (<Link className="m-4 bg-neon-secondary duration-1000 shadow-shadowSec hover:shadow-shadowPriCyber hover:bg-neon-primary hover:text-neon-text 
    px-6 rounded-2xl font-semibold" to={path}>{content}</Link>)
}