import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function ReservationForm() {

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [partySize, setPartySize] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [phoneError, setPhoneError] = useState('');
    const [dateError, setDateError] = useState('');
    const [partySizeError, setPartySizeError] = useState('');
    const [email, setEmail] = useState('');

    async function handleSubmit(e) {
        try{
            setLoading(true);
            e.preventDefault();
            if (!name || !phoneNumber || !date || !time || !partySize) {
                alert("Please fill in all fields!");
                setLoading(false);
                return;
            }
            
            await axios.post('http://localhost:5000/api/bookings', {
                name,
                phone: phoneNumber,
                email,
                date,
                time,
                partySize,
            });
            
            setSuccessMessage('Your booking was successful!');
            setErrorMessage('');
            setName('');
            setPhoneNumber('');
            setDate('');
            setTime('');
            setPartySize('');
            setEmail('');
            setTimeout(() => setSuccessMessage(''), 5000);
            setLoading(false);
    } catch (err) {
        setSuccessMessage('');
        setErrorMessage('There was an error.');
        console.log(err);
        setTimeout(() => setErrorMessage(''), 5000);
        setLoading(false);
    } finally {
        setLoading(false);
      }
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="reservation-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    required
                />
                <input
                    type="date"
                    name="date"
                    placeholder="Date"
                    value={date}
                    onChange={(e) => {
                        const value = e.target.value;
                        setDate(value);

                        const today = new Date().toISOString().split('T')[0];
                        if (value < today) {
                            setDateError('Please choose a future date');
                        } else {
                            setDateError('');
                        }
                    }}
                />
                <input
                    type="time"
                    name="time"
                    placeholder="Time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <input
                    type="text"
                    name="partySize"
                    placeholder="Party"
                    value={partySize}
                    onChange={(e) => {
                        const value = e.target.value;
                        setPartySize(value);

                        const numericValue = Number(value);
                        if (value === '') {
                            setPartySizeError('');
                        } else if (numericValue < 2 || numericValue > 20 || isNaN(numericValue)) {
                            setPartySizeError('Please enter a valid party size between 2 and 20, for bigger parties please contact us')
                        } else {
                            setPartySizeError('');
                        }
                    }}
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Booking..." : "Book Now"}
                </button>
            </form>
            {loading && <p>Loading...</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p>{successMessage}</p>}
            {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
            {dateError && <p style={{ color: 'red' }}>{dateError}</p>}
            {partySizeError && <p style={{ color: 'red' }}>{partySizeError}</p>}
        </div>
    )
}

export default ReservationForm;