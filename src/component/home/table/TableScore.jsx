import TableBody from "./TableBody"


export default function TableScore({result}){
    return (
        <div className="py-12  flex justify-center text-cyberPunk-bgB">



                <table className="border-collapse w-[70%] rounded-xl bg-white">
                    <thead className="text-sm">
                        <tr>
                            <th colSpan="3" className="border-b border-slate-600 ">สโมสร</th>
                            <th className="border-b border-slate-600 w-[40px] h-[30px]">แข่ง</th>
                            <th className="border-b border-slate-600 w-[40px] h-[30px]">ชนะ</th>
                            <th className="border-b border-slate-600 w-[40px] h-[30px]">เสมอ</th>
                            <th className="border-b border-slate-600 w-[40px] h-[30px]">แพ้</th>
                            <th className="border-b border-slate-600 w-[40px] h-[30px]">แต้ม</th>
                        </tr>
                    </thead>
                    <tbody className="text-xl">
                        {result.map((x,y)=><TableBody key={y} values={x}/>)}
                    </tbody>
                </table>





            </div>
    )
}

