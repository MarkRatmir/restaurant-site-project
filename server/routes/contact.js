import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, phoneNumber, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

    try{
        await transporter.sendMail({
            from: email,
            to: process.env.GMAIL_USER,
            subject: `Contact Form: ${subject || 'No subject'}`,
            text:  `
                Name: ${name}
                Email: ${email}
                Phone: ${phoneNumber || 'N/A'}
                Message: ${message}
                `,
        });

        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: 'Failed to send message' });
        console.log(err);
    }
});

export default router;