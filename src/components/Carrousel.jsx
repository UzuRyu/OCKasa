import { useState } from "react"
import "./Carrousel.scss"

function Carrousel({ data }) {
    console.log(data);
    const [slide, setSlide] = useState(0);
    
    const next = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1)
        console.log(slide)
    }

    const previous = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1)
        console.log(slide)
    }

    return (
        <div className="">
            {data.length > 1 && (
                <>
                    <span className="" onClick={previous}>{"<"}</span>
                    <span className="" onClick={next}>{">"}</span>
                </>
            )}
            <div className="">
                {data.map((picture, index) => {
                    return <img src={picture} alt={"Slide " + index} key={index} className={slide === index ? "slide" : "slide slide-hidden"}/>;
                })}
            </div>
        </div>
    )
}

export default Carrousel