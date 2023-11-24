import TableLiveScore from "./table/TableLiveScore"
import TableScore from "./table/TableScore"
import {HomeContext} from "./Content"
import { useContext } from "react"



const result= [
    {position:1,club:"l",teamName:"TeamA",played:7,won:6,drawn:0,lost:1,points:18},
    {position:2,club:"l",teamName:"TeamB",played:7,won:5,drawn:2,lost:0,points:17},
    {position:3,club:"l",teamName:"TeamC",played:7,won:5,drawn:2,lost:0,points:17},
    {position:4,club:"l",teamName:"TeamD",played:7,won:5,drawn:1,lost:1,points:16},
    {position:5,club:"l",teamName:"TeamE",played:7,won:5,drawn:0,lost:2,points:15},
    {position:1,club:"l",teamName:"TeamA",played:7,won:6,drawn:0,lost:1,points:18},
    {position:2,club:"l",teamName:"TeamB",played:7,won:5,drawn:2,lost:0,points:17},
    {position:3,club:"l",teamName:"TeamC",played:7,won:5,drawn:2,lost:0,points:17},
    {position:4,club:"l",teamName:"TeamD",played:7,won:5,drawn:1,lost:1,points:16},
    {position:5,club:"l",teamName:"TeamE",played:7,won:5,drawn:0,lost:2,points:15},
    {position:11,club:"l",teamName:"TeamA",played:7,won:6,drawn:0,lost:1,points:18},
    {position:12,club:"l",teamName:"TeamB",played:7,won:5,drawn:2,lost:0,points:17},
    {position:13,club:"l",teamName:"TeamC",played:7,won:5,drawn:2,lost:0,points:17},
    {position:14,club:"l",teamName:"TeamD",played:7,won:5,drawn:1,lost:1,points:16},
    {position:15,club:"l",teamName:"TeamE",played:7,won:5,drawn:0,lost:2,points:15},
    {position:11,club:"l",teamName:"TeamA",played:7,won:6,drawn:0,lost:1,points:18},
    {position:12,club:"l",teamName:"TeamB",played:7,won:5,drawn:2,lost:0,points:17},
    {position:13,club:"l",teamName:"TeamC",played:7,won:5,drawn:2,lost:0,points:17},
    {position:14,club:"l",teamName:"TeamD",played:7,won:5,drawn:1,lost:1,points:16},
    {position:15,club:"l",teamName:"TeamE",played:7,won:5,drawn:0,lost:2,points:15},
]




const liveScore=[
    {time:88,teamA:`TeamA`,teamB:`TeabmB`,scoreA:7,scoreB:0},
    {time:76,teamA:`TeamB`,teamB:`TeabmA`,scoreA:2,scoreB:1},
    {time:`FT`,teamA:`TeamB`,teamB:`TeabmA`,scoreA:0,scoreB:5},
    {time:`FT`,teamA:`TeamA`,teamB:`TeabmB`,scoreA:4,scoreB:0},
    {time:`FT`,teamA:`TeamA`,teamB:`TeabmB`,scoreA:7,scoreB:0},
    {time:`FT`,teamA:`TeamA`,teamB:`TeabmB`,scoreA:7,scoreB:0},
]


export default function ContentTopRight(){
    const {standing} = useContext(HomeContext)
    // console.log(standing);
    return (
        <div className=" ring- flex-1 w-1/3">
            <div>
                <TableScore result={standing}/>
            </div>
            <div>
                {/* {liveScore.map((x,y)=><TableLiveScore key={y} values={x}/>)} */}
            </div>
        </div>
    )
}