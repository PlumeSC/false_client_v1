



export default function LoginInput({title,type,value,name,event}){
    return(
        <div className="px-1 mb-2">
            <div className="text-2xl w-max font-normal" >{title}</div>
            <input className="font-normal text-xl py-5 duration-1000 focus:border-black h-8 w-full px-3 border-b-2 outline-none bg-white"
             placeholder={title} type={type} name={name} onChange={event}
             
             />
        </div>
    )
}