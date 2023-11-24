import { useContext } from "react"
import { NewsContext } from "./AdminProfile"






export default function Input(){

    const {news,setNews} = useContext(NewsContext)


    const handleInput=(e)=>{
        if(e.target.name===`file`) return setNews({[e.target.name]:e.target.files[0]})        
        setNews({...news,[e.target.name]:e.target.value})
    console.log(e.target.value);
    }


    return (
        <div className="flex flex-col gap-5 py-5 px-5 pb-8 ">
            <span>Title</span>
            <textarea onChange={handleInput} name="title" className="bg-white outline-1 outline px-2 py-1 rounded-md" placeholder="Title..."></textarea>
            <div className="flex gap-5">
                <input onChange={handleInput} type="file" name='file'/>
                <select onChange={handleInput} name="team" id="team" className="outline outline-1 rounded-lg bg-white">
                    <option value={null}>none</option>
                    <option value="liverpool">liverpool</option>
                    <option value="Manchester City">Manchester City</option>
                    <option value="Arsenal">Arsenal</option>
                    <option value="NewCastle">NewCastle</option>
                </select>
            </div>
        </div>
    )
}