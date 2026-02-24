import './Css/ServiceDetails.css';
import { Link } from 'react-router-dom';
const ServiceDetails = () => {
  return (
    <div className="service-details-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>→</span>
          <Link to={`/category/${""}`}>servicecategory</Link>
          <span>→</span>
          <span>servicename</span>
        </nav>

        <div className="service-details">
          {/* service Header */}
          <div className="service-header">
            <div className="service-main-info">
              <div className="service-logo-large">
                <img src={"service.logo"} alt="" />
              </div>
              <div className="service-title-section">
                <h1 className="service-name">Vasanth</h1>
                <p className="service-tagline">Ac Service</p>
                <hr />
                <div className="service-meta-info">
                  <span className="meta-item">
                    <strong>Email: <br /> </strong> mrvasanth93@gmail.com
                  </span>
                  <span className="meta-item">
                    <strong>Phone:</strong>
                    <span>9345488130</span>
                  </span> <br />
                  <span className="meta-item">
                    <strong>Distance:</strong>
                    <span>7 KM</span>
                  </span>
                  <hr />
                  <span className="meta-item">
                    <strong>Email: <br /> </strong> mrvasanth93@gmail.com
                  </span>
                  <span className="meta-item">
                    <strong>Ratings: <br /> </strong> 4.5
                  </span>
                </div>
                <div className="ratings-now-btn">
                  <h5>See Available Slots</h5>
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
              <p className="section-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi blanditiis pariatur incidunt, excepturi illo qui atque repellendus itaque, eaque reprehenderit, dolore libero. Sit minima at harum labore quia distinctio nihil?</p>
            </section>

            {/* Problem Solved Section */}
            <section className="service-section">
              <h2 className="section-title">What Problem It Solves</h2>
              <p className="section-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, consectetur, repudiandae, at ratione illum cupiditate esse voluptates similique distinctio dolores dicta. Obcaecati necessitatibus, porro voluptatibus ipsa a ipsum. Soluta, excepturi?</p>
            </section>

            {/* Final CTA */}
            <section className="service-section cta-section">
              <div className="cta-content">
                <h3>Ready to Get Service {"service.name"}?</h3>
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
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;