import "./Css/notifications.css"
const Notifications = ()=>{
    return(
        <>
            <div className="notifications">
                <div className="notifications-container">
                    <h3>Notifications For You</h3>
                    <div className="notifications-main">
                        <div className="notification">
                        <div className="notification-left">
                            <div className="notification-main-message">
                                Your Order is Completed
                            </div>
                            <div className="notification-sub-message">
                                Write Your Review for this Order
                            </div>
                        </div>
                        <div className="notification-right">
                            &times;
                        </div>
                    </div>
                    <div className="notification">
                        <div className="notification-left">
                            <div className="notification-main-message">
                                Your Order is Completed
                            </div>
                            <div className="notification-sub-message">
                                Write Your Review for this Order
                            </div>
                        </div>
                        <div className="notification-right">
                            .
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notifications