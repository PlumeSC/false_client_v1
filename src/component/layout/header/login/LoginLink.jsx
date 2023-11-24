import facebook1 from "../../../../assets/facebook1.svg"
import twitter1 from "../../../../assets/twitter1.svg"
import google1 from "../../../../assets/google1.svg"
import facebook2 from "../../../../assets/facebook2.png"
import twitter2 from "../../../../assets/twitter2.svg"
import google2 from "../../../../assets/google2.svg"
import { useState } from "react"

export default function LoginLink(){
    const [twitter,setTwitter] = useState(true)
    const [facebook,setFacebook] = useState(true)
    const [google,setGoogle] = useState(true)
    return <div className="flex justify-center gap-3 mb-14 mt-6">
        <img className="h-[50px] cursor-pointer" onMouseLeave={()=>setFacebook(true)} onMouseEnter={()=>setFacebook(false)} src={facebook?facebook1:facebook2} alt="facebook" />
        <img className="h-[50px] cursor-pointer" onMouseLeave={()=>setTwitter(true)} onMouseEnter={()=>setTwitter(false)} src={twitter?twitter1:twitter2} alt="twitter" />
        <img className="h-[50px] cursor-pointer" onMouseLeave={()=>setGoogle(true)} onMouseEnter={()=>setGoogle(false)} src={google?google1:google2} alt="twitter" />
    </div>
}
