import "./Css/Howweworks.css"
import rightArrow from "../assets/right-arrow.png"
const HowweWoks = () => {
    return (
        <>
            <div className="howwework">
                <div className="howwework-container">
                    <h1>How It Works</h1>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> sit amet consectetur adipisicing elit. Placeat quibusdam, consequatur atque quos</h5>
                    <div className="howwework-content">
                        <div className="work">
                            <div className="top">
                                <h3 className="sl">01</h3>
                                <hr className="hr"/>
                            </div>
                            <div className="bottom">Choose Your Service</div>
                        </div>
                        <div className="work">
                            <div className="top">
                                <h3 className="sl">02</h3>
                                <hr className="hr"/>
                            </div>
                            <div className="bottom">Select Preferred Provider</div>
                        </div>
                        <div className="work">
                            <div className="top">
                                <h3 className="sl">03</h3>
                                <hr className="hr"/>
                            </div>
                            <div className="bottom">Pick Date & Time</div>
                        </div>
                        <div  className="work">
                            <div className="top">
                                <h3 className="sl">04</h3>
                            </div>
                            <div className="bottom">Pay Securely & Easily</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowweWoks