import "./Css/BookServicePage.css"
import payment1 from "../assets/payment_option (3).png"
import payment2 from "../assets/payment_option (2).png"
import payment3 from "../assets/payment_option (1).png"
const BookServicePage = () => {

    const times = [
        {
            "time": "09 AM",
            "colour": "rgba(59, 130, 246, 0.1)",
            "txt-colour": "#3b82f6ff",
        },
        {
            "time": "10 AM",
            "colour": "rgba(99, 101, 241, 0.1)",
            "txt-colour": "#6365f1ff"
        },
        {
            "time": "11 AM",
            "colour": "rgba(34, 197, 94, 0.1)",
            "txt-colour": "#22c55eff"
        },
        {
            "time": "12 AM",
            "colour": "rgba(236, 72, 153, 0.1)",
            "txt-colour": "#ec4899ff",

        },
        {
            "time": "01PM",
            "colour": "rgba(168, 85, 247, 0.1)",
            "txt-colour": "#a855f7ff",
        },
        {
            "time": "02 PM",
            "colour": "rgba(234, 179, 8, 0.1)",
            "txt-colour": "#eab308ff",
        },
        {
            "time": "03 PM",
            "colour": "rgba(249, 115, 22, 0.1)",
            "txt-colour": "#f97316ff",
        },
        {
            "time": "04 PM",
            "colour": "rgba(20, 184, 166, 0.1)",
            "txt-colour": "rgba(20, 184, 166, 1)",
        },
        {
            "time": "05 PM",
            "colour": "rgba(244, 63, 94, 0.1)",
            "txt-colour": "rgba(244, 63, 94, 1)",
        },
        {
            "time": "06 PM",
            "colour": "rgba(132, 204, 22, 0.1)",
            "txt-colour": "rgba(132, 204, 22, 1)",
        },
    ]

    return (
        <>
            <div className="book-service">
                <div className="book-service-container">
                    <div className="book-left">
                        <div className="book-left-top">
                            <div className="book-left-top-left">
                                <div className="book-profile-img">
                                </div>
                            </div>
                            <div className="book-left-top-right">
                                <h4>Vasanth</h4>
                                <h6>Ac Service Provider</h6>
                                <h6>$ 1500/hour</h6>
                            </div>
                        </div>
                        {/* <div className="book-left-middle">
                            <div className="date-picker">
                                <input type='date' />
                            </div>
                            <div className="choose-time">
                                <select name="time" id="">
                                    {
                                        times.map((time)=>{
                                            return <option value={time.time}>{time.time}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div> */}
                        <div className="book-left-bottom ">
                            <h3 className="order-summary-heading" >Order Summary</h3>
                            <div className="order-summary-info">
                                <div className="meta-data">
                                    <h4>Sevice Id</h4>
                                    <h5>#92252342342873</h5>
                                </div>
                                <div className="meta-data">
                                    <h4>Provider Id</h4>
                                    <h5>#98765434567888</h5>
                                </div>
                                <div className="meta-data">
                                    <h4>Date </h4>
                                    <h5>19-07-2002</h5>
                                </div>
                                <div className="meta-data">
                                    <h4>Time</h4>
                                    <h5>11 AM</h5>
                                </div>
                                <div className="meta-data">
                                    <h4>Location</h4>
                                    <h5>Tamilnadu India</h5>
                                </div>
                                <div className="meta-data">
                                    <h4>Payment Method</h4>
                                    <h5>Cash On Delivery</h5>
                                </div>
                                <hr />
                                <div className="meta-data">
                                    <h4>Service Fee</h4>
                                    <h5>$ 1500</h5>
                                </div>
                                <div className="meta-data">
                                    <h4>Tax (8%)</h4>
                                    <h5>$8</h5>
                                </div>
                                <hr />
                                <div className="meta-data">
                                    <h4>Total</h4>
                                    <h5>$ 1508</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="book-right">
                        <div className="book-right-top">
                            <h3>Payment Methods</h3>
                            <div className="payment-options">
                                <div className="payment-option">
                                    <div className="payment-img"><img src={payment1} alt="" /></div>
                                    <h3>UPI</h3>
                                </div>
                                <div className="payment-option">
                                    <div className="payment-img"><img src={payment2} alt="" /></div>
                                    <h3>Debit Card</h3>
                                </div>
                                <div className="payment-option">
                                    <div className="payment-img"><img src={payment3} alt="" /></div>
                                    <h3>COD</h3>
                                </div>
                            </div>
                        </div>
                        <div className="book-right-bottom">
                            <h3>payment</h3>
                            <div className="card">
                                <div className="card-info">
                                    <label htmlFor="">Enter Your Card Number</label>
                                    <div className="card-inp"><input type="text" placeholder="1234 4567 7891 2345" /></div>
                                </div>
                                <div className="card-info">
                                    <label htmlFor="">Enter Expiration Date</label>
                                    <div className="card-inp"><input type="text" placeholder="10 / 26" /></div>
                                </div>
                                <div className="card-info">
                                    <label htmlFor="">Enter CVV Number</label>
                                    <div className="card-inp"><input type="text" placeholder="567"/></div>
                                </div>
                                <div className="card-info">
                                    <label htmlFor="">Enter 4 digit OTP</label>
                                    <div className="card-inp"><input type="text" placeholder="1234"/></div>
                                </div>
                                <div className="make-payment-btn">
                                    Make Payment Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookServicePage