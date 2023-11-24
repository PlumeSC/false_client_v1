import LinkTo from "./LinkTo";





export default function MenuBar(){

    const link=[
        {path:"/news",contetn:"ข่าว"},
        {path:"/livescore",contetn:"ไลฟ์สกอร์"},
        {path:"/scoreboard",contetn:"ตารางคะแนน"},
        {path:"/live",contetn:"ถ่ายทอดสด"},
    ]

    return (
        <div className="text-xl flex justify-center items-center h-full text-black ">
            <button>
                {link.map((x,y)=><LinkTo key={y} path={x.path} content={x.contetn}/>)}
            </button>
        </div>
    )
}