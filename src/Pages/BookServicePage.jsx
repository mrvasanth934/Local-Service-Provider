import "./Css/BookServicePage.css"
import payment1 from "../assets/payment_option (3).png"
import payment2 from "../assets/payment_option (2).png"
import payment3 from "../assets/payment_option (1).png"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { orderBase } from "../../url"
import { toast } from "react-toastify"
const BookServicePage = () => {
    const location = useLocation()
    const [data, setData] = useState()
    const navigate = useNavigate()
    const [paymentMethod, setPaymentMethod] = useState("COD")
    useEffect(() => {
        location && location.state && location.state.data && setData(location.state.data)
    }, [])
    const isFailed = async () => {
        await cookieStore.set("token", "")
        navigate("/login")
    }
    const orderSuccess = () => {
        toast.success("Order successfull")
        navigate('/profile', { state: { tab: "my-orders" } })
    }
    const orderNow = async () => {
        try {
            console.log(data[10]);
            
            const date = new Date(data[10])
            
            const response = await axios.post(`${orderBase}/create`, {
                provider: data[12],
                service: data[1],
                label: data[2],
                fullAddress: data[3],
                city: data[4],
                district: data[5],
                pincode: data[6],
                servicePrice: data[7],
                paymentMethod,
                distance: data[11],
                orderedDate:new Date(data[10])
            }, { withCredentials: true })
            response && response.data.success == false && (response.data.message == "continue with login" || response.data.message == "unAuthorized token" || response.data.message == "can`t find user" || response.data.message == "error from get profile") && isFailed()
            response && response.data.success == true && response.data.message == "order successfull" & orderSuccess()
            console.log(response);
        } catch (error) {
            error && error.message == "Network Error" && navigate("/server-error-response")
        }
    }

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
                                <h4>{data && data[8]}</h4>
                                <h6>{data && data[9]}</h6>
                                <h6>$ {data && data[7]}</h6>
                            </div>
                        </div>
                        <div className="book-left-bottom ">
                            <h3 className="order-summary-heading" >Order Summary</h3>
                            <div className="order-summary-info">
                                <div className="meta-data">
                                    <h4>Sevice Id</h4>
                                    <h5>#{data && data[1]}</h5>
                                </div>
                                <div className="meta-data">
                                    <h4>Provider Name</h4>
                                    <h5>{data && data[0]}</h5>
                                </div>
                                <div className="meta-data">
                                    <h4>Date </h4>
                                    <h5>{data && data[10]}</h5>
                                </div>
                                <div className="meta-data">
                                    <h4>Location</h4>
                                    <h5>{data && data[4]}</h5>
                                </div>
                                <div className="meta-data">
                                    <h4>Distance</h4>
                                    <h5>{data && data[11]} Km</h5>
                                </div>
                                <hr />
                                <div className="meta-data">
                                    <h4>Service Fee</h4>
                                    <h5>$ {data && data[7]}</h5>
                                </div>
                                <div className="meta-data">
                                    <h4>Extra Charges</h4>
                                    <h5>$ {data && data[11]}</h5>
                                </div>
                                <hr />
                                <div className="meta-data">
                                    <h4>Total</h4>
                                    <h5>$ {data && Number(data[11]) * 3 + data[7]}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="book-right">
                        <div className="book-right-top">
                            <h3>Payment Methods</h3>
                            <div className="payment-options">
                                <div onClick={() => { setPaymentMethod("COD") }} className={`${paymentMethod == "COD" ? "payment-option payment-option-choose" : "payment-option"}`}>
                                    <div className="payment-img"><img src={payment3} alt="" /></div>
                                    <h3>COD</h3>
                                </div>
                                <div onClick={() => { setPaymentMethod("CARD") }} className={`${paymentMethod == "CARD" ? "payment-option payment-option-choose" : "payment-option"}`}>
                                    <div className="payment-img"><img src={payment2} alt="" /></div>
                                    <h3>Debit Card</h3>
                                </div>
                                <div onClick={() => { setPaymentMethod("UPI") }} className={`${paymentMethod == "UPI" ? "payment-option payment-option-choose" : "payment-option"}`}>
                                    <div className="payment-img"><img src={payment1} alt="" /></div>
                                    <h3>UPI</h3>
                                </div>
                            </div>
                        </div>
                        <div className="book-right-bottom">
                            {
                                paymentMethod == "COD" && <div className="card">
                                    <div onClick={() => { orderNow() }} className="make-payment-btn">
                                        Order now Pay Later
                                    </div>
                                </div>
                            }
                            {
                                paymentMethod == "CARD" && <div className="card">
                                    <h3>Card Details</h3>
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
                                        <div className="card-inp"><input type="text" placeholder="567" /></div>
                                    </div>
                                    <div className="make-payment-btn">
                                        Make Payment Now
                                    </div>
                                </div>
                            }
                            {
                                paymentMethod == "UPI" && <div className="card">
                                    <h3>Upi Details</h3>
                                    <div className="card-info">
                                        <label htmlFor="">Enter Your Upi Id</label>
                                        <div className="card-inp"><input type="text" placeholder="mrvasanth93ok@sbi" /></div>
                                    </div>
                                    <div className="make-payment-btn">
                                        Make Payment Now
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookServicePage