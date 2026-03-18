import "./Css/Dashboard.css";
import { PiUsersThree } from "react-icons/pi";
import { FaServicestack } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { MdConnectWithoutContact } from "react-icons/md";

import { BsChatSquareQuoteFill } from "react-icons/bs";
import { MdMedicalServices } from "react-icons/md"; // service icon
import { FaBoxesPacking } from "react-icons/fa6";
import { MdOutlinePayments } from "react-icons/md";

const AdminDashboard = () => {
    const stats = [
        {
            icon: <PiUsersThree className="dashboard-card-img-logo" color="#ffffff"/>,
            title: "Total Users",
            count: "1121",
            color: "#FF406D",
            bgColor: "#FFE9EC",
            borderColor:"#530b1c29"
        },
        {
            icon: <MdConnectWithoutContact className="dashboard-card-img-logo" color="white"/>,
            title: "Total providers",
            count: "327",
            color: "#4389F7",
            bgColor: "#E5EEFF",
            borderColor:"#0f254a3e"
        },
        {

            icon: <FaServicestack className="dashboard-card-img-logo" color="white"/>,
            title: "Total Services",
            count: "450",
            color: "rgb(247, 148, 67)",
            bgColor: "rgb(255, 242, 229)",
            borderColor:"#0f254a3e"
        },
        {
            icon: <TbTruckDelivery className="dashboard-card-img-logo" color="white"/>,
            title: "Total Order",
            count: "700",
            color: "#7A31E9",
            bgColor: "#EEE6FE",
            borderColor:"#1b083842"
        },
        {
            icon: <GiMoneyStack className="dashboard-card-img-logo" color="white"/>,
            title: "Total Revenue",
            count: "$21,000",
            color: "#42CC7E",
            bgColor: "#D8F0E0",
            borderColor:"#073c1e3f"
        }
    ]
    return (
        <div className="app-layout">
            <div className="admin-sidebar">
                <div className="logo">
                    <div className="logo-box">H</div>
                    <span>Local provider</span>
                </div>
                <ul className="menu">
                    <li className="active"> Dashboard</li>
                    <li> Users</li>
                    <li>Providers</li>
                    <li>Orders</li>
                    <li> Payments</li>
                </ul>
            </div>
            <div className="main">
                <div className="navbar">
                    <input className="search" placeholder="Search..." />
                </div>
                <div className="dashboard">
                    <div className="stats-grid">
                        {
                            stats.map((value,i) => {
                                return <div key={i} style={{backgroundColor:value.bgColor,borderColor:value.borderColor}} className="dashboard-card">
                                    <div style={{backgroundColor:value.color}} className="dashboard-card-img">
                                        {value.icon}
                                    </div>
                                    <div style={{color:value.color}} className="dashboard-card-title">{value.title}</div>
                                    <div style={{color:value.color}} className="dashboard-card-price-count">
                                        {value.count}
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className="dashboard-todays-activity">
                        <h3>Today`s Activity</h3>
                        <div className="activites">
                            <div className="activity">
                                <div className="activity-img">
                                    <BsChatSquareQuoteFill color="#f21b1b83" className="dashboard-card-img-logo"/>
                                </div>
                                <div className="activity-head-desc">
                                    <h4>New Service Request</h4>
                                    <h6>Customer requested a new service</h6>
                                </div>
                            </div>
                            <div className="activity">
                                <div className="activity-img">
                                    <MdMedicalServices color="#f21b1b83" className="dashboard-card-img-logo"/>
                                </div>
                                <div className="activity-head-desc">
                                    <h4>New Provider Request</h4>
                                    <h6>New provider submitted join request.</h6>
                                </div>
                            </div>
                            <div className="activity">
                                <div className="activity-img">
                                    <FaBoxesPacking color="#f21b1b83" className="dashboard-card-img-logo"/>
                                </div>
                                <div className="activity-head-desc">
                                    <h4>Latest Bookings</h4>
                                    <h6>Customers recently booked services online</h6>
                                </div>
                            </div>
                            <div className="activity">
                                <div className="activity-img">
                                    <MdOutlinePayments color="#f21b1b83" className="dashboard-card-img-logo"/>
                                </div>
                                <div className="activity-head-desc">
                                    <h4>Latest Payments</h4>
                                    <h6>Customers recently booked services.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tables-grid">
                        <div className="table-card">
                            <div className="table-header">
                                <h3>Manage Users</h3>
                                <span>View All</span>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Sign Up</th>
                                        <th>Services</th>
                                        <th>Status</th>
                                    </tr>
                                    
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="name">
                                            John
                                        </td>
                                        <td>john@mail.com</td>
                                        <td>12 Feb</td>
                                        <td>3</td>
                                        <td><span className="badge green">Active</span></td>
                                    </tr>
                                    <tr>
                                        <td className="name">
                                            John
                                        </td>
                                        <td>john@mail.com</td>
                                        <td>12 Feb</td>
                                        <td>3</td>
                                        <td><span className="badge green">Active</span></td>
                                    </tr>
                                    <tr>
                                        <td className="name">
                                            John
                                        </td>
                                        <td>john@mail.com</td>
                                        <td>12 Feb</td>
                                        <td>3</td>
                                        <td><span className="badge green">Active</span></td>
                                    </tr>
                                    <tr>
                                        <td className="name">
                                            John
                                        </td>
                                        <td>john@mail.com</td>
                                        <td>12 Feb</td>
                                        <td>3</td>
                                        <td><span className="badge green">Active</span></td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                        <div className="table-card">

                            <div className="table-header">
                                <h3>Manage Providers</h3>
                                <span>View All</span>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Service</th>
                                        <th>Contact</th>
                                        <th>Verification</th>
                                        <th>Reviews</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>David</td>
                                        <td>Plumbing</td>
                                        <td>9876543210</td>
                                        <td><span className="badge purple">Verified</span></td>
                                        {/* <td><FaStar className="star" /> 4.8</td> */}
                                    </tr>
                                    <tr>
                                        <td>David</td>
                                        <td>Plumbing</td>
                                        <td>9876543210</td>
                                        <td><span className="badge purple">Verified</span></td>
                                        {/* <td><FaStar className="star" /> 4.8</td> */}
                                    </tr>
                                    <tr>
                                        <td>David</td>
                                        <td>Plumbing</td>
                                        <td>9876543210</td>
                                        <td><span className="badge purple">Verified</span></td>
                                        {/* <td><FaStar className="star" /> 4.8</td> */}
                                    </tr>
                                    <tr>
                                        <td>David</td>
                                        <td>Plumbing</td>
                                        <td>9876543210</td>
                                        <td><span className="badge purple">Verified</span></td>
                                        {/* <td><FaStar className="star" /> 4.8</td> */}
                                    </tr>
                                    
                                </tbody>
                            </table>

                        </div>
                        <div className="table-card">
                            <div className="table-header">
                                <h3>Manage Orders</h3>
                                <span>View All</span>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Customer</th>
                                        <th>Service</th>
                                        <th>Provider</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#1024</td>
                                        <td>John</td>
                                        <td>AC Repair</td>
                                        <td>David</td>
                                        <td><span className="badge purple">In Progress</span></td>
                                    </tr>
                                    <tr>
                                        <td>#1024</td>
                                        <td>John</td>
                                        <td>AC Repair</td>
                                        <td>David</td>
                                        <td><span className="badge purple">In Progress</span></td>
                                    </tr>
                                    <tr>
                                        <td>#1024</td>
                                        <td>John</td>
                                        <td>AC Repair</td>
                                        <td>David</td>
                                        <td><span className="badge purple">In Progress</span></td>
                                    </tr>
                                    <tr>
                                        <td>#1024</td>
                                        <td>John</td>
                                        <td>AC Repair</td>
                                        <td>David</td>
                                        <td><span className="badge purple">In Progress</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="table-card">

                            <div className="table-header">
                                <h3>Manage Payments</h3>
                                <span>View All</span>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Payment ID</th>
                                        <th>User</th>
                                        <th>Amount</th>
                                        <th>Method</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#P245</td>
                                        <td>John</td>
                                        <td>$120</td>
                                        <td>Credit Card</td>
                                        <td>10 Mar</td>
                                    </tr>
                                    <tr>
                                        <td>#P245</td>
                                        <td>John</td>
                                        <td>$120</td>
                                        <td>Credit Card</td>
                                        <td>10 Mar</td>
                                    </tr>
                                    <tr>
                                        <td>#P245</td>
                                        <td>John</td>
                                        <td>$120</td>
                                        <td>Credit Card</td>
                                        <td>10 Mar</td>
                                    </tr>
                                    <tr>
                                        <td>#P245</td>
                                        <td>John</td>
                                        <td>$120</td>
                                        <td>Credit Card</td>
                                        <td>10 Mar</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;