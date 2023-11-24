import RichTextEditor from "./RichTextEditor"
import Input from "./Input"


export default function Post(){
    return (
        <div className="w-full flex justify-center">
            <div className="bg-white w-4/5">
                <div className="flex flex-col gap-7">
                    <Input/>
                    <RichTextEditor/>
                    <div className="">
                        <input className="bg-red-500 rounded-xl px-4 py-1" type="submit" />
                    </div>
                </div>
            </div>
        </div>
    )
}