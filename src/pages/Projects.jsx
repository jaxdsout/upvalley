import ImagePad from "../components/ImagePad"
import q1 from "../assets/quail/1.jpg"
import q2 from "../assets/quail/2.jpg"
import q3 from "../assets/quail/3.jpg"
import q4 from "../assets/quail/4.jpg"
import q5 from "../assets/quail/5.jpg"
import q6 from "../assets/quail/6.jpg"
import q7 from "../assets/quail/7.jpg"
import q8 from "../assets/quail/8.jpg"
import q9 from "../assets/quail/9.jpg"
import q10 from "../assets/quail/10.jpg"

import m1 from "../assets/modern/1.jpg"
import m2 from "../assets/modern/2.jpg"
import m3 from "../assets/modern/3.jpg"
import m4 from "../assets/modern/4.jpg"




const qualImgs = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
const modernImgs = [m1, m2, m3, m4];


function Projects () {

    return (
        <div className="flex flex-col items-center justify-center w-full">
           <div className="w-full h-[399px] overflow-hidden relative">
                <img
                    src={q9}
                    alt="home-pane-3"
                    className="object-cover object-[center_right] md:object-[center_right] w-full h-full"
                />
            </div>
            <h1 className="font-bold text-6xl text-center pt-10 pb-5">PROJECTS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pb-10">
                <ImagePad name={"MODERN"} images={modernImgs}>
                </ImagePad>
                <ImagePad name={"QUAIL"} images={qualImgs}>
                </ImagePad>
            </div>
          
        </div>
    )
}

export default Projects