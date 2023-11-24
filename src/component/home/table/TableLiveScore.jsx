





export default function TableLiveScore({values}){
    return (
        <div>
            <div className="flex border-2 border-cyberPunk-bgB duration-500 hover:border-cyberPunk-primary bg-neon-bgA items-center my-6 mx-8">
                <div className="w-[20%] flex justify-center">{values.time}</div>
                <div className="flex flex-col w-full py-[5px]">
                    <div className="flex justify-between border-b-[1px] border-hidden shadow hover:shadow-livescoreA">
                        <div className="flex gap-3">
                            <div>logo</div>
                            <div>{values.teamA}</div>
                        </div>
                        <div className="pr-6">{values.scoreA}</div>
                    </div>
                    <div className="flex justify-between border-t-[1px] border-neon-bgA shadow hover:border-neon-primary">
                        <div className="flex gap-3">
                            <div>logo</div>
                            <div>{values.teamB}</div>
                        </div>
                        <div className="pr-6">{values.scoreB}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}