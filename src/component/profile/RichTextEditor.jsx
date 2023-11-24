import ReactQuill,{Quill} from 'react-quill'
import "react-quill/dist/quill.snow.css"
import ImageResize from "quill-image-resize-module-react"
import ImageCompress from "quill-image-compress"
import { useContext } from 'react';
import { NewsContext } from './AdminProfile';


Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/imageCompress', ImageCompress);


const modules = {
    imageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize'],
        background:'black',
        padding:'100px'
      },
    imageCompress: {
        quality: 0.7,
        maxWidth: 1000,
        maxHeight: 1000,
        imageType: 'image/jpeg',
        debug: true,
        suppressErrorLogging: false,
        insertIntoEditor: undefined,
      },
    toolbar :[
        [{header :[1,2,3,4,5,6,false]}],
        [{font:[]}],
        [{size:[]}],
        ["bold","italic","underline","strike","blackquote"],
        [{'align':[]}],
        [{'color':[]},{'background':[]}],
        [
            {list:"ordered"},
            {list:"bullet"},
            {indent:"-1"},
            {indent:"+1"},
        ],
        ["link","image","video"],
        [{'direction':'rtl',}],
        ['clean'] 
    ],

}


export default function RichTextEditor(){

    const {strContent,setStrContent} = useContext(NewsContext)


    const handleContent = (value)=>{
        setStrContent(value)
    }
    

    return (
            <div className='w-full px-10'>
                <ReactQuill onChange={handleContent} value={strContent} theme='snow' placeholder='Content...' modules={modules}/>
            </div>
    )
}