import { useState } from "react"
import "./Carrousel.scss"
import Right from "../resources/right.svg";
import Left from "../resources/left.svg";


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
        <div className="carrousel_container">
            {data.length > 1 && (
                <>
                    <img className="carrousel_arrow carrousel_arrow_left" src={Left} alt="Arrow Left" onClick={previous} />
                    <img className="carrousel_arrow carrousel_arrow_right" src={Right} alt="Arrow Right" onClick={next} />
                </>
            )}
            <div className="slider">
                {data.map((picture, index) => {
                    return <img src={picture} alt={"Slide " + index} key={index} className={slide === index ? "slide" : "slide slide-hidden"} />;
                })}
                <span className="slide_number">{slide + 1}/{data.length}</span>
            </div>
        </div>
    )
}

export default Carrousel