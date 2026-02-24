import "./Css/Update_profile.css"
const Update_profile = () =>{
    return(
        <>
            <div className="update-profile">
                <div className="update-profile-container">
                    <div className="personal-info update-profile-section">
                        <h3>Personal Info</h3>
                        <div className="update-profile-inputs">
                            <div className="update-profile-input">
                                <label htmlFor="FullName">Full Name</label>
                                <input type="text" placeholder="Fullname" />
                            </div>
                            <div className="update-profile-input">
                                <label htmlFor="userName">User Name</label>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="update-profile-btn">
                                Update
                            </div>
                        </div>
                    </div>
                    <div className="personal-info update-profile-section">
                        <h3>Email</h3>
                        <div className="update-profile-inputs">
                            <div className="update-profile-input grid2">
                                <label htmlFor="FullName">Email</label>
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className="update-profile-btn">
                                Verify Now
                            </div>
                        </div>
                    </div>
                    <div className="personal-info update-profile-section">
                        <h3>Mobile Number</h3>
                        <div className="update-profile-inputs">
                            <div className="update-profile-input grid2">
                                <label htmlFor="FullName">Mobile Number</label>
                                <input type="text" placeholder="Mobile number" />
                            </div>
                            <div className="update-profile-btn">
                                Verify Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Update_profile