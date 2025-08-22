import { useState } from "react";
import axios from "axios";
import '../styles/AdminLogin.css';

function AdminLogin({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password,
            });
            localStorage.setItem("token", res.data.token);
            onLogin();
        } catch (err) {
            if (err.response) {
                console.log("Error response:", err.response.data);
            } else {
                console.log("Error message:", err.message);
            }
            alert("Invalid credentials");
        }
    };

    return (
        <form onSubmit={handleLogin} className="admin-login-form">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            <button type="submit">Login</button>
        </form>
    );
}

export default AdminLogin;