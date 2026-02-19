import "./Css/WhyChooseUs.css"
import why2 from "../assets/wyh-choose-1.jfif"
const WhyChooseUs = () =>{
    return(
        <>
            <div className="whyChoose-us">
                <h1 className="heading-why-choose">Who Are Us</h1>
                <div className="whyChoose-us-container">
                    <div className="content">
                    <h3 className="para-why-choose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae harum mollitia, laboriosam tenetur laudantium nostrum voluptas adipisci molestias commodi? Eum, quo! Labore assumenda ut, at pariatur beatae temporibus inventore maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laudantium consequuntur veniam quod voluptate expedita hic iure, fuga nesciunt pariatur sit est repellendus modi laborum nobis incidunt molestiae inventore laboriosam!</h3>
                    </div>
                    <div className="reasons">
                        <div className="reason chat">
                            <div><img src={why2} alt="" /></div>
                        </div>
                        <div className="reason task">
                            <div><img src={why2} alt="" /></div>
                        </div>
                        <div className="reason schedule">
                            <div><img src={why2} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs