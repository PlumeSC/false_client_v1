import { useEffect, useState } from "react";
import TableBody from "./TableBody";
import premierLeagueLogo from "../../assets/Premier_League_Logo.png"
import axios from 'axios'




export default function Table() {
    const [data,setData] = useState([])
    useEffect(()=>{
        getData()
    },[])
    const getData = async()=>{
        try{
            const axi = await axios.get(`http://localhost:8000/data/standings`)
            setData(axi.data)
        }catch(err){
            console.log(err);
        }
    }
    // console.log(data);
    return (
        <div className="w-full flex justify-center">
            <div className="w-[1500px] bg-white rounded-3xl flex flex-col items-center pb-[60px]">
                <div><img className="h-[150px] pl-[20px] my-[-20px]" src={premierLeagueLogo}/></div>
                <table className="w-[1376px] text-xl text-neon-bgA">
                    <thead>
                        <tr className="border-y-2 border-slate-400">
                            <th>Position</th>
                            <th colSpan={2}>Club</th>
                            <th>Played</th>
                            <th>Won</th>
                            <th>Drawn</th>
                            <th>Lost</th>
                            <th>GF</th>
                            <th>GA</th>
                            <th>GD</th>
                            <th>Point</th>
                            <th>Form</th>
                            {/* <th>Next</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((x,y)=><TableBody key={y} values={x}/>)}
                    </tbody>
                </table>
            </div>

        </div>
    );
}
