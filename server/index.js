import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import menuRoutes from "./routes/menu.js";  // you can call the import anything you want
import bookingRoutes from "./routes/booking.js";
import contactRoutes from "./routes/contact.js";
import authRoutes from "./routes/admin.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/menu', menuRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");

        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is running on ${process.env.PORT || 5000}`);
        });
    })
    .catch(err => {
        console.error("MongoDB connection error:", err)
    });