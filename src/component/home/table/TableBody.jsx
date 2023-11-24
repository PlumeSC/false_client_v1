




export default function TableBody({values}){
    return(
        <tr className="hover:bg-coolGray-400">
            <td className="border-y border-slate-700 py-[6px] text-center">{values.rank}</td>
            <td className="border-y border-slate-700 text-center">
                <img className="w-[50px] p-1" src={values.logoTeam}/></td>
            <td className="border-y border-slate-700">{values.team}</td>
            <td className="border-y border-slate-700 text-center">{values.played}</td>
            <td className="border-y border-slate-700 text-center">{values.win}</td>
            <td className="border-y border-slate-700 text-center">{values.draw}</td>
            <td className="border-y border-slate-700 text-center">{values.lose}</td>
            <td className="border-y border-slate-700 text-center">{values.points}</td>
        </tr>
    )
}