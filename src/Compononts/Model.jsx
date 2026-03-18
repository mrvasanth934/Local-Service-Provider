import { useEffect, useRef } from "react";
import "./Css/Model.css"
const Model = (models) =>{
    const model = useRef()
    const Element = models.element
    useEffect(()=>{
        if(models.width){
            model.current.style.width = models.width
        }
    })
    return(
        <>
            <div ref={model} className="model">
                <div className="model-container">
                    <Element/>
                </div>
            </div>
        </>
    )
}

export default Model;