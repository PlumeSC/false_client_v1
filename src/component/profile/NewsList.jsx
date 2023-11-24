import axios from "axios"
import { useEffect, useState } from "react"


export default function NewsList(){

    const [list,setList] = useState([1,2,3])
    const [select,setSelect] = useState(null)


    useEffect(()=>{
        viewPost()
    },[])

    const viewPost =()=>{
        try {
            axios.get('http://localhost:8000/admin/getAll')
            .then(res=>{
                // console.log(res.data);
                setList(res.data)
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="flex flex-col gap-5 w-full h-full">
            {list.map((item,index)=>{
                return <List key={index} data={item} select={select} setSelect={setSelect} index={index}/>
            })}
        </div>
    )
}


function List({data,index,select,setSelect}){

    return (
        <div className="bg-white rounded-2xl px-10 py-5">
            <div onClick={()=>{
                if (index===select) return setSelect(null)
                setSelect(index)
                }}>
                <div className="text-xl">{data.title}</div>
                <div className="flex justify-end gap-5">
                    <div>
                        {data.team}
                    </div>
                    <div>
                        {data.date?.slice(0,10)}
                    </div>
                    </div>
            </div>
            {select===index?<Infomation data={data} state={setSelect}/>:null}
        </div>
    )
}

function Infomation({data,state}){
    return (
        <div>
            <ReactQuill onChange={handleContent} value={strContent} theme='snow' placeholder='Content...' modules={modules}/>
        </div>
    )
}