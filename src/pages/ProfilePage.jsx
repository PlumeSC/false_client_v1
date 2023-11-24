import { useContext } from "react"
import AdminProfile from "../component/profile/adminProfile"
import UserProfile from "../component/profile/UserProfile"
import { DataUserContext } from "../layout/Layout"




export default function ProfilePage(){
    const {dataUser} = useContext(DataUserContext)
    console.log(dataUser);
    return (<>
        <div className="outline-1 outlin flex  justify-between items-center">
            {dataUser.isAdmin?<AdminProfile/>:<UserProfile/>}
        </div>
    </>)
}