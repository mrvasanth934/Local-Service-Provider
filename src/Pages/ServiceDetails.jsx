import './Css/ServiceDetails.css';
import { Link } from 'react-router-dom';
const ServiceDetails = () => {
  return (
    <div className="service-details-page">
      <div className="container">
        <div className="service-details">
          {/* service Header */}
          <div className="service-header">
            <div className="service-main-info">
              <div className="service-logo-large">
                <img src={"service.logo"} alt="" />
              </div>
              <div className="service-title-section">
                <h1 className="service-name">Painting</h1>
                <p className="service-tagline">Home decor</p>
                <hr />
                <div className="service-meta-info">
                  <span className="meta-item">
                    <strong>Provider: <br /> </strong> Vasanth
                  </span>
                  <span className="meta-item">
                    <strong>Provider Id:</strong>
                    <span>#88490345634</span>
                  </span> <br />
                  <span className="meta-item">
                    <strong>Distance:</strong>
                    <span>7 KM</span>
                  </span>
                  <hr />
                </div>
                <div className="meta-item">
                  <strong>Service Id: <br /> </strong> #754358534859
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