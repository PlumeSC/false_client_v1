import { useState, useEffect } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
import parse from 'html-react-parser';



import "../../index.css"

import "./wysiwyg.css";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function TestAdminPost() {
    const [tag,setTag] = useState("")


    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const [convertedContent, setConvertedContent] = useState(null);
    const [img,setImg] = useState({})

    useEffect(() => {
        let html = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(html);
        setTag(createMarkup(convertedContent).__html)
    }, [editorState]);

    function createMarkup(html) {
        return {
            __html: DOMPurify.sanitize(html),
        };
    }
    console.log(img);
    console.dir(createMarkup(convertedContent).__html);        //
    // console.log(parse(tag));
    return (
        <div className="App">
            <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                hashtag={{
                    separator: " ",
                    trigger: "#",
                }}
                mention={{
                    separator: " ",
                    trigger: "@",
                    suggestions: [
                        { text: "liverpool", value: "liverpool", url: "liv" },
                        { text: "mancity", value: "mancity", url: "man" },
                        { text: "arsenal", value: "arsenal", url: "ars" },
                        { text: "new castle", value: "new castle", url: "new" },
                    ],
                }}
                toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    image: {
                        previewImage: true,
                        uploadCallback: (file) => {
                            return (
                                new Promise((resolve, reject) => {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                    resolve({
                                        data: {
                                            url: reader.result,
                                        },
                                    });
                                };
                                reader.onerror = (reason) => reject(reason);
                                
                                reader.readAsDataURL(file);
                                setImg(file)
                            }));
                        },
                        alt: { present: true, mandatory: true },
                    },
                }}
                />
                <div
                    className="preview bg-white p-10"
                    dangerouslySetInnerHTML={createMarkup(convertedContent)}>
                </div>
                <div className="bg-red-500 p-10">
                    {createMarkup(convertedContent).__html}
                </div>
                <div className="bg-blue-500 p-10">{parse(tag)}</div>
        </div>
    );
}
