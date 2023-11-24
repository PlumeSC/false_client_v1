import { useState } from "react"
import setting from "../../assets/setting.svg"
import { UNSAFE_DataRouterStateContext } from "react-router-dom"




export default function AdminList({data}){
    // console.log(`data`,data);
    return (
        <div className="text-black w-4/5 h-full grid grid-cols-2 mt-10 gap-10">
            {data.map((x,y)=><List key={y} value={x}/>)}
            </div>
    )
}


function List({value}){
    const [settingModel,setSettingModel] = useState(false)
    // console.log(value);
    return (
        <div className=" w-ful h-full p-5 bg-white rounded-lg flex gap-4">
            <div className="outline-2 outline w-2/5 flex items-center">
                <img className="w-full bg-red-500" src={value.newsImg}/>
            </div>
            <div className="flex flex-col justify-between gap-5 w-3/5 outline-2 outline p-2 h-full">
                <div>
                    <div>{value.newsTitle}</div>
                    <div>{value.NewsContnt[0]?.message}</div>
                </div>
                <div className="flex justify-between">
                    <div>{value.team}</div>
                    <img onClick={()=>{
                        setSettingModel(true)
                        console.log(value);
                    }} className="w-[30px] duration-700  hover:drop-shadow-logo cursor-pointer" src={setting} alt="" />
                    {settingModel&&<SettingModel data={value}  state={setSettingModel}/>}
                </div>
            </div>
        </div>
    )
}



function SettingModel({state,data}){
    console.log(data);
    return (
        <div className="fixed top-0 inset-0 bg-black bg-opacity-80 blackdrop-blur-sm flex justify-center items-center">
            <div className="flex flex-col w-[1000px]">
                <div className="bg-white rounded-2xl text-black flex flex-col ">
                    <CloseModal state={state}/>
                    {/* {data.newsTitle}
                    {data.team} */}

                    
                    <div className="flex w-full justify-center ">
                        <form encType="multipart/form-data" className="w-[1000px] text-black rounded-xl bg-white p-10">
                            <label>Title</label>
                            <input name="title" type="text" id="title" placeholder="Title" className="text-[24px] focus:outline-none focus:ring relative w-full px-3 py-3 text-black placeholder-gray-400 bg-white border-0 rounded shadow outline-none" required/>
                            <div className="py-8">
                                <label>Choose a team :</label>
                                <select  name="team" id="team" className="px-1 bg-white">
                                    <option value={null}>none</option>
                                    <option value="liverpool">liverpool</option>
                                    <option value="Manchester City">Manchester City</option>
                                    <option value="Arsenal">Arsenal</option>
                                    <option value="NewCastle">NewCastle</option>
                                </select>
                            </div>
                            {/* {message.map((x,y)=>{
                                return <TextArea key={y} value={x} event={handleMessage}/>
                            })} */}
                            
                            <input type="button" value="Add" className="bg-red-500 pt-1 px-5 rounded-lg"/>

                            <input type="file" name="file" required/>
                            <input className="bg-blue-500 py-2 px-4 rounded-xl mt-10" type="submit" />
                        </form>
                    </div>





                </div>
            </div>
        </div>
    )
}

function CloseModal({state}){
    // const {setLoginVisible} = useContext(DataUserContext)
    return <div className=" text-black flex justify-between ">
        <div></div>
        <div className="flex justify-center items-center">
            <button className="w-[35px] h-[35px] text-xl rounded-full duration-700" onClick={()=>state(false)}>x</button>
        </div>
    </div>
}