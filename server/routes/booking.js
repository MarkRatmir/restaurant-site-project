import express from 'express';
import { authMiddleware } from '../middleware/auth.js';
import BookingItem from '../models/Booking.js';
import nodemailer from 'nodemailer';

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
    try {
        const bookings = await BookingItem.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ error: "Server error"});
    }
});

router.post('/', async (req, res) => {
    try {
        const newBooking = new BookingItem(req.body);
        await newBooking.save();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: newBooking.email,
            subject: "Booking Confirmation",
            html: `
            <h2>Thank you for your reservation!</h2>
            <p>Hello ${newBooking.name},</p>
            <p>Your booking is confirmed for <strong>${newBooking.date}</strong> at <strong>${newBooking.time}</strong> for <strong>${newBooking.partySize}</strong> guests.</p>
            <p>We look forward to seeing you!</p>
            `,
        });

        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            subject: "New Booking Received",
            html: `
                <h2>New Booking</h2>
            <p><strong>Name:</strong> ${newBooking.name}</p>
            <p><strong>Email:</strong> ${newBooking.email}</p>
            <p><strong>Phone:</strong> ${newBooking.phone}</p>
            <p><strong>Guests:</strong> ${newBooking.partySize}</p>
            <p><strong>Date:</strong> ${newBooking.date}</p>
            <p><strong>Time:</strong> ${newBooking.time}</p>
            `
        });

        res.status(201).json(newBooking);
    } catch (err) {
        res.status(400).json({ error: "Invalid data"});
        console.log(err);
    }
});

router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const deletedBooking = await BookingItem.findByIdAndDelete(req.params.id);
        if (!deletedBooking) {
            return res.status(400).json({ error: "Item not found"});
        }
    } catch (err) {
        res.status(500).json({ error: "Server error"});
    }
});

router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const updatedBooking = await BookingItem.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedBooking) {
            return res.status(400).json({ error: "Item not found" });
        }
        
        res.json(updatedBooking);
    } catch (err) {
        res.status(400).json({ error: "Bad request"});
    }
});

export default router;