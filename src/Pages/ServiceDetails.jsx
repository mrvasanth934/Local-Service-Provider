import axios from 'axios';
import './Css/ServiceDetails.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { serviceBase } from '../../url';
import { useEffect, useState } from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from "react-leaflet";
const ServiceDetails = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isError, setIsError] = useState(false)
  const serviceId = location.pathname.split('/')[2];
  const [service, setService] = useState()
  const [position, setPosition] = useState([13.0827, 80.2707])
  const [userLocation, setUserLocation] = useState(null)
  const tamilNaduLocations = [
    {
      district: "Ariyalur",
      cities: ["Ariyalur", "Sendurai", "Udayarpalayam", "Jayankondam", "Andimadam", "Varadarajanpettai"]
    },
    {
      district: "Chengalpattu",
      cities: ["Chengalpattu", "Tambaram", "Guduvancheri", "Maraimalai Nagar", "Madurantakam", "Thirukazhukundram"]
    },
    {
      district: "Chennai",
      cities: ["T Nagar", "Anna Nagar", "Adyar", "Velachery", "Tambaram", "Porur", "Guindy", "Mylapore", "Perambur", "Ambattur", "Avadi"]
    },
    {
      district: "Coimbatore",
      cities: ["Coimbatore", "Gandhipuram", "RS Puram", "Peelamedu", "Saravanampatti", "Singanallur", "Mettupalayam", "Pollachi", "Valparai", "Sulur"]
    },
    {
      district: "Cuddalore",
      cities: ["Cuddalore", "Chidambaram", "Panruti", "Neyveli", "Vriddhachalam", "Bhuvanagiri", "Kurinjipadi"]
    },
    {
      district: "Dharmapuri",
      cities: ["Dharmapuri", "Harur", "Palacode", "Pennagaram", "Pappireddipatti"]
    },
    {
      district: "Dindigul",
      cities: ["Dindigul", "Palani", "Oddanchatram", "Nilakottai", "Vedasandur", "Natham", "Kodaikanal"]
    },
    {
      district: "Erode",
      cities: ["Erode", "Bhavani", "Gobichettipalayam", "Perundurai", "Sathyamangalam", "Kodumudi"]
    },
    {
      district: "Kallakurichi",
      cities: ["Kallakurichi", "Sankarapuram", "Chinnasalem", "Ulundurpet", "Tirukoilur"]
    },
    {
      district: "Kanchipuram",
      cities: ["Kanchipuram", "Sriperumbudur", "Uthiramerur", "Walajabad", "Kundrathur"]
    },
    {
      district: "Kanyakumari",
      cities: ["Nagercoil", "Marthandam", "Colachel", "Kuzhithurai", "Kanyakumari", "Karungal"]
    },
    {
      district: "Karur",
      cities: ["Karur", "Kulithalai", "Krishnarayapuram", "Aravakurichi", "Pugalur"]
    },
    {
      district: "Krishnagiri",
      cities: ["Krishnagiri", "Hosur", "Denkanikottai", "Pochampalli", "Uthangarai"]
    },
    {
      district: "Madurai",
      cities: ["Madurai", "Anna Nagar", "KK Nagar", "Tallakulam", "Melur", "Usilampatti", "Tirumangalam", "Thirupparankundram"]
    },
    {
      district: "Mayiladuthurai",
      cities: ["Mayiladuthurai", "Sirkazhi", "Kuthalam", "Tharangambadi"]
    },
    {
      district: "Nagapattinam",
      cities: ["Nagapattinam", "Velankanni", "Kilvelur", "Thirukkuvalai"]
    },
    {
      district: "Namakkal",
      cities: ["Namakkal", "Rasipuram", "Tiruchengode", "Paramathi Velur", "Kolli Hills"]
    },
    {
      district: "Nilgiris",
      cities: ["Ooty", "Coonoor", "Kotagiri", "Gudalur", "Pandalur"]
    },
    {
      district: "Perambalur",
      cities: ["Perambalur", "Veppanthattai", "Kunnam", "Alathur"]
    },
    {
      district: "Pudukkottai",
      cities: ["Pudukkottai", "Aranthangi", "Avudaiyarkoil", "Alangudi", "Gandarvakottai"]
    },
    {
      district: "Ramanathapuram",
      cities: ["Ramanathapuram", "Paramakudi", "Rameswaram", "Kamuthi", "Kilakarai"]
    },
    {
      district: "Ranipet",
      cities: ["Ranipet", "Arakkonam", "Walajah", "Sholingur"]
    },
    {
      district: "Salem",
      cities: ["Salem", "Attur", "Mettur", "Omalur", "Edappadi", "Yercaud", "Sankari"]
    },
    {
      district: "Sivaganga",
      cities: ["Sivaganga", "Karaikudi", "Devakottai", "Manamadurai", "Tirupathur"]
    },
    {
      district: "Tenkasi",
      cities: ["Tenkasi", "Shenkottai", "Sankarankovil", "Kadayanallur", "Alangulam"]
    },
    {
      district: "Thanjavur",
      cities: ["Thanjavur", "Kumbakonam", "Papanasam", "Pattukkottai", "Orathanadu"]
    },
    {
      district: "Theni",
      cities: ["Theni", "Periyakulam", "Cumbum", "Bodinayakanur", "Uthamapalayam"]
    },
    {
      district: "Thoothukudi",
      cities: ["Thoothukudi", "Tiruchendur", "Kovilpatti", "Ettayapuram", "Sathankulam"]
    },
    {
      district: "Tiruchirappalli",
      cities: ["Trichy", "Srirangam", "Thillai Nagar", "Woraiyur", "Lalgudi", "Manapparai"]
    },
    {
      district: "Tirunelveli",
      cities: ["Tirunelveli", "Palayamkottai", "Ambasamudram", "Cheranmahadevi"]
    },
    {
      district: "Tirupattur",
      cities: ["Tirupattur", "Ambur", "Vaniyambadi", "Natrampalli"]
    },
    {
      district: "Tiruppur",
      cities: ["Tiruppur", "Avinashi", "Dharapuram", "Kangeyam", "Palladam", "Udumalpet"]
    },
    {
      district: "Tiruvallur",
      cities: ["Tiruvallur", "Avadi", "Ponneri", "Gummidipoondi", "Tiruttani"]
    },
    {
      district: "Tiruvannamalai",
      cities: ["Tiruvannamalai", "Arani", "Chengam", "Polur", "Vandavasi"]
    },
    {
      district: "Tiruvarur",
      cities: ["Tiruvarur", "Kudavasal", "Mannargudi", "Thiruthuraipoondi", "Needamangalam"]
    },
    {
      district: "Vellore",
      cities: ["Vellore", "Katpadi", "Gudiyatham", "Ambur", "Pernambut"]
    },
    {
      district: "Viluppuram",
      cities: ["Viluppuram", "Tindivanam", "Gingee", "Kallakurichi"]
    },
    {
      district: "Virudhunagar",
      cities: ["Virudhunagar", "Sivakasi", "Rajapalayam", "Aruppukkottai", "Srivilliputhur"]
    }
  ];
  const handleGetLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude
      const lang = pos.coords.longitude
      setPosition([lat, lang])
    })
  }
  const [selectedDistrict, setSelectedDistrict] = useState(0)
  const isFailed = () => {
    navigate("/login")
  }
  const getService = async () => {
    const response = await axios.get(`${serviceBase}/service/${serviceId}`, { withCredentials: true })
    response && response.data.success == false && (response.data.message == "continue with login" || response.data.message == "unAuthorized token" || response.data.message == "can`t find user" || response.data.message == "error from get profile") && isFailed()
    response && response.data.success == false && (response.data.message == "inValid serviceId" || response.data.message == "can`t find service" || response.data.message == "error from getServiceById") && setIsError(true)
    response && response.data.success == true && response.data.message == "service finded" && setService(response.data.data)

  }
  useEffect(() => {
    getService()
  }, [])
  return (
    <div className="service-details-page">
      {console.log(service)
      }
      <div className="container">
        {!isError && service && <div className="service-details">
          {/* service Header */}
          <div className="service-header">
            <div className="service-main-info">
              <div className="service-logo-large">
                <img src={"service.logo"} alt="" />
              </div>
              <div className="service-title-section">
                <h1 className="service-name">{service && service.serviceName}</h1>
                <p className="service-tagline">{service && service.serviceCategory}</p>
                <span className="meta-item meta-item-price">
                  <strong>Rs. {service && service.servicePrice}</strong>
                </span>
                <hr />
                <div className="service-meta-info">
                  <span className="meta-item">
                    <strong>Provider Name: <br /> </strong> {service && service.provider.userName}
                  </span>
                  <br />
                  <span className="meta-item">
                    <strong>Distance:</strong>
                    <span>7 KM</span>
                  </span>
                  <hr />
                </div>
                <div className="meta-item">
                  <strong>Service Id: <br /> </strong> {service && service._id}
                  <span className="meta-item">
                    <strong>Ratings: <br /> </strong> 4.5
                  </span>
                </div>
                <div className="ratings-category ratings-category-details">
                  <div className="service-list">
                    <h3>COD available</h3>
                    <h3>100+ Customers</h3>
                    {/* <h3>+2 More</h3> */}
                  </div>
                </div>
                <div className="ratings-now-btn">
                  <h5>See Ratings and Reviews</h5>
                </div>
              </div>
            </div>

            {/* Visit service Button */}
            <div className="service-actions">
              <a
                href={"service.website"}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-button"
              >
                Visit service Website
                <span className="external-icon">↗</span>
              </a>
            </div>
          </div>

          {/* service Content */}
          <div className="service-content">
            {/* About Section */}
            <section className="service-section">
              <h2 className="section-title">About This Service</h2>
              <p className="section-content">
                {
                  service && service.serviceDescription
                }
              </p>
            </section>

            {/* Problem Solved Section */}
            <section className="service-section service-section-middle">
              <h2 className="section-title">Address</h2>
              <MapContainer center={position} zoom={13} style={{ height: "200px" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position} />
              </MapContainer>
              <div onClick={() => { handleGetLocation() }} style={{ padding: "10px 20px", marginTop: "20px", cursor: "pointer" }} className="selectlocation">Select You Location</div>
              {/* <div className="address-edit">
                <div className="address-edit-input">
                  <label htmlFor="FullName">Select Label</label>
                  <select name="label" id="">
                    <option value="home">Home</option>
                    <option value="office">Office</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div className="address-edit-input">
                  <label htmlFor="userName">Select District</label>
                  <select onClick={(e)=>{
                    setSelectedDistrict(e.target.selectedIndex)
                  }} name="district" id="">
                    {
                      tamilNaduLocations.map((district) => {
                        return <option key={district.district} value={district.district}>{district.district}</option>
                      })
                    }
                  </select>
                </div>
                <div className="address-edit-input">
                  <label htmlFor="userName">City</label>
                  <select onClick={()=>{}} name="city" id="">
                    {
                      tamilNaduLocations[selectedDistrict].cities.map((city) => {
                        return <option key={city} value={city}>{city}</option>
                      })
                    }
                  </select>
                </div>
              </div> */}
              {/* <div className="address-edit">
                <div className="address-edit-input">
                  <label htmlFor="FullName">State</label>
                  <input disabled type="text" value={"TamilNadu"} name="" id="" placeholder='Enter Full Addres'/>
                </div>
                <div className="address-edit-input">
                  <label htmlFor="FullName">Full Address</label>
                  <input type="text" name="" id="" placeholder='Enter Full Addres'/>
                </div>
                <div className="address-edit-input">
                  <label htmlFor="userName">Pin Code</label>
                  <input type="number" name="" id="" placeholder='Pin code'/>
                </div>
              </div> */}
              {/* <h2 style={{ marginTop: "20px" }} className="section-title">Choose Date</h2>
              <input style={{ cursor: "pointer" }} type="date" className='date-chooser' /> */}
            </section>
            {/* Final CTA */}
            <section className="service-section cta-section">
              <div className="cta-content">
                <h3>Ready to Get Service {service.serviceName}?</h3>
                <p></p>
                <a
                  href={"/book"}
                  className="cta-button"
                >
                  Book Your Service Now
                  <span className="external-icon">↗</span>
                </a>
              </div>
            </section>
          </div>
        </div>}
        {
          !service && <div className='service-details-error'>
            <h1>Can`t get the Service!</h1>
            <h5> try to refresh the page</h5>
          </div>
        }
      </div>
    </div>
  );
};

export default ServiceDetails;