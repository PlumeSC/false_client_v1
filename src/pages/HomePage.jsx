import Hero from "../component/home/Hero"
import Content from "../component/home/Content";




export default function HomePage() {
    return ( 
        <div className="text-neon-text ">
            <div className="flex flex-col justify-center w-full items-center">
                <Hero/>
                <Content/>
            </div>
        </div>
    );
}
