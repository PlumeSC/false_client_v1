import Table from "../component/scoreboard/Table"



export default function ScoreBoardPage(){
    return (<>
        <div className="flex flex-col justify-center items-center">
            
            <div className="py-16 text-[36px] text-neon-secondary drop-shadow-logo z-0"><div>ตารางคะแนน</div></div>
            <div className="w-full">
                <Table/>
            </div>
        </div>
    </>)
}