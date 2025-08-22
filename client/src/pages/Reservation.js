import '../styles/Reservation.css';
import ReservationForm from "../components/ReservationForm";
import Section from '../components/SectionAnimation';

function Reservation() {
    return(
        <div className="reservation-page">
            <div className="reservation-page-overlay">
                <div className="reservation-form-container">
                    <Section animation="fadeLeft">
                    <div className="reservation-heading">
                        <h2>Book a table</h2>
                    </div>
                    </Section>
                    <Section animation="fadeRight">
                    <div className="reservation-box">
                        <ReservationForm />
                    </div>
                    </Section>
                </div>
            </div>
        </div>
    )
}

export default Reservation;