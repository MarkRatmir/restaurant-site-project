import { useState } from 'react';
import axios from 'axios';

function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [phoneError, setPhoneError] = useState('');

    async function handleSubmit(e) {
        try{
            e.preventDefault();
            setLoading(true);

            if (!name || !email || !phoneNumber || !subject || !message) {
                alert("Please fill in all fields.");
                setLoading(false);
                return;
            }

            await axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, {
                name,
                email,
                phoneNumber,
                subject,
                message,
            });

            setSuccessMessage('Your message was sent successfully!');   
            setTimeout(() => setSuccessMessage(''), 5000);
            setName('');
            setEmail('');
            setPhoneNumber('');
            setSubject('');
            setMessage('');

        } catch (err) {
            setSuccessMessage('');
            setErrorMessage('There was an error.');
            setTimeout(() => setErrorMessage(''), 5000);
            setLoading(false);
            console.log(err);
        } finally {
            setLoading(false);
        }
    }




    return(
        <div>
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Your Phone Number"
                    value={phoneNumber}
                    onChange={(e) => {
                        const value = e.target.value;
                        setPhoneNumber(value);

                        if (value === '') {
                            setPhoneError('');
                        } else if (!/^\d{8}$/.test(value)) {
                            setPhoneError('Phone number must be 8 digits');
                        } else {
                            setPhoneError('');
                        }
                    }}
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                    type="text"
                    name="message"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
            {loading && <p>Loading...</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p>{successMessage}</p>}
            {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
        </div>
    )
}

export default ContactForm;