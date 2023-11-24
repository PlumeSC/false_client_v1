



export default function TableBody({values}) {
    const form = values.form.split("")
// console.log(form);
    return ( 
            <tr className="duration-300 hover:bg-cyberPunk-text text-center border-1 border-b">
                <td>{values.rank}</td>
                <td><img className="w-[25px]" src={values.logoTeam}/></td>
                <td className="text-start">{values.team}</td>
                <td>{values.played}</td>
                <td>{values.win}</td>
                <td>{values.draw}</td>
                <td>{values.lose}</td>
                <td>{values.GF}</td>
                <td>{values.GA}</td>
                <td>{values.GD}</td>
                <td className="font-bold">{values.points}</td>
                <td className="flex justify-center items-center gap-1 mx-[-30px] py-[14px]">{form.map((x,y)=><TableForm key={y} result={x}/>)}</td>
                {/* <td>{values.next}</td> */}
            </tr>
    );
}


function TableForm({result}) {

    return(
        <span className="text-white text-[16px] mx-[2px]">

            {result===`W`?(
                <div className="w-[26px] h-[26px] rounded-full overflow-hidden bg-green-600">
                    <span className=" object-cover">W</span>
                </div>
            ):result===`D`?(
                <div className="w-[26px] h-[26px] rounded-full overflow-hidden bg-gray-400">
                    <span className=" object-cover">D</span>
                </div>
            ):(
                <div className="w-[26px] h-[26px] rounded-full overflow-hidden bg-red-600">
                    <span className=" object-cover">L</span>
                </div>
            )}
        </span>
    )
}