import w3 from "../assets/d95fd3bdb487a9422716798f97117cdd.jpg"

function About () {

    return (
        <>
            <div className="w-full flex flex-col items-center">
                <img src={w3} alt="home-pane-3" className="object-cover max-h-[599px] w-full"/>
                <div className="py-8">
                    <h1 className="font-bold text-6xl text-center pt-4 pb-10">ABOUT US</h1>
                    <p className="text-center px-10">This is where we should put a short history of UpValley Electric, maybe a bio of owner.</p>
                    <br></br>
                    <br></br>
                    <p className="text-center px-10">There should be another section which breaks down each of your services with a sentence or two for each. This will help SEO.</p>
                </div>
               
            </div>
        </>
    )
}

export default About