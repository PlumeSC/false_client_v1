


export default function SignUpInput({title,type,value,name,event,err}){
    console.log(err);
    return(
        <div className="px-1 mb-2">
            <div className="text-2xl w-max font-normal" >{title}</div>
            <input className={`font-normal text-xl py-5 duration-1000 focus:border-black h-8 w-full bg-white px-3 border-b-2 outline-none 
            ${err?'border-red-500 focus:ring-red-300 bg-red-400': 'focus:ring-blue-300 focus:border-blue-500 border-gray-300'}`}
             placeholder={title} type={type} name={name} onChange={event}/>
        </div>
    )
}