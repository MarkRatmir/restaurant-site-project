import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

const ADMIN_EMAIL = "admin@example.com";
const ADMIN_PASSWORD = "supersecret";

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log("Comparing:", email, "===", ADMIN_EMAIL, "and", password, "===", ADMIN_PASSWORD);

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        const token = jwt.sign({ role: "admin" }, "jwtSecretkey", { expiresIn: "1h" });
        res.json({ token });
    } else {
        res.status(401).json({ error: "Invalid credentials"});
    }
});

export default router;