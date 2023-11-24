import { Link } from "react-router-dom"
import man1 from "../../../../assets/people/man1.jpg"
import { useContext, useEffect } from "react"
// import { DataContext } from "../../../../layout/Navbar"
import { DataUserContext } from "../../../../layout/Layout"





export default function UserNavbar(){
    const {setIsLogin,dataUser,setDataUser} = useContext(DataUserContext)
    const Team = `Liverpool`

    const handleLogout = () =>{
        localStorage.removeItem(`ACCESS_TOKEN`)
        localStorage.removeItem(`DATA`)
        setDataUser({})
        setIsLogin(false)
    }

    return (
        <div className="flex gap-6 text-xl items-center justify-center">
            <div className="cursor-pointer">{Team}</div>
            <div className="flex gap-6 items-center justify-center">
                <div className="cursor-pointer"><Link to={`profile/${dataUser?.id}`}>{dataUser?.firstname}</Link></div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} className="rounded-full overflow-hidden cursor-pointer">

                        <img className="w-[45px] h-[45px] object-cover" src={man1}/>
                        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow text-xl text-neon-primary bg-neon-secondary rounded-box w-[200px] mt-6">
                            <li><Link to={`profile/${dataUser?.id}`}>Profile</Link></li>
                            <li><Link to={``} onClick={handleLogout}>Logout</Link></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    ) 

}