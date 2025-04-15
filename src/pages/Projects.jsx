import ImagePad from "../components/ImagePad"
import p1 from "../assets/quail/9.jpg"

function Projects () {

    return (
        <div className="flex flex-col items-center w-full">
            <img src={p1} alt="home-pane-3" className="object-cover max-h-[499px] w-full"/>
            <div className="w-full">
                <h1 className="font-bold text-6xl text-center pt-5 pb-10">PROJECTS</h1>
            </div>
            <ImagePad>
            </ImagePad>
        </div>
    )
}

export default Projects