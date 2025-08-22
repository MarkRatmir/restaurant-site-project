import '../styles/Admin.css';
import { useState, useEffect } from 'react';
import axios from "axios";

function Admin() {
    const [bookings, setBookings] = useState([]);

    const approveBooking = async (id) => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.put(
                `http://localhost:5000/api/bookings/${id}`,
                { status: "approved" },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            const updated = res.data;

            setBookings(bookings.map(booking => booking._id === id ? updated : booking));
        } catch (err) {
            console.error("Error approving booking:", err);
        }
    };

    const rejectBooking = async (id) => {
        try {
            const token = localStorage.getItem("token");
        const res = await axios.put(
            `http://localhost:5000/api/bookings/${id}`,
            { status: "rejected" },
            { headers: { Authorization: `Bearer ${token}` } }
            );

            const updated = res.data;

            setBookings(bookings.map(booking => booking._id === id ? updated : booking));
        } catch (err) {
            console.error("Error approving booking:", err);
        }
    }

    const deleteBooking = async (id) => {
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`http://localhost:5000/api/bookings/${id}`,
                { headers: { Authorization: `Bearer ${token}` }}
            );

            setBookings(bookings.filter(booking => booking._id !== id));
        } catch (err) {
            console.error("Error deleting booking:", err);
        }
    };

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get("http://localhost:5000/api/bookings", {
                    headers: { Authorization: `Bearer ${token}`}
                });
                setBookings(res.data);
            } catch (err) {
                console.error("Error fetching bookings:", err);
            }
        };
        fetchBookings();
    }, []);
    return (
        <div className="bookings-table">
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Date</th>
                        <th>Party Size</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking._id}>
                            <td>{booking.name}</td>
                            <td>{booking.phone}</td>
                            <td>{booking.date}</td>
                            <td>{booking.partySize}</td>
                            <td>{booking.status}</td>
                            <td>
                                <button onClick={() => approveBooking(booking._id)}>Approve</button>
                                <button onClick={() => rejectBooking(booking._id)}>Reject</button>
                                <button onClick={() => deleteBooking(booking._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Admin;