// import "./Css/WhyChooseUs.css"
const services = [
    { title: "Public Safety", icon: "shield" },
    { title: "Delivery", icon: "truck" },
    { title: "Film Production", icon: "video" },
    { title: "Inspection", icon: "clipboard" },
    { title: "News & Media", icon: "mic" },
    { title: "Construction", icon: "tools" }
];

const Icon = ({ type }) => {
    switch (type) {
        case "shield":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
                </svg>
            );

        case "truck":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <rect x="1" y="7" width="12" height="10" />
                    <rect x="13" y="10" width="7" height="7" />
                </svg>
            );

        case "video":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <rect x="3" y="6" width="13" height="12" />
                    <polygon points="16,10 22,7 22,17 16,14" />
                </svg>
            );

        case "clipboard":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="12" height="16" />
                </svg>
            );

        case "mic":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <rect x="9" y="2" width="6" height="12" rx="3" />
                    <line x1="12" y1="14" x2="12" y2="20" />
                </svg>
            );

        case "tools":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <line x1="4" y1="20" x2="20" y2="4" />
                    <line x1="14" y1="4" x2="20" y2="10" />
                </svg>
            );

        default:
            return null;
    }
};

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us-section">
            <div className="why-choose-us-container">
                <h2 className="why-choose-us-title">
                    We offer a whole range of treatments for you, your family and friends
                </h2>
                <div className="why-choose-us-grid">
                    {services.map((service, index) => (
                        <div className="why-choose-us-card" key={index}>
                            <div className="icon">
                            </div>
                            <span>{service.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;