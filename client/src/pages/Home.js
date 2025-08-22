import '../styles/Home.css';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm.jsx';
import Section from '../components/SectionAnimation.jsx';
import ImageCarousel from '../components/ImageCarousel.jsx';

const images = [
    "https://www.thespruceeats.com/thmb/H0YjdoMIhz0VqvbQskQYq3VWnqo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BakedStuffedLobster-TheSpruce_DianaChistruga-3fcb6301491a4be193ecf40d0735e8d1.jpg",
    "https://khni.kerry.com/wp-content/uploads/2019/02/Restaurant-meal.jpg",
    "https://media.istockphoto.com/id/911978890/photo/delicious-gourmet-rack-of-lamb-recipe.jpg?s=612x612&w=0&k=20&c=gkkQOmv7DKrX4zQ_PFcR-M1CtdvMiwBjSNj3QnZlc70="
];

function Home() {
    return(
        <div className="main-content">
            <div className="home-page-banner">
                <div className="home-page-overlay">
                    <div className="home-banner-content">
                        <h1>Welcome to our restaurant!</h1>
                        <p>Where fine dining meets unforgettable flavor.</p>
                    </div>
                </div>
            </div>
            <Section animation="fadeLeft" duartion={1} threshold={0.4}>
            <div className="introduction-section">
                <div className="introduction-box">
                    <h2>Explore our restaurant</h2>
                    <p>We serve delicious meals made with love and fresh ingredients. Whether you're here for a quick bite or a family dinner, we’ve got you covered.</p>
                </div>
            </div>
            </Section>
            <div className="menu-preview">
                <div className="menu-preview-overlay">
                    <Section animation="zoomIn" threshold={0.1}>
                    <ImageCarousel images={images} />
                    </Section>
                    <div className="menu-button-container">
                    <Link to="/menu" className="menu-button">Our Menu</Link>
                    </div>
                </div>
            </div>
            <Section animation="fadeUp" threshold={0.2}>
            <div className="reservation-section">
                <div className="reservation-items">
                    <div className="reservation-link-box">
                        <h2>Reservation</h2>
                        <p>Restaurant is opened Monday-Saturday 12pm-11pm (the kitchen closes at 10pm)</p>
                        <Link to="/reservation" className="reservation-button">Book a table</Link>
                    </div>
                    <div className="reservation-section-image">

                    </div>
                </div>
            </div>
            </Section>
            <div className="contact-section">
                <div className="contact-items">
                    <div className="map-container">
                        <Section animation="fadeLeft" threshold={0.2} duration={0.4}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1479.1126422036443!2d26.723533044449695!3d58.38022747937184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1set!2see!4v1754764939111!5m2!1set!2see" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            loading="lazy"
                            title="Restaurant Location"
                        ></iframe>
                        </Section>
                    </div>
                    <div className="contact-form-div">
                        <Section animation="fadeRight" threshold={0.2} duration={0.4}>
                            <h2>Contact us</h2>
                            <ContactForm />
                        </Section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;