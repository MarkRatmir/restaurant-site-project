import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import '../styles/Footer.css';

function Footer() {
    return(
        <div className="footer">
            <div className="footer-info-location">
                <p>
                    Golden Fork<br/>
                    42 Willow Street<br/>
                    Brookhaven<br/>
                    54721<br/>
                    +123 456 789<br/>
                    contact@goldenfork.com
                </p>
            </div>
            <div className="footer-info-opening">
                <p>
                    Open<br/>
                    Monday-Saturday<br/>
                    12pm-11pm, the kitchen closes at 10pm
                </p>
            </div>
            <div className="footer-info-contacts">
                <p>Follow us</p>
                <a href="https://facebook.com"><FaFacebook size={24}/></a>
                <a href="https://instagram.com"><FaInstagram size={24}/></a>
                <a href="https://x.com"><FaTwitter size={24}/></a>
            </div>
        </div>
    );
}

export default Footer;