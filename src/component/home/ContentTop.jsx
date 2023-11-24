import ContentTopRight from "./ContentTopRight"
import ContentTopLeft from "./ContentTopLeft"


export default function ContetnTop(){
    return (
        <div className="flex pt-12">
            <ContentTopLeft/>
            <ContentTopRight/>
        </div>
    )
}